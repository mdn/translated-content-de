---
title: <meta name="responsive-embedded-sizing">
short-title: responsive-embedded-sizing
slug: Web/HTML/Reference/Elements/meta/name/responsive-embedded-sizing
l10n:
  sourceCommit: 04c41175b160dc00b1a1b8e4e13b2183d89fdf1a
---

{{SeeCompatTable}}

Der Wert **`responsive-embedded-sizing`** für das [`name`](/de/docs/Web/HTML/Reference/Elements/meta/name)-Attribut eines {{htmlelement("meta")}}-Elements ermöglicht einem in einem {{htmlelement("iframe")}} eingebetteten Dokument, seine Größeninformationen mit dem übergeordneten Dokument zu teilen. Der Rahmen kann dann relativ zur Layout-Größe des enthaltenen Dokuments durch die CSS-Eigenschaft {{cssxref("frame-sizing")}} dimensioniert werden.

## Beschreibung

Aus Sicherheits- und Datenschutzgründen offenbaren {{htmlelement("iframe")}}-Elemente standardmäßig keine Informationen über die Größe des eingebetteten Inhalts an das übergeordnete Dokument.

Um eine responsive Größenanpassung von {{htmlelement("iframe")}}-Elementen entsprechend ihrem Inhalt zu ermöglichen, kann der Tag `<meta name="responsive-embedded-sizing">` in ein eingebettetes Dokument eingeschlossen werden, damit es seine Größeninformation mit dem übergeordneten Dokument teilt.

Die CSS-Eigenschaft {{cssxref("frame-sizing")}} kann dann auf dem `<iframe>` gesetzt werden, um die gleiche horizontale oder vertikale Größe wie die tatsächliche Inhaltsgröße des eingebetteten Dokuments (in der Spezifikation als **interne Layout-intrinsische Größe** bezeichnet, in unserer Dokumentation aber auf "Layout-Größe" verkürzt) zu übernehmen. Dies ermöglicht es, dass `<iframe>`-Inhalte nahtlos in das einbettende Element passen und unnötige Scrollbalken vermieden werden.

Um das `<iframe>` dynamisch anzupassen, wenn sich die Layout-Größe des eingebetteten Dokuments ändert, können Sie die Methode [`Window.requestResize()`](/de/docs/Web/API/Window/requestResize) aus dem eingebetteten Dokument aufrufen, um eine aktualisierte Größe zu melden.

## Beispiele

Siehe die Seiten zu {{cssxref("frame-sizing")}} und [`Window.requestResize()`](/de/docs/Web/API/Window/requestResize) für vollständige Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Window.requestResize()`](/de/docs/Web/API/Window/requestResize)
- {{cssxref("frame-sizing")}} CSS-Eigenschaft
- [CSS-Boxmodell-Größenbestimmung](/de/docs/Web/CSS/Guides/Box_sizing) Modul
