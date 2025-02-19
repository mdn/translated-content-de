---
title: Alternativer Stylesheet
slug: Web/HTML/Attributes/rel/alternate_stylesheet
l10n:
  sourceCommit: 176953b8260e0dd4328a7e788e8179accbafb8e1
---

{{HTMLSidebar}}

Das Schlüsselwortpaar **`alternate stylesheet`**, wenn es als Wert für das [`rel`](/de/docs/Web/HTML/Element/link#rel)-Attribut des {{HTMLElement("link")}}-Elements verwendet wird, gibt an, dass die Zielressource ein _alternativer Stylesheet_ ist. Das Angeben von **alternativen Stylesheets** auf einer Webseite ermöglicht es Benutzern, mehrere Versionen einer Seite basierend auf ihren Bedürfnissen oder Vorlieben zu sehen.

> [!NOTE]
> Diese Funktion wird in Browsern ohne Erweiterung nicht gut unterstützt. Um alternative Präsentationen anzubieten, die mit den vorhandenen Benutzerpräferenzen funktionieren, siehe die CSS-[Medienfunktionen](/de/docs/Web/CSS/@media#media_features) {{cssxref("@media/prefers-color-scheme","prefers-color-scheme")}} und {{cssxref("@media/prefers-contrast","prefers-contrast")}}.

Firefox ermöglicht es Benutzern, alternative {{Glossary("stylesheet", "Stylesheets")}} über das Untermenü _Ansicht > Seitenstil_ auszuwählen, das die Werte der [`title`](/de/docs/Web/HTML/Global_attributes/title)-Attribute anzeigt. Andere Browser benötigen eine Erweiterung, um diese Funktionalität zu aktivieren. Die Webseite kann auch ihre eigene Benutzeroberfläche bereitstellen, um es Benutzern zu ermöglichen, zwischen Styles zu wechseln.

## Beispiele

### Alternative Stylesheets angeben

Alternative Stylesheets werden mit {{HTMLElement("link")}}-Elementen mit den Attributen `rel="alternate stylesheet"` und `title="…"` angegeben. Zum Beispiel:

```html
<link href="reset.css" rel="stylesheet" />

<link href="default.css" rel="stylesheet" title="Default Style" />
<link href="fancy.css" rel="alternate stylesheet" title="Fancy" />
<link href="basic.css" rel="alternate stylesheet" title="Basic" />
```

In diesem Beispiel werden die Styles "Default Style", "Fancy" und "Basic" im Firefox-Untermenü _Seitenstil_ aufgelistet, wobei "Default Style" vorausgewählt ist. Wenn der Benutzer einen anderen Style auswählt, wird die Seite sofort mit diesem Stylesheet neu gerendert.

Unabhängig davon, welcher Style ausgewählt ist, werden die Regeln aus dem `reset.css`-Stylesheet immer angewendet.

### Probieren Sie es aus

[Probieren Sie hier ein funktionierendes Beispiel aus](https://mdn.github.io/css-examples/alt-style-sheets/).

## Details

Ein beliebiges Stylesheet in einem Dokument fällt in eine der folgenden Kategorien:

- **Persistent** (hat `rel="stylesheet"`, kein `title=""`): wird immer auf das Dokument angewendet.
- **Bevorzugt** (hat `rel="stylesheet"`, mit angegebenem `title="…"`) wird standardmäßig angewendet, aber [deaktiviert](/de/docs/Web/API/StyleSheet/disabled), wenn ein alternatives Stylesheet ausgewählt wird. **Es kann nur ein bevorzugtes Stylesheet geben**, sodass Stylesheets mit unterschiedlichen Titelattributen dazu führen, dass einige ignoriert werden.
- **Alternativ** (`rel="alternate stylesheet"`, mit angegebenem `title="…"`) ist standardmäßig deaktiviert und kann ausgewählt werden.

In Fällen, in denen ein Stylesheet-Menü existiert, wird der Titel, wenn Stylesheets mit einem `title`-Attribut im {{HTMLElement("link", "&lt;link rel=\"stylesheet\"&gt;")}}- oder {{HTMLElement("style")}}-Element referenziert werden, zu einer der dem Benutzer angebotenen Optionen. Stylesheets, die mit demselben [`title`](/de/docs/Web/HTML/Global_attributes/title) verlinkt sind, sind Teil derselben Auswahl. Stylesheets, die ohne `title`-Attribut verlinkt sind, werden immer angewendet.

Verwenden Sie `rel="stylesheet"`, um auf den Standardstil zu verlinken, und `rel="alternate stylesheet"`, um auf alternative Stylesheets zu verlinken. Dies teilt dem Browser mit, welcher Stylesheet-Titel standardmäßig ausgewählt werden soll, und sorgt dafür, dass diese Standardauswahl in Browsern gilt, die alternative Stylesheets nicht unterstützen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS](/de/docs/Web/CSS)
- [Verwendung dynamischer Stylinginformationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
