"use client";

import { useState } from "react";

export interface SidebarItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  href?: string;
  children?: SidebarItem[];
}

export interface SidebarProps {
  items: SidebarItem[];
  isCollapsed?: boolean;
  onToggle?: () => void;
  onItemClick?: (item: SidebarItem) => void;
  className?: string;
}

export const Sidebar = ({
  items,
  isCollapsed = false,
  onToggle,
  onItemClick,
  className = "",
}: SidebarProps) => {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleExpanded = (itemId: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(itemId)) {
      newExpanded.delete(itemId);
    } else {
      newExpanded.add(itemId);
    }
    setExpandedItems(newExpanded);
  };

  const renderSidebarItem = (item: SidebarItem, level = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedItems.has(item.id);
    const paddingLeft = level * 16 + 16;

    return (
      <div key={item.id} className="w-full">
        <div
          className={`
            flex items-center justify-between w-full px-3 py-2 text-left text-sm
            hover:bg-gray-100 transition-colors cursor-pointer
            ${isCollapsed ? "justify-center" : ""}
          `}
          style={{ paddingLeft: isCollapsed ? 12 : paddingLeft }}
          onClick={() => {
            if (hasChildren) {
              toggleExpanded(item.id);
            } else if (onItemClick) {
              onItemClick(item);
            }
          }}
          title={isCollapsed ? item.label : undefined}
        >
          <div className="flex items-center space-x-3">
            {item.icon && (
              <span className="flex-shrink-0 w-5 h-5 text-gray-500">
                {item.icon}
              </span>
            )}
            {!isCollapsed && (
              <span className="truncate text-gray-700">{item.label}</span>
            )}
          </div>
          {!isCollapsed && hasChildren && (
            <svg
              className={`w-4 h-4 text-gray-400 transition-transform ${
                isExpanded ? "rotate-90" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          )}
        </div>
        {!isCollapsed && hasChildren && isExpanded && (
          <div className="ml-4">
            {item.children?.map((child) => renderSidebarItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <aside
      className={`
        bg-white border-r border-gray-200 h-full flex flex-col
        transition-all duration-300 ease-in-out
        ${isCollapsed ? "w-16" : "w-64"}
        ${className}
      `}
    >
      {/* Header com botão de toggle */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        {!isCollapsed && (
          <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
        )}
        {onToggle && (
          <button
            onClick={onToggle}
            className="p-1 rounded-lg hover:bg-gray-100 transition-colors"
            title={isCollapsed ? "Expandir sidebar" : "Recolher sidebar"}
          >
            <svg
              className={`w-5 h-5 text-gray-500 transition-transform ${
                isCollapsed ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
              />
            </svg>
          </button>
        )}
      </div>

      {/* Lista de itens */}
      <nav className="flex-1 overflow-y-auto py-2">
        {items.map((item) => renderSidebarItem(item))}
      </nav>
    </aside>
  );
};
