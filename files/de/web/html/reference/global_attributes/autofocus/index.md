---
title: autofocus
slug: Web/HTML/Reference/Global_attributes/autofocus
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar("Global_attributes")}}

Das **`autofocus`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) ist ein Boolean-Attribut, das angibt, dass ein Element beim Laden der Seite oder beim Anzeigen des {{HTMLElement("dialog")}}, zu dem es gehört, fokussiert werden soll.

```html
<input name="q" autofocus />
```

Nicht mehr als ein Element im Dokument oder Dialog darf das `autofocus`-Attribut haben. Wenn es auf mehrere Elemente angewandt wird, erhält das erste den Fokus.

> [!NOTE]
> Das `autofocus`-Attribut gilt für alle Elemente, nicht nur für Formularelemente. Beispielsweise könnte es in einem [contenteditable](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) Bereich verwendet werden.

## Barrierefreiheitsbedenken

Das automatische Fokussieren eines Formularelements kann sehbehinderte Menschen, die auf Bildschirmlesetechnologie angewiesen sind, und Menschen mit kognitiven Beeinträchtigungen verwirren. Wenn `autofocus` zugewiesen ist, "teleportieren" Bildschirmleser ihre Nutzer ohne Vorwarnung direkt zum Formularelement.

Verwenden Sie das `autofocus`-Attribut mit Bedacht in Bezug auf Barrierefreiheit. Das automatische Fokussieren auf ein Steuerelement kann dazu führen, dass die Seite beim Laden scrollt. Der Fokus kann auch dazu führen, dass auf einigen Touch-Geräten dynamische Tastaturen angezeigt werden. Während ein Bildschirmleser die Beschriftung des fokussierten Formularelements ankündigt, wird er nichts vor der Beschriftung ankündigen, und der sehende Benutzer auf einem kleinen Gerät wird ebenfalls den Kontext durch den vorausgehenden Inhalt verpassen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
