---
title: autofocus
slug: Web/HTML/Global_attributes/autofocus
l10n:
  sourceCommit: 926f83641b980fcda58914649748b0368eeca1cd
---

{{HTMLSidebar("Global_attributes")}}

Das **`autofocus`** [globale Attribut](/de/docs/Web/HTML/Global_attributes) ist ein boolesches Attribut, das angibt, dass ein Element beim Laden der Seite oder wenn das {{HTMLElement("dialog")}}, zu dem es gehört, angezeigt wird, fokussiert werden soll.

```html
<input name="q" autofocus />
```

Nicht mehr als ein Element im Dokument oder Dialog darf das `autofocus`-Attribut besitzen. Wenn es auf mehrere Elemente angewendet wird, erhält das erste den Fokus.

> [!NOTE]
> Das `autofocus`-Attribut gilt für alle Elemente, nicht nur für Formularelemente. Zum Beispiel könnte es in einem [contenteditable](/de/docs/Web/HTML/Global_attributes/contenteditable)-Bereich verwendet werden.

## Barrierefreiheitsbedenken

Das automatische Fokussieren eines Formularelements kann sehbehinderte Menschen, die Bildschirmlesetechnologie verwenden, und Menschen mit kognitiven Beeinträchtigungen verwirren. Wenn `autofocus` zugewiesen ist, "teleportieren" Bildschirmlesegeräte ihre Nutzer ohne Vorwarnung direkt zum Formularelement.

Berücksichtigen Sie die Barrierefreiheit sorgfältig, wenn Sie das `autofocus`-Attribut anwenden. Ein automatisches Fokussieren auf ein Steuerelement kann dazu führen, dass die Seite beim Laden scrollt. Der Fokus kann auf einigen Touch-Geräten auch dynamische Tastaturen anzeigen. Während ein Bildschirmlesegerät das Label des fokussierten Formularelements ankündigt, wird nichts vor dem Label angekündigt, und der sehende Benutzer auf einem kleinen Gerät wird gleichermaßen den durch den vorangehenden Inhalt geschaffenen Kontext vermissen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
