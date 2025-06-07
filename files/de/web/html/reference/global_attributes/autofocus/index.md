---
title: HTML 'autofocus' globales Attribut
short-title: autofocus
slug: Web/HTML/Reference/Global_attributes/autofocus
l10n:
  sourceCommit: 7885271e36e9d2744296c01f400653f63caa6f75
---

{{HTMLSidebar("Global_attributes")}}

Das **`autofocus`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) ist ein Boolean-Attribut, das angibt, dass ein Element beim Laden der Seite oder wenn das {{HTMLElement("dialog")}}, zu dem es gehört, angezeigt wird, den Fokus erhalten soll.

```html
<input name="q" autofocus />
```

Nicht mehr als ein Element in einem Dokument oder Dialog darf das `autofocus`-Attribut besitzen. Wenn es auf mehrere Elemente angewendet wird, erhält das erste den Fokus.

> [!NOTE]
> Das `autofocus`-Attribut gilt für alle Elemente, nicht nur für Formularelemente. Zum Beispiel könnte es auf einem [contenteditable](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) Bereich verwendet werden.

## Barrierefreiheitsbedenken

Das automatische Fokussieren auf ein Formularelement kann Menschen mit Sehbehinderungen, die Bildschirmlesetechnologie verwenden, sowie Personen mit kognitiven Beeinträchtigungen verwirren. Wenn `autofocus` zugewiesen wird, "teleportieren" Bildschirmleser ihren Benutzer ohne Vorwarnung zum Formularelement.

Berücksichtigen Sie sorgfältig die Barrierefreiheit, wenn Sie das `autofocus`-Attribut anwenden. Ein automatischer Fokus auf ein Steuerungselement kann beim Laden die Seite scrollen lassen. Der Fokus kann auf einigen Touch-Geräten auch dazu führen, dass dynamische Tastaturen eingeblendet werden. Während ein Bildschirmleser das Etikett des fokussierten Formularelements ankündigt, wird der Bildschirmleser nichts vor dem Etikett ankündigen, und auch der visuell orientierte Benutzer auf einem kleinen Gerät wird den kontextstiftenden Inhalt vor dem Element verpassen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
