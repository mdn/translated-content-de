---
title: HTML autofocus globales Attribut
short-title: autofocus
slug: Web/HTML/Reference/Global_attributes/autofocus
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`autofocus`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) ist ein Boolean-Attribut, das angibt, dass ein Element beim Laden der Seite oder wenn das {{HTMLElement("dialog")}}, zu dem es gehört, angezeigt wird, fokussiert werden soll.

```html
<input name="q" autofocus />
```

Es darf nicht mehr als ein Element im Dokument oder Dialog das `autofocus`-Attribut haben. Wenn es auf mehrere Elemente angewendet wird, erhält das erste den Fokus.

> [!NOTE]
> Das `autofocus`-Attribut gilt für alle Elemente, nicht nur für Formularelemente. Beispielsweise könnte es auf einem [contenteditable](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) Bereich verwendet werden.

## Barrierefreiheitsbedenken

Das automatische Fokussieren eines Formularelements kann sehbehinderten Menschen, die Bildschirmlesetechnologie verwenden, und Menschen mit kognitiven Beeinträchtigungen verwirren. Wenn `autofocus` zugewiesen ist, "teleportieren" Bildschirmlesegeräte ihre Benutzer zum Formularelement, ohne sie vorher zu warnen.

Berücksichtigen Sie sorgfältig die Barrierefreiheit bei der Anwendung des `autofocus`-Attributs. Das automatische Fokussieren auf ein Element kann dazu führen, dass die Seite beim Laden scrollt. Der Fokus kann auch dazu führen, dass auf einigen Touch-Geräten dynamische Tastaturen angezeigt werden. Während ein Bildschirmleser das Label des Formularelements ankündigt, das den Fokus erhält, wird der Bildschirmleser nichts vor dem Label ankündigen, und der sehende Benutzer auf einem kleinen Gerät wird den Kontext übersehen, der durch den vorhergehenden Inhalt geschaffen wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
