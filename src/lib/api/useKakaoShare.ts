export const useKakaoShare = () => {
  const shareWithTemplate = (description: string, url = "") => {
    window.Kakao.Share.sendCustom({
      templateId: 124174,
      templateArgs: {
        description,
        url,
      },
    });
  };

  return { shareWithTemplate };
};
