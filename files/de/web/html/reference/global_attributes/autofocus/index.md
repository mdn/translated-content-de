---
title: "`autofocus` HTML-Globalattribut"
short-title: autofocus
slug: Web/HTML/Reference/Global_attributes/autofocus
l10n:
  sourceCommit: 9c70c6ff09189cad43d40e241fbd2fe67349c3c2
---

Das **`autofocus`** [Globalattribut](/de/docs/Web/HTML/Reference/Global_attributes) ist ein Boolesches Attribut, das angibt, ob das Element beim Laden der Seite fokussiert werden soll oder, wenn es sich innerhalb eines {{htmlelement("dialog")}}- oder [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)-Elements befindet, wenn das `<dialog>` oder Popover angezeigt wird.

```html
<input name="q" autofocus />
```

Nur ein Element innerhalb eines Dokuments, eines `<dialog>`-Elements oder Popovers darf dieses Attribut spezifiziert haben. Wenn es auf mehrere Elemente angewendet wird, erhält das erste fokussierbare Element den Fokus.

> [!NOTE]
> Das `autofocus`-Attribut gilt für alle Elemente, nicht nur für Formular-Steuerelemente. Beispielsweise könnte es auf einem [contenteditable](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)-Bereich verwendet werden.

> [!NOTE]
> Beim Laden der Seite, wenn ein [URI-Fragment-Identifier](/de/docs/Web/URI/Reference/Fragment) spezifiziert ist und ein Element identifiziert, erhält das Element mit dem `autofocus`-Attribut nicht den Fokus durch das `autofocus`-Attribut. Im Allgemeinen erhält stattdessen das durch das Fragment angegebene Element den Fokus.

## Barrierefreiheit bedenken

Das automatische Fokussieren eines Formular-Steuerelements kann sehbehinderte Personen, die auf Bildschirmlesetechnologie angewiesen sind, und Menschen mit kognitiven Beeinträchtigungen verwirren. Wenn `autofocus` zugewiesen ist, "teleportieren" Bildschirmleser ihre Benutzer zum Formular-Steuerelement, ohne sie vorher zu warnen.

Überlegen Sie sorgfältig die Barrierefreiheit, wenn Sie das `autofocus`-Attribut anwenden. Das automatische Fokussieren eines Steuerelements kann dazu führen, dass die Seite beim Laden scrollt. Der Fokus kann auch dazu führen, dass auf einigen Touch-Geräten dynamische Tastaturen angezeigt werden. Während ein Bildschirmleser das Label des Formular-Steuerelements, das den Fokus erhält, ankündigt, wird er nichts vor dem Label ankündigen, und der sehende Benutzer auf einem kleinen Gerät wird gleichermaßen den Kontext verpassen, der durch den vorhergehenden Inhalt erstellt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
