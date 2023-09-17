export type RoleType = '' | '*' | 'admin' | 'user';
export interface UserState {
  id: string;
  userName?: string;
  userAvatar?: string;
  userProfile?: string;
  userRole: RoleType;
  createTime?: string;
  updateTime?: string;
}
