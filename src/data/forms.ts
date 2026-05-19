export type RoleType = "self" | "committee";
export type FormType = "general" | "responsible";
export type SectionCode = "A" | "B" | "C" | "D" | "E";

export type Option = {
  label: string;
  score: number;
  /** 由 Excel H 欄「評語」或「資料來源與說明」整理而來，用於委員端自動產出評語。 */
  comment?: string;
};

export type ChoiceQuestion = {
  id: string;
  itemId: string;
  itemTitle: string;
  maxText: string | number;
  title: string;
  kind: "choice";
  options: Option[];
};

export type NumberQuestion = {
  id: string;
  itemId: string;
  itemTitle: string;
  maxText: string | number;
  title: string;
  kind: "number";
  inputLabel: string;
  helper: string;
  min: number;
  max: number;
  step: number;
  multiplier: number;
  suffix: string;
};

export type Question = ChoiceQuestion | NumberQuestion;

export type Section = {
  code: SectionCode;
  title: string;
  max: number;
  questions: Question[];
};

export type EvaluationFormData = {
  id: FormType;
  label: string;
  shortLabel: string;
  title: string;
  description: string;
  sections: Section[];
};

export const ROLES = {
  self: {
    id: "self",
    label: "據點（自評）",
    shortLabel: "自評",
    description: "由據點端填寫，可多人分區完成 A–E 項目，供後續彙整自評分數。",
  },
  committee: {
    id: "committee",
    label: "委員評分",
    shortLabel: "委員",
    description: "由評分委員填寫，可依分工選擇 A–E 區段，系統會依選項自動彙整評語。",
  },
} as const;

export const FORM_TYPES = [
  {
    id: "general",
    label: "一般型延續",
    description: "適用一般型失智社區服務據點延續型考評。",
  },
  {
    id: "responsible",
    label: "權責型延續",
    description: "適用權責型失智社區服務據點延續型考評。",
  },
] as const;

export const SECTION_SUMMARY: Record<SectionCode, { title: string; max: number }> = {
  A: { title: "行政效能", max: 16 },
  B: { title: "服務品質管理", max: 26 },
  C: { title: "照顧服務品質", max: 38 },
  D: { title: "重要加扣分項目", max: 3 },
  E: { title: "環境安全與緊急意外事件處理", max: 20 },
};

export const SECTION_CODES: SectionCode[] = ["A", "B", "C", "D", "E"];

