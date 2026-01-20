---
title: HTML-Autofocus-Globaleigenschaft
short-title: autofocus
slug: Web/HTML/Reference/Global_attributes/autofocus
l10n:
  sourceCommit: 01d5901fdbad83033fe1f86486f652d07db7ce2a
---

Die **`autofocus`** [globale Eigenschaft](/de/docs/Web/HTML/Reference/Global_attributes) ist eine Boolean-Eigenschaft, die angibt, ob das Element beim Laden der Seite oder, wenn es sich innerhalb eines {{htmlelement("dialog")}}- oder [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)-Elements befindet, fokussiert werden soll, wenn das `<dialog>` oder Popover angezeigt wird.

```html
<input name="q" autofocus />
```

Nur ein Element innerhalb eines Dokuments, `<dialog>`-Elements oder Popovers darf diese Eigenschaft angegeben haben. Wenn sie auf mehrere Elemente angewendet wird, erhält das erste fokussierbare Element den Fokus.

> [!NOTE]
> Das `autofocus`-Attribut gilt für alle Elemente, nicht nur für Formularelemente. Zum Beispiel kann es auf einem [contenteditable](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)-Bereich verwendet werden.

> [!NOTE]
> Wenn beim Laden der Seite ein [URI-Fragmentbezeichner](/de/docs/Web/URI/Reference/Fragment) angegeben ist und ein Element identifiziert, erhält das Element mit dem `autofocus`-Attribut keinen Fokus über das `autofocus`-Attribut. Im Allgemeinen erhält stattdessen das durch das Fragment angezeigte Element den Fokus.

## Barrierefreiheitsbedenken

Das automatische Fokussieren eines Formularelements kann sehbehinderten Menschen, die Bildschirmlesetechnologien verwenden, sowie Menschen mit kognitiven Beeinträchtigungen verwirren. Wenn `autofocus` zugewiesen ist, "teleportieren" Bildschirmleser ihren Benutzer ohne Vorwarnung zum Formularelement.

Berücksichtigen Sie die Barrierefreiheit sorgfältig, wenn Sie das `autofocus`-Attribut anwenden. Das automatische Fokusieren auf ein Element kann dazu führen, dass die Seite beim Laden scrollt. Der Fokus kann auch dazu führen, dass auf einigen Touchgeräten dynamische Tastaturen angezeigt werden. Während ein Bildschirmleser das Label des fokussierten Formularelements ansagt, wird der Bildschirmleser nichts vor dem Label ansagen, und der sehende Benutzer auf einem kleinen Gerät wird ebenso den Kontext verpassen, den der vorhergehende Inhalt schafft.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
