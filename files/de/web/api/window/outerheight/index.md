---
title: "Fenster: outerHeight-Eigenschaft"
short-title: outerHeight
slug: Web/API/Window/outerHeight
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef}}

Die schreibgeschützte Eigenschaft **`Window.outerHeight`** gibt die Höhe in Pixeln des gesamten Browserfensters zurück, einschließlich aller Sidebars, Fensterrahmen und Fensterziehgrenzen/-griffe.

## Hinweise

Um die Größe eines Fensters zu ändern, sehen Sie {{domxref("window.resizeBy()")}} und {{domxref("window.resizeTo()")}}.

Um die innere Höhe eines Fensters zu erhalten, d. h. die Höhe der angezeigten Seite, sehen Sie {{domxref("window.innerHeight")}}.

### Grafisches Beispiel

Die folgende Abbildung zeigt den Unterschied zwischen `outerHeight` und `innerHeight`.

![Abbildung von innerHeight vs. outerHeight](firefoxinnervsouterheight2.png)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("window.innerHeight")}}
- {{domxref("window.innerWidth")}}
- {{domxref("window.outerWidth")}}
- {{domxref("window.resizeBy()")}}
- {{domxref("window.resizeTo()")}}