export const FORMS: Record<FormType, EvaluationFormData> = {
  "general": {
    "id": "general",
    "label": "一般型延續",
    "shortLabel": "一般型",
    "title": "115 年一般型失智社區服務據點考評指標（延續型）",
    "description": "適用一般型失智社區服務據點延續型考評。",
    "sections": [
      {
        "code": "A",
        "title": "行政效能",
        "max": 16,
        "questions": [
          {
            "id": "A01",
            "itemId": "A1",
            "itemTitle": "A1.行政配合事項",
            "maxText": "6",
            "title": "1. 依契約規範期程繳交核銷作業",
            "kind": "choice",
            "options": [
              {
                "label": "是",
                "score": 2
              },
              {
                "label": "否",
                "score": 0,
                "comment": "未依契約規範期程繳交核銷作業"
              }
            ]
          },
          {
            "id": "A02",
            "itemId": "A1",
            "itemTitle": "A1.行政配合事項",
            "maxText": "6",
            "title": "2. 核銷退件次數",
            "kind": "choice",
            "options": [
              {
                "label": "<4次",
                "score": 2
              },
              {
                "label": "≧4次",
                "score": 0,
                "comment": "核銷退件次數過多"
              }
            ]
          },
          {
            "id": "A03",
            "itemId": "A1",
            "itemTitle": "A1.行政配合事項",
            "maxText": "6",
            "title": "3. 依限填報每週雲端報表",
            "kind": "choice",
            "options": [
              {
                "label": "有",
                "score": 2
              },
              {
                "label": "無",
                "score": 0,
                "comment": "未依時程填報每週雲端報表"
              }
            ]
          },
          {
            "id": "A04",
            "itemId": "A2",
            "itemTitle": "A2.114年度經費執行率",
            "maxText": "2",
            "title": "114年度經費執行率\n計算公式=(114年實支經費/(年度核定經費+請增經費))*100%",
            "kind": "choice",
            "options": [
              {
                "label": "100%",
                "score": 2
              },
              {
                "label": "97%≦O<100%",
                "score": 1.5,
                "comment": "114年度經費執行率介於97%至100%"
              },
              {
                "label": "95%≦O<97%",
                "score": 1,
                "comment": "114年度經費執行率介於95%至97%"
              },
              {
                "label": "<95%",
                "score": 0,
                "comment": "114年度經費執行率低於95%"
              }
            ]
          },
          {
            "id": "A05",
            "itemId": "A3",
            "itemTitle": "A3.115年度經費執行",
            "maxText": "4",
            "title": "115年度執行進度 (依經費執行率)\n計算公式=(截至115.6.30實支經費/年度核定)*100%",
            "kind": "choice",
            "options": [
              {
                "label": "≧65%",
                "score": 4
              },
              {
                "label": "40%≦O<64%",
                "score": 2,
                "comment": "115年度執行進度介於40%至64%"
              },
              {
                "label": "<40%",
                "score": 0,
                "comment": "115年度執行進度低於40%"
              }
            ]
          },
          {
            "id": "A06",
            "itemId": "A4",
            "itemTitle": "A4.個案轉介、結案",
            "maxText": "4",
            "title": "1.訂有轉介計畫",
            "kind": "choice",
            "options": [
              {
                "label": "有",
                "score": 2
              },
              {
                "label": "無",
                "score": 0,
                "comment": "無制訂個案轉介計畫"
              }
            ]
          },
          {
            "id": "A07",
            "itemId": "A4",
            "itemTitle": "A4.個案轉介、結案",
            "maxText": "4",
            "title": "2.配合衛生局按時繳交個案轉介情形回覆表，且填報內容完整。",
            "kind": "choice",
            "options": [
              {
                "label": "符合",
                "score": 2
              },
              {
                "label": "不符合",
                "score": 0,
                "comment": "未按時提交個案轉介情形回覆表，且填報內容不完整，需要改善配合度及資料準確性。"
              }
            ]
          }
        ]
      },
      {
        "code": "B",
        "title": "服務品質管理",
        "max": 26,
        "questions": [
          {
            "id": "B01",
            "itemId": "B1",
            "itemTitle": "B1.失智共照中心輔導結果",
            "maxText": "3",
            "title": "依共照中心上半年輔導結果(依缺失計數)",
            "kind": "choice",
            "options": [
              {
                "label": "特優",
                "score": 3
              },
              {
                "label": "優",
                "score": 2,
                "comment": "輔導結果良好，缺失量少"
              },
              {
                "label": "可",
                "score": 1,
                "comment": "輔導結果尚可，缺失數量需要進一步改善。建議加強執行及監控。"
              },
              {
                "label": "差",
                "score": 0,
                "comment": "輔導結果不佳，缺失數量較多。建議針對輔導結果進行全面檢討和改進。"
              }
            ]
          },
          {
            "id": "B02",
            "itemId": "B2",
            "itemTitle": "B2.教育增能",
            "maxText": "5",
            "title": "1.6月30日前至少參與1場次之失智網絡聯繫會議(每季辦理一次)",
            "kind": "choice",
            "options": [
              {
                "label": "完成",
                "score": 2
              },
              {
                "label": "未完成",
                "score": 0,
                "comment": "未於6月30日前參與失智網絡聯繫會議。建請加強期程規劃與資源連結，於下一季派員出席。"
              }
            ]
          },
          {
            "id": "B03",
            "itemId": "B2",
            "itemTitle": "B2.教育增能",
            "maxText": "5",
            "title": "2.據點服務人員及支援人力到職後6個月內完成失智症照顧服務20小時訓練課程",
            "kind": "choice",
            "options": [
              {
                "label": "完成",
                "score": 1
              },
              {
                "label": "未完成",
                "score": 0,
                "comment": "人員到職滿6個月仍未完成20小時失智照顧服務訓練。建請機構加強內部輔導，安排補訓以確保服務品質。"
              }
            ]
          },
          {
            "id": "B04",
            "itemId": "B2",
            "itemTitle": "B2.教育增能",
            "maxText": "5",
            "title": "3.據點服務人力參加標竿學習至少1場次",
            "kind": "choice",
            "options": [
              {
                "label": "完成",
                "score": 2
              },
              {
                "label": "未完成",
                "score": 0,
                "comment": "未參與標竿學習活動。建議後續積極規劃並派員參與，以促進實務經驗交流。"
              }
            ]
          },
          {
            "id": "B05",
            "itemId": "B3",
            "itemTitle": "B3.服務據點之行銷與宣導",
            "maxText": "3",
            "title": "多元宣傳管道進行失智友善推廣，並提供失智據點服務及課程介紹。如：\n實體：□傳單/海報/旗子 □講座 □其他\n網路媒體：□line群組 □FB/Instagram\n□Youtube □其他",
            "kind": "choice",
            "options": [
              {
                "label": "0 項符合",
                "score": 0,
                "comment": "未能提供足夠行銷與宣導佐證。建議補強實體或網路宣導紀錄。"
              },
              {
                "label": "1 項符合",
                "score": 1,
                "comment": "服務據點已具備 1 項行銷與宣導作為，建議持續擴充多元宣傳管道。"
              },
              {
                "label": "2 項符合",
                "score": 2,
                "comment": "服務據點已具備 2 項行銷與宣導作為，建議進一步提升宣導完整性與觸及效益。"
              },
              {
                "label": "3 項以上符合",
                "score": 3
              }
            ]
          },
          {
            "id": "B06",
            "itemId": "B4",
            "itemTitle": "B4.資源連結",
            "maxText": "5",
            "title": "1.進行資源盤點(含正式、非正式資源)，並建置相關資料（如資源分類、聯絡資訊、資源分布圖等）",
            "kind": "choice",
            "options": [
              {
                "label": "完成資源盤點，資料完整，並有更新紀錄或資源分布說明。",
                "score": 2
              },
              {
                "label": "已進行資源盤點，但資料不完整或未更新",
                "score": 1,
                "comment": "已進行資源盤點，惟部分分類、聯絡資訊或分布圖仍欠完整或未及時更新，請修正補齊。"
              },
              {
                "label": "未進行資源盤點與建置相關資料",
                "score": 0,
                "comment": "未進行資源盤點且無建置相關資料。建議盤點轄區內資源，以利後續服務推動。"
              }
            ]
          },
          {
            "id": "B07",
            "itemId": "B4",
            "itemTitle": "B4.資源連結",
            "maxText": "5",
            "title": "2.至少每半年定期更新",
            "kind": "choice",
            "options": [
              {
                "label": "符合",
                "score": 1
              },
              {
                "label": "不符合",
                "score": 0,
                "comment": "未落實每半年定期更新。建議機構建立內部定期查核機制，確保相關資料之即時性與實用性。"
              }
            ]
          },
          {
            "id": "B08",
            "itemId": "B4",
            "itemTitle": "B4.資源連結",
            "maxText": "5",
            "title": "3.進行資源連結後留有紀錄與追蹤",
            "kind": "choice",
            "options": [
              {
                "label": "有資源連結紀錄，且具後續追蹤或回饋紀錄。",
                "score": 2
              },
              {
                "label": "有資源連結紀錄，但未留有後續追蹤紀錄。",
                "score": 1,
                "comment": "雖有資源連結紀錄，但缺乏後續之追蹤紀錄。建請補正後續追蹤流程，以落實服務之連續性。"
              },
              {
                "label": "未提供資源連結紀錄",
                "score": 0,
                "comment": "未提供相關資源連結之紀錄。請落實日常紀錄之留存。"
              }
            ]
          },
          {
            "id": "B09",
            "itemId": "B5",
            "itemTitle": "B5.滿意度調查與分析應用",
            "maxText": "4",
            "title": "1.執行失智者滿意度調查",
            "kind": "choice",
            "options": [
              {
                "label": "符合",
                "score": 1
              },
              {
                "label": "不符合",
                "score": 0,
                "comment": "未執行失智者滿意度調查，請確實施測。"
              }
            ]
          },
          {
            "id": "B10",
            "itemId": "B5",
            "itemTitle": "B5.滿意度調查與分析應用",
            "maxText": "4",
            "title": "2.執行主要照顧者滿意度調查",
            "kind": "choice",
            "options": [
              {
                "label": "符合",
                "score": 1
              },
              {
                "label": "不符合",
                "score": 0,
                "comment": "未執行主要照顧者滿意度調查，請確實執行，以利全方位評估服務成效。"
              }
            ]
          },
          {
            "id": "B11",
            "itemId": "B5",
            "itemTitle": "B5.滿意度調查與分析應用",
            "maxText": "4",
            "title": "3.針對滿意度調查結果進行分析，並留有文件紀錄",
            "kind": "choice",
            "options": [
              {
                "label": "符合",
                "score": 1
              },
              {
                "label": "不符合",
                "score": 0,
                "comment": "未針對調查結果進行分析或留有文件紀錄。建請將調查資料予以統計、分析，並留存。"
              }
            ]
          },
          {
            "id": "B12",
            "itemId": "B5",
            "itemTitle": "B5.滿意度調查與分析應用",
            "maxText": "4",
            "title": "4.依據滿意度調查結果應用於服務規劃，並留有紀錄",
            "kind": "choice",
            "options": [
              {
                "label": "符合",
                "score": 1
              },
              {
                "label": "不符合",
                "score": 0,
                "comment": "未依據調查結果應用於服務規劃或紀錄。建議根據意見回饋擬定改善對策，並落實紀錄。"
              }
            ]
          },
          {
            "id": "B13",
            "itemId": "B6",
            "itemTitle": "B6.提升服務人數",
            "maxText": "6",
            "title": "1.訂有提升服務人數之策略，並能滾動調整。",
            "kind": "choice",
            "options": [
              {
                "label": "訂有具體數策略，並依執行情形定期檢討與調整。",
                "score": 3
              },
              {
                "label": "訂有策略，但未見定期檢討、修正紀錄。",
                "score": 1.5,
                "comment": "雖訂有策略，惟缺乏定期檢討與修正紀錄。建議定期檢討、修正紀錄"
              },
              {
                "label": "未訂策略。",
                "score": 0,
                "comment": "未訂定任何提升服務人數之相關策略。建議擬定具體方案，以利提升服務人數。"
              }
            ]
          },
          {
            "id": "B14",
            "itemId": "B6",
            "itemTitle": "B6.提升服務人數",
            "maxText": "6",
            "title": "2.確實執行且服務人數增加。",
            "kind": "choice",
            "options": [
              {
                "label": "已依策略確實執行，且服務人數較前期增加。",
                "score": 3
              },
              {
                "label": "已執行提升策略，但服務人數未增加。",
                "score": 1.5,
                "comment": "雖已執行提升策略，惟服務人數未見增長。建請重新分析，調整推動策略。"
              },
              {
                "label": "未執行提升策略，或服務人數未增加且無相關因應。",
                "score": 0,
                "comment": "未執行提升策略或服務人數未增，且無相關因應。建請針對服務量能停滯問題，提出檢討與具體因應對策。"
              }
            ]
          }
        ]
      },
      {
        "code": "C",
        "title": "照顧服務品質",
        "max": 38,
        "questions": [
          {
            "id": "C01",
            "itemId": "C1",
            "itemTitle": "C1.照顧服務績效",
            "maxText": "9",
            "title": "1.目標服務人數達成率\n計算公式：1-6月服務人數(歸人)/115年目標數*100%",
            "kind": "choice",
            "options": [
              {
                "label": "≧100%",
                "score": 9
              },
              {
                "label": "84%≦O<100%",
                "score": 7,
                "comment": "目標服務人數達成率介於84%至100%"
              },
              {
                "label": "67%≦O<84%",
                "score": 5,
                "comment": "目標服務人數達成率介於67%至84%"
              },
              {
                "label": "50%≦O<67%",
                "score": 3,
                "comment": "目標服務人數達成率介於50%至67%"
              },
              {
                "label": "<50%",
                "score": 1,
                "comment": "目標服務人數達成率低於50%"
              }
            ]
          },
          {
            "id": "C02",
            "itemId": "C1",
            "itemTitle": "C1.照顧服務績效",
            "maxText": "4",
            "title": "2.當年度累計服務15%BPSD的個案\n計算公式：累計BPSD的個案數/累計個案總數",
            "kind": "choice",
            "options": [
              {
                "label": "達15%(含)以上。",
                "score": 4
              },
              {
                "label": "達10%以上，但未達15%",
                "score": 2,
                "comment": "當年度累計服務15%BPSD的個案達10%以上，但未達15%"
              },
              {
                "label": "未達10%",
                "score": 0,
                "comment": "當年度累計服務15%BPSD的個案未達10%"
              }
            ]
          },
          {
            "id": "C03",
            "itemId": "C2",
            "itemTitle": "C2.服務對象管理機制",
            "maxText": "7",
            "title": "1.訂有服務對象收案及結案管理流程及辦法 (1分)",
            "kind": "choice",
            "options": [
              {
                "label": "符合",
                "score": 1
              },
              {
                "label": "不符合",
                "score": 0,
                "comment": "未訂有服務對象收案及結案管理流程及辦法。建議建置標準作業程序，以資依循。"
              }
            ]
          },
          {
            "id": "C04",
            "itemId": "C2",
            "itemTitle": "C2.服務對象管理機制",
            "maxText": "7",
            "title": "2.建置個案管理名冊，且至少每年更新\n個案資訊一次 (1分)",
            "kind": "choice",
            "options": [
              {
                "label": "符合",
                "score": 1
              },
              {
                "label": "不符合",
                "score": 0,
                "comment": "未建置個案管理名冊，或未落實每年定期更新個案資訊。建請加強名冊管理，確保個案資料之時效性。"
              }
            ]
          },
          {
            "id": "C05",
            "itemId": "C2",
            "itemTitle": "C2.服務對象管理機制",
            "maxText": "7",
            "title": "3.服務個案資料完整(5分)：含個案基本資料、相關診斷證明文件、肖像權同意書、失智據點服務使用說明書、民眾接受失智社區服務據點之個案服務資料授權應用及知情同意書(本項分數全無或全有，皆須符合才有5分)",
            "kind": "choice",
            "options": [
              {
                "label": "符合",
                "score": 5
              },
              {
                "label": "不符合",
                "score": 0,
                "comment": "個案資料不完整。建議全面檢查並補正缺漏文件，以維護個案權益。"
              }
            ]
          },
          {
            "id": "C06",
            "itemId": "C3",
            "itemTitle": "C3.課程、活動規劃與執行",
            "maxText": "11",
            "title": "1.呈現課程多元化，具有不同主題之系列課程",
            "kind": "choice",
            "options": [
              {
                "label": "規劃並辦理多元主題之系列課程，包括型態與面向",
                "score": 3
              },
              {
                "label": "有辦理不同主題課程，但系列性或多元性不足。",
                "score": 1.5,
                "comment": "雖有辦理不同主題課程，但整體課程之系列性或多元性仍不足。建議加強課程規劃之豐富度。"
              },
              {
                "label": "課程主題過於單一，未呈現多元化規劃。",
                "score": 0,
                "comment": "課程主題過於單一，未呈現多元化規劃。建議評估失智症者之特性與照顧，多元且豐富未來之課程設計。"
              }
            ]
          },
          {
            "id": "C07",
            "itemId": "C3",
            "itemTitle": "C3.課程、活動規劃與執行",
            "maxText": "11",
            "title": "2.活動內容符合失智者個別之需求(如參考過去經歷、興趣、文化等，並運用其尚存的能力或優勢)",
            "kind": "choice",
            "options": [
              {
                "label": "活動內容能依失智者個別需求規劃，並具相關評估或佐證資料",
                "score": 3
              },
              {
                "label": "活動內容部分符合失智者需求，但個別化規劃或佐證資料不足。",
                "score": 1.5,
                "comment": "活動內容雖部分符合失智者需求，但個別化規劃或佐證資料仍顯不足。建議精進活動之個別化設計"
              },
              {
                "label": "活動內容未呈現依失智者個別需求規劃。",
                "score": 0,
                "comment": "活動內容未能呈現依失智者之個別需求規劃。建請落實課前個別化評估，以提升活動效益。"
              }
            ]
          },
          {
            "id": "C08",
            "itemId": "C3",
            "itemTitle": "C3.課程、活動規劃與執行",
            "maxText": "11",
            "title": "3.有團體活動企劃與執行紀錄",
            "kind": "choice",
            "options": [
              {
                "label": "具完整團體活動企劃及執行紀錄，內容包含活動目標、流程、參與情形及成果。",
                "score": 3
              },
              {
                "label": "有團體活動企劃及執行紀錄，但內容不完整。",
                "score": 1.5,
                "comment": "雖有團體活動企劃及執行紀錄，惟部分內容未臻完整。建議針對缺漏項目予以補正補充。"
              },
              {
                "label": "未提供團體活動企劃或執行紀錄。",
                "score": 0,
                "comment": "未提供團體活動企劃或執行紀錄。建議落實團體活動之檔案管理與紀錄留存，以維護服務品質。"
              }
            ]
          },
          {
            "id": "C09",
            "itemId": "C3",
            "itemTitle": "C3.課程、活動規劃與執行",
            "maxText": "11",
            "title": "4.導入有助於降低照顧服務人力負荷、照顧服務品質提升(認知活化、體能提升、增強人際互動)之科技設施設備",
            "kind": "choice",
            "options": [
              {
                "label": "已導入，並能說明實際應用於降低照顧負荷或減輕照顧負荷之成效。",
                "score": 2
              },
              {
                "label": "已導入科技設施設備，但應用情形或成效說明不足。",
                "score": 1,
                "comment": "已導入科技設施設備，但應用情形或成效說明不足。建請加強補充該科技設備之實際操作紀錄或成效說明"
              },
              {
                "label": "未導入相關科技設施設備。",
                "score": 0,
                "comment": "未導入相關科技設施設備。建議未來可評估營運現況與個案需求，酌予規劃導入適切之科技設施設備。"
              }
            ]
          },
          {
            "id": "C10",
            "itemId": "C4",
            "itemTitle": "C4.預防及延緩失能方案模組",
            "maxText": "3",
            "title": "1.規劃或已執行同計劃書核備之預防及延緩失能方案(方案內容須與核備計畫書一致)",
            "kind": "choice",
            "options": [
              {
                "label": "符合",
                "score": 1
              },
              {
                "label": "不符合",
                "score": 0,
                "comment": "未規劃或執行同計劃書核備之預防及延緩失能方案。建議確實對照計畫書修正內容，或依實務辦理計畫變更。"
              }
            ]
          },
          {
            "id": "C11",
            "itemId": "C4",
            "itemTitle": "C4.預防及延緩失能方案模組",
            "maxText": "3",
            "title": "2.含認知促進、肌力強化運動等複合或整合性面向",
            "kind": "choice",
            "options": [
              {
                "label": "符合",
                "score": 1
              },
              {
                "label": "不符合",
                "score": 0,
                "comment": "未含認知促進、肌力強化運動等複合或整合性面向。建議於方案中增設相關項目。"
              }
            ]
          },
          {
            "id": "C12",
            "itemId": "C4",
            "itemTitle": "C4.預防及延緩失能方案模組",
            "maxText": "3",
            "title": "3.介入前後效果量測，並進行分析，以為調整方案之參考",
            "kind": "choice",
            "options": [
              {
                "label": "符合",
                "score": 1
              },
              {
                "label": "不符合",
                "score": 0,
                "comment": "因未達成前後效果量測與分析，建請確實落實個案施測並加強數據統計，以作為調整方案之依據。"
              }
            ]
          },
          {
            "id": "C13",
            "itemId": "C5",
            "itemTitle": "C5.照顧者賦能與支持",
            "maxText": "4",
            "title": "1. 規劃與辦理照顧者訓練課程或支持團體，並與共照中心合作至少1場次",
            "kind": "choice",
            "options": [
              {
                "label": "完全符合",
                "score": 2
              },
              {
                "label": "有規劃或辦理，但未與\n共照中心合作",
                "score": 1,
                "comment": "雖有規劃或辦理照顧者訓練課程或支持團體，但未與共照中心合作。建議後續主動與共照中心聯辦活動以符合規範。"
              },
              {
                "label": "未規劃",
                "score": 0,
                "comment": "未規劃或辦理照顧者訓練課程或支持團體。建議規劃與辦理照顧者訓練課程，並與共照中心合作至少1場次"
              }
            ]
          },
          {
            "id": "C14",
            "itemId": "C5",
            "itemTitle": "C5.照顧者賦能與支持",
            "maxText": "4",
            "title": "2. 定期與個案家屬聯繫情形，並留有紀錄",
            "kind": "choice",
            "options": [
              {
                "label": "定期與個案家屬聯繫，且留有完整聯繫紀錄。",
                "score": 2
              },
              {
                "label": "有與個案家屬聯繫，但紀錄不完整或未定期辦理。",
                "score": 1,
                "comment": "有與個案家屬聯繫，但紀錄不完整或未定期辦理。建議定期聯繫個案家屬以及優化紀錄內容"
              },
              {
                "label": "未與個案家屬聯繫或未留有紀錄。",
                "score": 0,
                "comment": "未與個案家屬聯繫或未留有紀錄。建議建立個案家屬定期聯繫機制並確實登載，以落實個案管理品質。"
              }
            ]
          }
        ]
      },
      {
        "code": "D",
        "title": "重要加扣分項目(計算期間：114年7月至115年6月)",
        "max": 3,
        "questions": [
          {
            "id": "D01",
            "itemId": "D1",
            "itemTitle": "D1.違反服務契約",
            "maxText": "每記1點扣總分1分",
            "title": "依照特約契約第17條_人員異動未於情事發生前向衛生局提出申請、服務人數未達標等。",
            "kind": "number",
            "inputLabel": "違約記點數",
            "helper": "每記 1 點，扣總分 1 分。未記點請填 0。",
            "min": 0,
            "max": 99,
            "step": 1,
            "multiplier": -1,
            "suffix": "點"
          },
          {
            "id": "D02",
            "itemId": "D2",
            "itemTitle": "D2. 配合政策落實淨零排碳",
            "maxText": "1",
            "title": "配合政策落實淨零排碳或優先購買環保標章產品等綠色採購",
            "kind": "number",
            "inputLabel": "加分",
            "helper": "由委員共識後給分，最高 1 分。",
            "min": 0,
            "max": 1,
            "step": 0.5,
            "multiplier": 1,
            "suffix": "分"
          },
          {
            "id": "D03",
            "itemId": "D3",
            "itemTitle": "D3.其他",
            "maxText": "2",
            "title": "其他加分事宜。",
            "kind": "number",
            "inputLabel": "加分",
            "helper": "由委員共識後給分，最高 2 分。",
            "min": 0,
            "max": 2,
            "step": 0.5,
            "multiplier": 1,
            "suffix": "分"
          }
        ]
      },
      {
        "code": "E",
        "title": "環境安全與緊急意外事件處理",
        "max": 20,
        "questions": [
          {
            "id": "E01",
            "itemId": "E1",
            "itemTitle": "E1.場地空間、動線與使用",
            "maxText": "4",
            "title": "1.出入口有明顯且對失智者友善之標示或門牌",
            "kind": "choice",
            "options": [
              {
                "label": "符合",
                "score": 1
              },
              {
                "label": "不符合",
                "score": 0,
                "comment": "出入口無明顯且對失智者友善之標示或門牌，建議增設。"
              }
            ]
          },
          {
            "id": "E02",
            "itemId": "E1",
            "itemTitle": "E1.場地空間、動線與使用",
            "maxText": "4",
            "title": "2.出入口、室內空間保持通暢無阻礙物",
            "kind": "choice",
            "options": [
              {
                "label": "符合",
                "score": 1
              },
              {
                "label": "不符合",
                "score": 0,
                "comment": "出入口、室內空間有阻礙物，影響動線之通暢性。"
              }
            ]
          },
          {
            "id": "E03",
            "itemId": "E1",
            "itemTitle": "E1.場地空間、動線與使用",
            "maxText": "4",
            "title": "3.符合安全性，如非主要出入口的管制、樓地板高低落差的處理等",
            "kind": "choice",
            "options": [
              {
                "label": "符合",
                "score": 1
              },
              {
                "label": "不符合",
                "score": 0,
                "comment": "未符合安全性，建議視情況改善。"
              }
            ]
          },
          {
            "id": "E04",
            "itemId": "E1",
            "itemTitle": "E1.場地空間、動線與使用",
            "maxText": "4",
            "title": "4.設有輔助設備 ，如扶手、斜坡板等",
            "kind": "choice",
            "options": [
              {
                "label": "符合",
                "score": 1
              },
              {
                "label": "不符合",
                "score": 0,
                "comment": "未設有輔助設備，影響長者安全，建議增設增設扶手與防滑斜坡等輔具。"
              }
            ]
          },
          {
            "id": "E05",
            "itemId": "E2",
            "itemTitle": "E2.空間規劃與佈置",
            "maxText": "5",
            "title": "1.□光線充足、□空氣流通、和□桌椅穩固，椅子有靠背(需全符合才給分)",
            "kind": "choice",
            "options": [
              {
                "label": "符合",
                "score": 1
              },
              {
                "label": "不符合",
                "score": 0,
                "comment": "採光通風欠佳或桌椅不穩，建議改善照明並汰換不穩桌椅。"
              }
            ]
          },
          {
            "id": "E06",
            "itemId": "E2",
            "itemTitle": "E2.空間規劃與佈置",
            "maxText": "5",
            "title": "2.活動空間具備良好隔間使課程進行不受干擾",
            "kind": "choice",
            "options": [
              {
                "label": "符合",
                "score": 1
              },
              {
                "label": "不符合",
                "score": 0,
                "comment": "隔間品質欠佳，課程易受干擾。建議調配上課時段或增設隔音防護，以降低外部環境噪音干擾。"
              }
            ]
          },
          {
            "id": "E07",
            "itemId": "E2",
            "itemTitle": "E2.空間規劃與佈置",
            "maxText": "5",
            "title": "3.標示明顯、顏色對比，易辨識。",
            "kind": "choice",
            "options": [
              {
                "label": "符合",
                "score": 1
              },
              {
                "label": "不符合",
                "score": 0,
                "comment": "標示不明顯、顏色對比不清楚，不易辨識，建議進行調整。"
              }
            ]
          },
          {
            "id": "E08",
            "itemId": "E2",
            "itemTitle": "E2.空間規劃與佈置",
            "maxText": "5",
            "title": "4.提供定向感強化或具引導性的環境",
            "kind": "choice",
            "options": [
              {
                "label": "符合",
                "score": 1
              },
              {
                "label": "不符合",
                "score": 0,
                "comment": "環境規劃建議強化定向感或具引導性。"
              }
            ]
          },
          {
            "id": "E09",
            "itemId": "E2",
            "itemTitle": "E2.空間規劃與佈置",
            "maxText": "5",
            "title": "5.提供照顧者交流或閱讀資料的空間",
            "kind": "choice",
            "options": [
              {
                "label": "符合",
                "score": 1
              },
              {
                "label": "不符合",
                "score": 0,
                "comment": "未提供照顧者交流或閱讀資料的空間，建議規劃交流或閱讀區。"
              }
            ]
          },
          {
            "id": "E10",
            "itemId": "E3",
            "itemTitle": "E3.緊急、意外管制機制",
            "maxText": "7",
            "title": "1.訂有緊急事件處理機制與流程，如防走失、意外傷害、公共安全事件等",
            "kind": "choice",
            "options": [
              {
                "label": "訂有完整機制與流程，內容涵蓋防走失、意外傷害及公共安全事件等。",
                "score": 2
              },
              {
                "label": "已訂有機制與流程，但內容不完整或部分項目缺漏。",
                "score": 1,
                "comment": "緊急流程內容不完整，有部分項目缺漏，建議補齊防走失與公共安全流程。"
              },
              {
                "label": "未訂有機制與流程",
                "score": 0,
                "comment": "缺乏緊急事件處理機制，無法應對突發危機，建議增訂完整緊急處理流程。"
              }
            ]
          },
          {
            "id": "E11",
            "itemId": "E3",
            "itemTitle": "E3.緊急、意外管制機制",
            "maxText": "7",
            "title": "2.現場情境演練1：火災或個案情緒不穩緊急事件疏散",
            "kind": "choice",
            "options": [
              {
                "label": "流程清楚且人員熟悉應變處置。",
                "score": 2
              },
              {
                "label": "流程不熟悉、疏散動線或應變處置不完整",
                "score": 1,
                "comment": "火災應變流程不熟悉或處置不全，應加強應變與疏散動線演練。"
              },
              {
                "label": "未能進行演練或無法說明應變流程",
                "score": 0,
                "comment": "未能進行演練或無法說明應變流程，建議落實情境演練並熟悉流程。"
              }
            ]
          },
          {
            "id": "E12",
            "itemId": "E3",
            "itemTitle": "E3.緊急、意外管制機制",
            "maxText": "7",
            "title": "3.現場情境演練2：防走失",
            "kind": "choice",
            "options": [
              {
                "label": "能完成演練，流程清楚，熟悉通報及應變處置，且現場具防走失安全措施",
                "score": 3
              },
              {
                "label": "有進行演練，但流程或應變處置不完整",
                "score": 1.5,
                "comment": "有進行演練，但流程或應變處置不完整。建議流程細節仍須加強，完備防走失通報與應變。"
              },
              {
                "label": "未進行演練，或無相關環境安全措施。",
                "score": 0,
                "comment": "未進行演練，或無相關環境安全措施。建議落實走失演練與相關環境安全措施。"
              }
            ]
          },
          {
            "id": "E13",
            "itemId": "E4",
            "itemTitle": "E4.防疫與感染管制機制",
            "maxText": "4",
            "title": "1.訂有環境清潔及消毒機制、感染管制機制與處理流程，並留有相關紀錄。",
            "kind": "choice",
            "options": [
              {
                "label": "符合",
                "score": 1
              },
              {
                "label": "不符合",
                "score": 0,
                "comment": "缺乏環境清潔及消毒機制、感管機制或紀錄。建議訂定清消流程並落實紀錄。"
              }
            ]
          },
          {
            "id": "E14",
            "itemId": "E4",
            "itemTitle": "E4.防疫與感染管制機制",
            "maxText": "4",
            "title": "2.張貼字體大小適切之防疫與洗手宣導文宣(洗手宣導步驟強調：濕搓沖捧擦)。",
            "kind": "choice",
            "options": [
              {
                "label": "符合",
                "score": 1
              },
              {
                "label": "不符合",
                "score": 0,
                "comment": "未張貼字體大小適切之防疫與洗手宣導文宣，不利防疫衛教。建議張貼字體大小適切之洗手文宣。"
              }
            ]
          },
          {
            "id": "E15",
            "itemId": "E4",
            "itemTitle": "E4.防疫與感染管制機制",
            "maxText": "4",
            "title": "3.洗手設施設備完整，且在效期內",
            "kind": "choice",
            "options": [
              {
                "label": "符合",
                "score": 1
              },
              {
                "label": "不符合",
                "score": 0,
                "comment": "洗手設施設備不完整或已逾效期，建議檢視消耗品耗損情形並汰換過期用品。"
              }
            ]
          },
          {
            "id": "E16",
            "itemId": "E4",
            "itemTitle": "E4.防疫與感染管制機制",
            "maxText": "4",
            "title": "4.確實量體溫與洗手，並留有相關紀錄",
            "kind": "choice",
            "options": [
              {
                "label": "符合",
                "score": 1
              },
              {
                "label": "不符合",
                "score": 0,
                "comment": "未確實執行體溫與洗手監測，且缺乏紀錄。建議落實量體溫洗手並每日登記。"
              }
            ]
          }
        ]
      }
    ]
  },
  "responsible": {
    "id": "responsible",
    "label": "權責型延續",
    "shortLabel": "權責型",
    "title": "115 年權責型失智社區服務據點考評指標（延續型）",
    "description": "適用權責型失智社區服務據點延續型考評。",
    "sections": [
      {
        "code": "A",
        "title": "行政效能",
        "max": 16,
        "questions": [
          {
            "id": "A01",
            "itemId": "A1",
            "itemTitle": "A1.行政配合事項",
            "maxText": "6",
            "title": "1. 依契約規範期程繳交核銷作業",
            "kind": "choice",
            "options": [
              {
                "label": "是",
                "score": 2
              },
              {
                "label": "否",
                "score": 0,
                "comment": "未依契約規範期程繳交核銷作業"
              }
            ]
          },
          {
            "id": "A02",
            "itemId": "A1",
            "itemTitle": "A1.行政配合事項",
            "maxText": "6",
            "title": "2. 核銷退件次數",
            "kind": "choice",
            "options": [
              {
                "label": "<4次",
                "score": 2
              },
              {
                "label": "≧4次",
                "score": 0,
                "comment": "核銷退件次數過多"
              }
            ]
          },
          {
            "id": "A03",
            "itemId": "A1",
            "itemTitle": "A1.行政配合事項",
            "maxText": "6",
            "title": "3. 依限填報每週雲端報表",
            "kind": "choice",
            "options": [
              {
                "label": "有",
                "score": 2
              },
              {
                "label": "無",
                "score": 0,
                "comment": "未依時程填報每週雲端報表"
              }
            ]
          },
          {
            "id": "A04",
            "itemId": "A2",
            "itemTitle": "A2.114年度經費執行率",
            "maxText": "2",
            "title": "114年度經費執行率\n計算公式=(114年實支經費/(年度核定經費+請增經費))*100%",
            "kind": "choice",
            "options": [
              {
                "label": "100%",
                "score": 2
              },
              {
                "label": "97%≦O<100%",
                "score": 1.5,
                "comment": "114年度經費執行率介於97%至100%"
              },
              {
                "label": "95%≦O<97%",
                "score": 1,
                "comment": "114年度經費執行率介於95%至97%"
              },
              {
                "label": "<95%",
                "score": 0,
                "comment": "114年度經費執行率低於95%"
              }
            ]
          },
          {
            "id": "A05",
            "itemId": "A3",
            "itemTitle": "A3.115年度經費執行",
            "maxText": "4",
            "title": "115年度執行進度 (依經費執行率)\n計算公式=(截至115.6.30實支經費/年度核定)*100%",
            "kind": "choice",
            "options": [
              {
                "label": "≧65%",
                "score": 4
              },
              {
                "label": "40%≦O<64%",
                "score": 2,
                "comment": "115年度執行進度介於40%至64%"
              },
              {
                "label": "<40%",
                "score": 0,
                "comment": "115年度執行進度低於40%"
              }
            ]
          },
          {
            "id": "A06",
            "itemId": "A4",
            "itemTitle": "A4.個案轉介、結案",
            "maxText": "4",
            "title": "1.訂有轉介計畫",
            "kind": "choice",
            "options": [
              {
                "label": "有",
                "score": 2
              },
              {
                "label": "無",
                "score": 0,
                "comment": "無制訂個案轉介計畫"
              }
            ]
          },
          {
            "id": "A07",
            "itemId": "A4",
            "itemTitle": "A4.個案轉介、結案",
            "maxText": "4",
            "title": "2.配合衛生局按時繳交個案轉介情形回覆表，且填報內容完整。",
            "kind": "choice",
            "options": [
              {
                "label": "符合",
                "score": 2
              },
              {
                "label": "不符合",
                "score": 0,
                "comment": "未按時提交個案轉介情形回覆表，且填報內容不完整，需要改善配合度及資料準確性。"
              }
            ]
          }
        ]
      },
      {
        "code": "B",
        "title": "服務品質管理",
        "max": 26,
        "questions": [
          {
            "id": "B01",
            "itemId": "B1",
            "itemTitle": "B1.失智共照中心輔導結果",
            "maxText": "3",
            "title": "依共照中心上半年輔導結果(依缺失計數)",
            "kind": "choice",
            "options": [
              {
                "label": "特優",
                "score": 3
              },
              {
                "label": "優",
                "score": 2,
                "comment": "輔導結果良好，缺失量少"
              },
              {
                "label": "可",
                "score": 1,
                "comment": "輔導結果尚可，缺失數量需要進一步改善。建議加強執行及監控。"
              },
              {
                "label": "差",
                "score": 0,
                "comment": "輔導結果不佳，缺失數量較多。建議針對輔導結果進行全面檢討和改進。"
              }
            ]
          },
          {
            "id": "B02",
            "itemId": "B2",
            "itemTitle": "B2.教育增能",
            "maxText": "5",
            "title": "1.6月30日前至少參與1場次之失智網絡聯繫會議(每季辦理一次)",
            "kind": "choice",
            "options": [
              {
                "label": "完成",
                "score": 2
              },
              {
                "label": "未完成",
                "score": 0,
                "comment": "未於6月30日前參與失智網絡聯繫會議。建請加強期程規劃與資源連結，於下一季派員出席。"
              }
            ]
          },
          {
            "id": "B03",
            "itemId": "B2",
            "itemTitle": "B2.教育增能",
            "maxText": "5",
            "title": "2.據點服務人員及支援人力到職後6個月內完成失智症照顧服務20小時訓練課程",
            "kind": "choice",
            "options": [
              {
                "label": "完成",
                "score": 1
              },
              {
                "label": "未完成",
                "score": 0,
                "comment": "人員到職滿6個月仍未完成20小時失智照顧服務訓練。建請機構加強內部輔導，安排補訓以確保服務品質。"
              }
            ]
          },
          {
            "id": "B04",
            "itemId": "B2",
            "itemTitle": "B2.教育增能",
            "maxText": "5",
            "title": "3.據點服務人力參加標竿學習至少1場次",
            "kind": "choice",
            "options": [
              {
                "label": "完成",
                "score": 2
              },
              {
                "label": "未完成",
                "score": 0,
                "comment": "未參與標竿學習活動。建議後續積極規劃並派員參與，以促進實務經驗交流。"
              }
            ]
          },
          {
            "id": "B05",
            "itemId": "B3",
            "itemTitle": "B3.服務據點之行銷與宣導",
            "maxText": "3",
            "title": "多元宣傳管道進行失智友善推廣，並提供失智據點服務及課程介紹。如：\n實體：□傳單/海報/旗子 □講座 □其他\n網路媒體：□line群組 □FB/Instagram\n□Youtube □其他",
            "kind": "choice",
            "options": [
              {
                "label": "0 項符合",
                "score": 0,
                "comment": "未能提供足夠行銷與宣導佐證。建議補強實體或網路宣導紀錄。"
              },
              {
                "label": "1 項符合",
                "score": 1,
                "comment": "服務據點已具備 1 項行銷與宣導作為，建議持續擴充多元宣傳管道。"
              },
              {
                "label": "2 項符合",
                "score": 2,
                "comment": "服務據點已具備 2 項行銷與宣導作為，建議進一步提升宣導完整性與觸及效益。"
              },
              {
                "label": "3 項以上符合",
                "score": 3
              }
            ]
          },
          {
            "id": "B06",
            "itemId": "B4",
            "itemTitle": "B4.資源連結",
            "maxText": "5",
            "title": "1.進行資源盤點(含正式、非正式資源)，並建置相關資料（如資源分類、聯絡資訊、資源分布圖等）",
            "kind": "choice",
            "options": [
              {
                "label": "完成資源盤點，資料完整，並有更新紀錄或資源分布說明。",
                "score": 2
              },
              {
                "label": "已進行資源盤點，但資料不完整或未更新",
                "score": 1,
                "comment": "已進行資源盤點，惟部分分類、聯絡資訊或分布圖仍欠完整或未及時更新，請修正補齊。"
              },
              {
                "label": "未進行資源盤點與建置相關資料",
                "score": 0,
                "comment": "未進行資源盤點且無建置相關資料。建議盤點轄區內資源，以利後續服務推動。"
              }
            ]
          },
          {
            "id": "B07",
            "itemId": "B4",
            "itemTitle": "B4.資源連結",
            "maxText": "5",
            "title": "2.至少每半年定期更新",
            "kind": "choice",
            "options": [
              {
                "label": "符合",
                "score": 1
              },
              {
                "label": "不符合",
                "score": 0,
                "comment": "未落實每半年定期更新。建議機構建立內部定期查核機制，確保相關資料之即時性與實用性。"
              }
            ]
          },
          {
            "id": "B08",
            "itemId": "B4",
            "itemTitle": "B4.資源連結",
            "maxText": "5",
            "title": "3.進行資源連結後留有紀錄與追蹤",
            "kind": "choice",
            "options": [
              {
                "label": "有資源連結紀錄，且具後續追蹤或回饋紀錄。",
                "score": 2
              },
              {
                "label": "有資源連結紀錄，但未留有後續追蹤紀錄。",
                "score": 1,
                "comment": "雖有資源連結紀錄，但缺乏後續之追蹤紀錄。建請補正後續追蹤流程，以落實服務之連續性。"
              },
              {
                "label": "未提供資源連結紀錄",
                "score": 0,
                "comment": "未提供相關資源連結之紀錄。請落實日常紀錄之留存。"
              }
            ]
          },
          {
            "id": "B09",
            "itemId": "B5",
            "itemTitle": "B5.滿意度調查與分析應用",
            "maxText": "4",
            "title": "1.執行失智者滿意度調查",
            "kind": "choice",
            "options": [
              {
                "label": "符合",
                "score": 1
              },
              {
                "label": "不符合",
                "score": 0,
                "comment": "未執行失智者滿意度調查，請確實施測。"
              }
            ]
          },
          {
            "id": "B10",
            "itemId": "B5",
            "itemTitle": "B5.滿意度調查與分析應用",
            "maxText": "4",
            "title": "2.執行主要照顧者滿意度調查",
            "kind": "choice",
            "options": [
              {
                "label": "符合",
                "score": 1
              },
              {
                "label": "不符合",
                "score": 0,
                "comment": "未執行主要照顧者滿意度調查，請確實執行，以利全方位評估服務成效。"
              }
            ]
          },
          {
            "id": "B11",
            "itemId": "B5",
            "itemTitle": "B5.滿意度調查與分析應用",
            "maxText": "4",
            "title": "3.針對滿意度調查結果進行分析，並留有文件紀錄",
            "kind": "choice",
            "options": [
              {
                "label": "符合",
                "score": 1
              },
              {
                "label": "不符合",
                "score": 0,
                "comment": "未針對調查結果進行分析或留有文件紀錄。建請將調查資料予以統計、分析，並留存。"
              }
            ]
          },
          {
            "id": "B12",
            "itemId": "B5",
            "itemTitle": "B5.滿意度調查與分析應用",
            "maxText": "4",
            "title": "4.依據滿意度調查結果應用於服務規劃，並留有紀錄",
            "kind": "choice",
            "options": [
              {
                "label": "符合",
                "score": 1
              },
              {
                "label": "不符合",
                "score": 0,
                "comment": "未依據調查結果應用於服務規劃或紀錄。建議根據意見回饋擬定改善對策，並落實紀錄。"
              }
            ]
          },
          {
            "id": "B13",
            "itemId": "B6",
            "itemTitle": "B6.提升服務人數",
            "maxText": "6",
            "title": "1.訂有提升服務人數之策略，並能滾動調整。",
            "kind": "choice",
            "options": [
              {
                "label": "訂有具體數策略，並依執行情形定期檢討與調整。",
                "score": 3
              },
              {
                "label": "訂有策略，但未見定期檢討、修正紀錄。",
                "score": 1.5,
                "comment": "雖訂有策略，惟缺乏定期檢討與修正紀錄。建議定期檢討、修正紀錄"
              },
              {
                "label": "未訂策略。",
                "score": 0,
                "comment": "未訂定任何提升服務人數之相關策略。建議擬定具體方案，以利提升服務人數。"
              }
            ]
          },
          {
            "id": "B14",
            "itemId": "B6",
            "itemTitle": "B6.提升服務人數",
            "maxText": "6",
            "title": "2.確實執行且服務人數增加。",
            "kind": "choice",
            "options": [
              {
                "label": "已依策略確實執行，且服務人數較前期增加。",
                "score": 3
              },
              {
                "label": "已執行提升策略，但服務人數未增加。",
                "score": 1.5,
                "comment": "雖已執行提升策略，惟服務人數未見增長。建請重新分析，調整推動策略。"
              },
              {
                "label": "未執行提升策略，或服務人數未增加且無相關因應。",
                "score": 0,
                "comment": "未執行提升策略或服務人數未增，且無相關因應。建請針對服務量能停滯問題，提出檢討與具體因應對策。"
              }
            ]
          }
        ]
      },
      {
        "code": "C",
        "title": "照顧服務品質",
        "max": 38,
        "questions": [
          {
            "id": "C01",
            "itemId": "C1",
            "itemTitle": "C1.照顧服務績效",
            "maxText": "16",
            "title": "1.目標服務人數達成率\n計算公式：1-6月服務人數(歸人)/115年目標數*100%",
            "kind": "choice",
            "options": [
              {
                "label": "≧80%",
                "score": 7
              },
              {
                "label": "50%≦O<80%",
                "score": 5,
                "comment": "目標服務人數達成率介於50%至80%"
              },
              {
                "label": "20%≦O<50%",
                "score": 3,
                "comment": "目標服務人數達成率介於20%至50%"
              },
              {
                "label": "<20%",
                "score": 0,
                "comment": "目標服務人數達成率低於20%"
              }
            ]
          },
          {
            "id": "C02",
            "itemId": "C1",
            "itemTitle": "C1.照顧服務績效",
            "maxText": "16",
            "title": "2.服務個案用藥情形之記錄，至少一周一次。",
            "kind": "choice",
            "options": [
              {
                "label": "到據點時皆有紀錄且內容完整",
                "score": 5
              },
              {
                "label": "每週紀錄1次且內容完整",
                "score": 3,
                "comment": "用藥情形已達成每週紀錄1次且內容完整之要求，建議持續落實常態性登載。"
              },
              {
                "label": "每週紀錄1次，但內容不完整。",
                "score": 1,
                "comment": "用藥情形已達成每週紀錄1次，但內容不完整。建請針對缺漏項目補正。"
              },
              {
                "label": "未有記錄",
                "score": 0,
                "comment": "未有用藥情形之記錄。建議建立個案每週用藥登載機制，以符合核心照顧規範。"
              }
            ]
          },
          {
            "id": "C03",
            "itemId": "C1",
            "itemTitle": "C1.照顧服務績效",
            "maxText": "16",
            "title": "3.使用照顧管理評估量表-I表，完整記錄服務個案BPSD之變化",
            "kind": "choice",
            "options": [
              {
                "label": "紀錄完整(含情緒/BPSD、時間、變化情形的紀錄)",
                "score": 4
              },
              {
                "label": "有紀錄，未完整",
                "score": 2,
                "comment": "有紀錄但未達成BPSD變化紀錄之完整性。建議含情緒/BPSD、時間、變化情形等之完整紀錄，以利連續性評估。"
              },
              {
                "label": "未記錄",
                "score": 0,
                "comment": "未達成使用I表記錄BPSD變化之指標，建請確實導入照顧管理評估量表，以落實失智專業照護品質。"
              }
            ]
          },
          {
            "id": "C04",
            "itemId": "C2",
            "itemTitle": "C2.服務對象管理機制",
            "maxText": "7",
            "title": "1.訂有服務對象收案及結案管理流程及辦法 (1分)",
            "kind": "choice",
            "options": [
              {
                "label": "符合",
                "score": 1
              },
              {
                "label": "不符合",
                "score": 0,
                "comment": "未訂有服務對象收案及結案管理流程及辦法。建議建置標準作業程序，以資依循。"
              }
            ]
          },
          {
            "id": "C05",
            "itemId": "C2",
            "itemTitle": "C2.服務對象管理機制",
            "maxText": "7",
            "title": "2.建置個案管理名冊，且至少每年更新\n個案資訊一次 (1分)",
            "kind": "choice",
            "options": [
              {
                "label": "符合",
                "score": 1
              },
              {
                "label": "不符合",
                "score": 0,
                "comment": "未建置個案管理名冊，或未落實每年定期更新個案資訊。建請加強名冊管理，確保個案資料之時效性。"
              }
            ]
          },
          {
            "id": "C06",
            "itemId": "C2",
            "itemTitle": "C2.服務對象管理機制",
            "maxText": "7",
            "title": "3.服務個案資料完整(5分)：含個案基本資料、相關診斷證明文件、肖像權同意書、失智據點服務使用說明書、民眾接受失智社區服務據點之個案服務資料授權應用及知情同意書(本項分數全無或全有，皆須符合才有5分)",
            "kind": "choice",
            "options": [
              {
                "label": "符合",
                "score": 5
              },
              {
                "label": "不符合",
                "score": 0,
                "comment": "個案資料不完整。建議全面檢查並補正缺漏文件，以維護個案權益。"
              }
            ]
          },
          {
            "id": "C07",
            "itemId": "C3",
            "itemTitle": "C3.課程、活動規劃與執行",
            "maxText": "11",
            "title": "1.呈現課程多元化，具有不同主題之系列課程",
            "kind": "choice",
            "options": [
              {
                "label": "規劃並辦理多元主題之系列課程，包括型態與面向",
                "score": 3
              },
              {
                "label": "有辦理不同主題課程，但系列性或多元性不足。",
                "score": 1.5,
                "comment": "雖有辦理不同主題課程，但整體課程之系列性或多元性仍不足。建議加強課程規劃之豐富度。"
              },
              {
                "label": "課程主題過於單一，未呈現多元化規劃。",
                "score": 0,
                "comment": "課程主題過於單一，未呈現多元化規劃。建議評估失智症者之特性與照顧，多元且豐富未來之課程設計。"
              }
            ]
          },
          {
            "id": "C08",
            "itemId": "C3",
            "itemTitle": "C3.課程、活動規劃與執行",
            "maxText": "11",
            "title": "2.活動內容符合失智者個別之需求(如參考過去經歷、興趣、文化等，並運用其尚存的能力或優勢)",
            "kind": "choice",
            "options": [
              {
                "label": "活動內容能依失智者個別需求規劃，並具相關評估或佐證資料",
                "score": 3
              },
              {
                "label": "活動內容部分符合失智者需求，但個別化規劃或佐證資料不足。",
                "score": 1.5,
                "comment": "活動內容雖部分符合失智者需求，但個別化規劃或佐證資料仍顯不足。建議精進活動之個別化設計"
              },
              {
                "label": "活動內容未呈現依失智者個別需求規劃。",
                "score": 0,
                "comment": "活動內容未能呈現依失智者之個別需求規劃。建請落實課前個別化評估，以提升活動效益。"
              }
            ]
          },
          {
            "id": "C09",
            "itemId": "C3",
            "itemTitle": "C3.課程、活動規劃與執行",
            "maxText": "11",
            "title": "3.有團體活動企劃與執行紀錄",
            "kind": "choice",
            "options": [
              {
                "label": "具完整團體活動企劃及執行紀錄，內容包含活動目標、流程、參與情形及成果。",
                "score": 3
              },
              {
                "label": "有團體活動企劃及執行紀錄，但內容不完整。",
                "score": 1.5,
                "comment": "雖有團體活動企劃及執行紀錄，惟部分內容未臻完整。建議針對缺漏項目予以補正補充。"
              },
              {
                "label": "未提供團體活動企劃或執行紀錄。",
                "score": 0,
                "comment": "未提供團體活動企劃或執行紀錄。建議落實團體活動之檔案管理與紀錄留存，以維護服務品質。"
              }
            ]
          },
          {
            "id": "C10",
            "itemId": "C3",
            "itemTitle": "C3.課程、活動規劃與執行",
            "maxText": "11",
            "title": "4.導入有助於降低照顧服務人力負荷、照顧服務品質提升(認知活化、體能提升、增強人際互動)之科技設施設備",
            "kind": "choice",
            "options": [
              {
                "label": "已導入，並能說明實際應用於降低照顧負荷或減輕照顧負荷之成效。",
                "score": 2
              },
              {
                "label": "已導入科技設施設備，但應用情形或成效說明不足。",
                "score": 1,
                "comment": "已導入科技設施設備，但應用情形或成效說明不足。建請加強補充該科技設備之實際操作紀錄或成效說明"
              },
              {
                "label": "未導入相關科技設施設備。",
                "score": 0,
                "comment": "未導入相關科技設施設備。建議未來可評估營運現況與個案需求，酌予規劃導入適切之科技設施設備。"
              }
            ]
          },
          {
            "id": "C11",
            "itemId": "C4",
            "itemTitle": "C4.照顧者賦能與支持",
            "maxText": "4",
            "title": "1. 規劃與辦理照顧者訓練課程或支持團體，並與共照中心合作至少1場次",
            "kind": "choice",
            "options": [
              {
                "label": "完全符合",
                "score": 2
              },
              {
                "label": "有規劃或辦理，但未與\n共照中心合作",
                "score": 1,
                "comment": "雖有規劃或辦理照顧者訓練課程或支持團體，但未與共照中心合作。建議後續主動與共照中心聯辦活動以符合規範。"
              },
              {
                "label": "未規劃",
                "score": 0,
                "comment": "未規劃或辦理照顧者訓練課程或支持團體。建議規劃與辦理照顧者訓練課程，並與共照中心合作至少1場次"
              }
            ]
          },
          {
            "id": "C12",
            "itemId": "C4",
            "itemTitle": "C4.照顧者賦能與支持",
            "maxText": "4",
            "title": "2. 定期與個案家屬聯繫情形，並留有紀錄",
            "kind": "choice",
            "options": [
              {
                "label": "定期與個案家屬聯繫，且留有完整聯繫紀錄。",
                "score": 2
              },
              {
                "label": "有與個案家屬聯繫，但紀錄不完整或未定期辦理。",
                "score": 1,
                "comment": "有與個案家屬聯繫，但紀錄不完整或未定期辦理。建議定期聯繫個案家屬以及優化紀錄內容"
              },
              {
                "label": "未與個案家屬聯繫或未留有紀錄。",
                "score": 0,
                "comment": "未與個案家屬聯繫或未留有紀錄。建議建立個案家屬定期聯繫機制並確實登載，以落實個案管理品質。"
              }
            ]
          }
        ]
      },
      {
        "code": "D",
        "title": "重要加扣分項目(計算期間：114年7月至115年6月)",
        "max": 3,
        "questions": [
          {
            "id": "D01",
            "itemId": "D1",
            "itemTitle": "D1.違反服務契約",
            "maxText": "每記1點扣總分1分",
            "title": "依照特約契約第17條_人員異動未於情事發生前向衛生局提出申請、服務人數未達標等。",
            "kind": "number",
            "inputLabel": "違約記點數",
            "helper": "每記 1 點，扣總分 1 分。未記點請填 0。",
            "min": 0,
            "max": 99,
            "step": 1,
            "multiplier": -1,
            "suffix": "點"
          },
          {
            "id": "D02",
            "itemId": "D2",
            "itemTitle": "D2. 配合政策落實淨零排碳",
            "maxText": "1",
            "title": "配合政策落實淨零排碳或優先購買環保標章產品等綠色採購",
            "kind": "number",
            "inputLabel": "加分",
            "helper": "由委員共識後給分，最高 1 分。",
            "min": 0,
            "max": 1,
            "step": 0.5,
            "multiplier": 1,
            "suffix": "分"
          },
          {
            "id": "D03",
            "itemId": "D3",
            "itemTitle": "D3.其他",
            "maxText": "2",
            "title": "其他加分事宜。",
            "kind": "number",
            "inputLabel": "加分",
            "helper": "由委員共識後給分，最高 2 分。",
            "min": 0,
            "max": 2,
            "step": 0.5,
            "multiplier": 1,
            "suffix": "分"
          }
        ]
      },
      {
        "code": "E",
        "title": "環境安全與緊急意外事件處理",
        "max": 20,
        "questions": [
          {
            "id": "E01",
            "itemId": "E1",
            "itemTitle": "E1.場地空間、動線與使用",
            "maxText": "4",
            "title": "1.出入口有明顯且對失智者友善之標示或門牌",
            "kind": "choice",
            "options": [
              {
                "label": "符合",
                "score": 1
              },
              {
                "label": "不符合",
                "score": 0,
                "comment": "出入口無明顯且對失智者友善之標示或門牌，建議增設。"
              }
            ]
          },
          {
            "id": "E02",
            "itemId": "E1",
            "itemTitle": "E1.場地空間、動線與使用",
            "maxText": "4",
            "title": "3.標示明顯、顏色對比，易辨識。",
            "kind": "choice",
            "options": [
              {
                "label": "符合",
                "score": 1
              },
              {
                "label": "不符合",
                "score": 0,
                "comment": "出入口、室內空間有阻礙物，影響動線之通暢性。"
              }
            ]
          },
          {
            "id": "E03",
            "itemId": "E1",
            "itemTitle": "E1.場地空間、動線與使用",
            "maxText": "4",
            "title": "3.符合安全性，如非主要出入口的管制、樓地板高低落差的處理等",
            "kind": "choice",
            "options": [
              {
                "label": "符合",
                "score": 1
              },
              {
                "label": "不符合",
                "score": 0,
                "comment": "未符合安全性，建議視情況改善。"
              }
            ]
          },
          {
            "id": "E04",
            "itemId": "E1",
            "itemTitle": "E1.場地空間、動線與使用",
            "maxText": "4",
            "title": "4.設有輔助設備 ，如扶手、斜坡板等",
            "kind": "choice",
            "options": [
              {
                "label": "符合",
                "score": 1
              },
              {
                "label": "不符合",
                "score": 0,
                "comment": "未設有輔助設備，影響長者安全，建議增設增設扶手與防滑斜坡等輔具。"
              }
            ]
          },
          {
            "id": "E05",
            "itemId": "E2",
            "itemTitle": "E2.空間規劃與佈置",
            "maxText": "5",
            "title": "1.□光線充足、□空氣流通、和□桌椅穩固，椅子有靠背(需全符合才給分)",
            "kind": "choice",
            "options": [
              {
                "label": "符合",
                "score": 1
              },
              {
                "label": "不符合",
                "score": 0,
                "comment": "採光通風欠佳或桌椅不穩，建議改善照明並汰換不穩桌椅。"
              }
            ]
          },
          {
            "id": "E06",
            "itemId": "E2",
            "itemTitle": "E2.空間規劃與佈置",
            "maxText": "5",
            "title": "2.活動空間具備良好隔間使課程進行不受干擾",
            "kind": "choice",
            "options": [
              {
                "label": "符合",
                "score": 1
              },
              {
                "label": "不符合",
                "score": 0,
                "comment": "隔間品質欠佳，課程易受干擾。建議調配上課時段或增設隔音防護，以降低外部環境噪音干擾。"
              }
            ]
          },
          {
            "id": "E07",
            "itemId": "E2",
            "itemTitle": "E2.空間規劃與佈置",
            "maxText": "5",
            "title": "3.標示明顯、顏色對比，易辨識。",
            "kind": "choice",
            "options": [
              {
                "label": "符合",
                "score": 1
              },
              {
                "label": "不符合",
                "score": 0,
                "comment": "標示不明顯、顏色對比不清楚，不易辨識，建議進行調整。"
              }
            ]
          },
          {
            "id": "E08",
            "itemId": "E2",
            "itemTitle": "E2.空間規劃與佈置",
            "maxText": "5",
            "title": "4.提供定向感強化或具引導性的環境",
            "kind": "choice",
            "options": [
              {
                "label": "符合",
                "score": 1
              },
              {
                "label": "不符合",
                "score": 0,
                "comment": "環境規劃建議強化定向感或具引導性。"
              }
            ]
          },
          {
            "id": "E09",
            "itemId": "E2",
            "itemTitle": "E2.空間規劃與佈置",
            "maxText": "5",
            "title": "5.提供照顧者交流或閱讀資料的空間",
            "kind": "choice",
            "options": [
              {
                "label": "符合",
                "score": 1
              },
              {
                "label": "不符合",
                "score": 0,
                "comment": "未提供照顧者交流或閱讀資料的空間，建議規劃交流或閱讀區。"
              }
            ]
          },
          {
            "id": "E10",
            "itemId": "E3",
            "itemTitle": "E3.緊急、意外管制機制",
            "maxText": "7",
            "title": "1.訂有緊急事件處理機制與流程，如防走失、意外傷害、公共安全事件等",
            "kind": "choice",
            "options": [
              {
                "label": "訂有完整機制與流程，內容涵蓋防走失、意外傷害及公共安全事件等。",
                "score": 2
              },
              {
                "label": "已訂有機制與流程，但內容不完整或部分項目缺漏。",
                "score": 1,
                "comment": "緊急流程內容不完整，有部分項目缺漏，建議補齊防走失與公共安全流程。"
              },
              {
                "label": "未訂有機制與流程",
                "score": 0,
                "comment": "缺乏緊急事件處理機制，無法應對突發危機，建議增訂完整緊急處理流程。"
              }
            ]
          },
          {
            "id": "E11",
            "itemId": "E3",
            "itemTitle": "E3.緊急、意外管制機制",
            "maxText": "7",
            "title": "2.現場情境演練1：火災或個案情緒不穩緊急事件疏散",
            "kind": "choice",
            "options": [
              {
                "label": "流程清楚且人員熟悉應變處置。",
                "score": 2
              },
              {
                "label": "流程不熟悉、疏散動線或應變處置不完整",
                "score": 1,
                "comment": "火災應變流程不熟悉或處置不全，應加強應變與疏散動線演練。"
              },
              {
                "label": "未能進行演練或無法說明應變流程",
                "score": 0,
                "comment": "未能進行演練或無法說明應變流程，建議落實情境演練並熟悉流程。"
              }
            ]
          },
          {
            "id": "E12",
            "itemId": "E3",
            "itemTitle": "E3.緊急、意外管制機制",
            "maxText": "7",
            "title": "3.現場情境演練2：防走失",
            "kind": "choice",
            "options": [
              {
                "label": "能完成演練，流程清楚，熟悉通報及應變處置，且現場具防走失安全措施",
                "score": 3
              },
              {
                "label": "有進行演練，但流程或應變處置不完整",
                "score": 1.5,
                "comment": "有進行演練，但流程或應變處置不完整。建議流程細節仍須加強，完備防走失通報與應變。"
              },
              {
                "label": "未進行演練，或無相關環境安全措施。",
                "score": 0,
                "comment": "未進行演練，或無相關環境安全措施。建議落實走失演練與相關環境安全措施。"
              }
            ]
          },
          {
            "id": "E13",
            "itemId": "E4",
            "itemTitle": "E4.防疫與感染管制機制",
            "maxText": "4",
            "title": "1.訂有環境清潔及消毒機制、感染管制機制與處理流程，並留有相關紀錄。",
            "kind": "choice",
            "options": [
              {
                "label": "符合",
                "score": 1
              },
              {
                "label": "不符合",
                "score": 0,
                "comment": "缺乏環境清潔及消毒機制、感管機制或紀錄。建議訂定清消流程並落實紀錄。"
              }
            ]
          },
          {
            "id": "E14",
            "itemId": "E4",
            "itemTitle": "E4.防疫與感染管制機制",
            "maxText": "4",
            "title": "2.張貼字體大小適切之防疫與洗手宣導文宣(洗手宣導步驟強調：濕搓沖捧擦)。",
            "kind": "choice",
            "options": [
              {
                "label": "符合",
                "score": 1
              },
              {
                "label": "不符合",
                "score": 0,
                "comment": "未張貼字體大小適切之防疫與洗手宣導文宣，不利防疫衛教。建議張貼字體大小適切之洗手文宣。"
              }
            ]
          },
          {
            "id": "E15",
            "itemId": "E4",
            "itemTitle": "E4.防疫與感染管制機制",
            "maxText": "4",
            "title": "3.洗手設施設備完整，且在效期內",
            "kind": "choice",
            "options": [
              {
                "label": "符合",
                "score": 1
              },
              {
                "label": "不符合",
                "score": 0,
                "comment": "洗手設施設備不完整或已逾效期，建議檢視消耗品耗損情形並汰換過期用品。"
              }
            ]
          },
          {
            "id": "E16",
            "itemId": "E4",
            "itemTitle": "E4.防疫與感染管制機制",
            "maxText": "4",
            "title": "4.確實量體溫與洗手，並留有相關紀錄",
            "kind": "choice",
            "options": [
              {
                "label": "符合",
                "score": 1
              },
              {
                "label": "不符合",
                "score": 0,
                "comment": "未確實執行體溫與洗手監測，且缺乏紀錄。建議落實量體溫洗手並每日登記。"
              }
            ]
          }
        ]
      }
    ]
  }
} as const;
