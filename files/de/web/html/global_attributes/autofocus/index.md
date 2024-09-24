---
title: autofocus
slug: Web/HTML/Global_attributes/autofocus
l10n:
  sourceCommit: 926f83641b980fcda58914649748b0368eeca1cd
---

{{HTMLSidebar("Global_attributes")}}

Das **`autofocus`** [globale Attribut](/de/docs/Web/HTML/Global_attributes) ist ein boolesches Attribut, das angibt, dass ein Element beim Laden der Seite oder beim Anzeigen des {{HTMLElement("dialog")}}, zu dem es gehört, fokussiert werden soll.

```html
<input name="q" autofocus />
```

Nicht mehr als ein Element im Dokument oder Dialog darf das autofocus-Attribut haben. Wenn es auf mehrere Elemente angewendet wird, erhält das erste den Fokus.

> [!NOTE]
> Das `autofocus`-Attribut gilt für alle Elemente, nicht nur für Formularelemente. Zum Beispiel könnte es in einem [contenteditable](/de/docs/Web/HTML/Global_attributes/contenteditable) Bereich verwendet werden.

## Barrierefreiheitsbedenken

Das automatische Fokussieren eines Formularelements kann sehbehinderte Personen, die Bildschirmlesetechnologie verwenden, sowie Personen mit kognitiven Beeinträchtigungen verwirren. Wenn `autofocus` zugewiesen wird, "teleportieren" Bildschirmleser ihre Benutzer zum Formularelement, ohne sie vorher zu warnen.

Berücksichtigen Sie die Barrierefreiheit sorgfältig, wenn Sie das `autofocus`-Attribut anwenden. Das automatische Fokussieren auf ein Steuerelement kann dazu führen, dass die Seite beim Laden scrollt. Der Fokus kann auch dazu führen, dass auf einigen Touch-Geräten dynamische Tastaturen angezeigt werden. Ein Bildschirmleser wird das Label des Formularelements, das den Fokus erhält, ankündigen, aber der Bildschirmleser wird nichts vor dem Label ankündigen, und der sehende Benutzer auf einem kleinen Gerät wird gleichermaßen den Kontext verpassen, der durch den vorherigen Inhalt erstellt wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
