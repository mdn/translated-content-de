---
title: "Dokument: applets-Eigenschaft"
short-title: applets
slug: Web/API/Document/applets
l10n:
  sourceCommit: ae380dd2b211ab497e064d4074ff81e71cb91a00
---

{{APIRef("DOM")}}

Die schreibgeschützte Eigenschaft **`applets`** des [`Document`](/de/docs/Web/API/Document)-Interfaces gibt eine leere [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) zurück. Diese Eigenschaft wird nur aus Kompatibilitätsgründen beibehalten; in älteren Browserversionen gab sie eine Liste der Applets innerhalb eines Dokuments zurück.

> [!NOTE]
> Die Unterstützung für das Element `<applet>` wurde aus allen Browsern entfernt. Daher gibt `document.applets` immer eine leere Sammlung zurück.

## Wert

Eine leere [`HTMLCollection`](/de/docs/Web/API/HTMLCollection).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
