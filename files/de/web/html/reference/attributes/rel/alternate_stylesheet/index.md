---
title: rel="alternate stylesheet"
slug: Web/HTML/Reference/Attributes/rel/alternate_stylesheet
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Das **`alternate stylesheet`** Schlüsselwortpaar, wenn es als Wert für das [`rel`](/de/docs/Web/HTML/Reference/Elements/link#rel)-Attribut des {{HTMLElement("link")}}-Elements verwendet wird, zeigt an, dass die Zielressource ein _alternatives Stylesheet_ ist. Das Angeben von **alternativen Stylesheets** auf einer Webseite ermöglicht es Benutzern, je nach ihren Bedürfnissen oder Vorlieben, verschiedene Versionen einer Seite zu sehen.

> [!NOTE]
> Diese Funktion wird in Browsern ohne Erweiterung nicht gut unterstützt. Um alternative Präsentationen anzubieten, die mit den bestehenden Präferenzen eines Benutzers funktionieren, sehen Sie sich die CSS [Medienfunktionen](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) {{cssxref("@media/prefers-color-scheme","prefers-color-scheme")}} und {{cssxref("@media/prefers-contrast","prefers-contrast")}} an.

Firefox ermöglicht es Benutzern, alternative {{Glossary("stylesheet", "Stylesheets")}} über das Untermenü _Ansicht > Seitenstil_ auszuwählen, in dem die Werte der [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title)-Attribute angezeigt werden. Andere Browser erfordern eine Erweiterung, um diese Funktionalität zu aktivieren. Die Webseite kann auch ihre eigene Benutzeroberfläche bereitstellen, um Benutzern den Wechsel der Styles zu ermöglichen.

## Beispiele

### Angabe von alternativen Stylesheets

Alternative Stylesheets werden durch {{HTMLElement("link")}}-Elemente mit den Attributen `rel="alternate stylesheet"` und `title="…"`` spezifiziert. Zum Beispiel:

```html
<link href="reset.css" rel="stylesheet" />

<link href="default.css" rel="stylesheet" title="Default Style" />
<link href="fancy.css" rel="alternate stylesheet" title="Fancy" />
<link href="basic.css" rel="alternate stylesheet" title="Basic" />
```

In diesem Beispiel werden die Styles "Default Style", "Fancy" und "Basic" im Firefox-Untermenü _Seitenstil_ aufgelistet, wobei "Default Style" vorausgewählt ist. Wenn der Benutzer einen anderen Stil auswählt, wird die Seite sofort mit diesem Stylesheet neu gerendert.

Unabhängig davon, welcher Stil ausgewählt ist, werden die Regeln aus dem `reset.css`-Stylesheet immer angewendet.

### Probieren Sie es aus

[Probieren Sie ein funktionierendes Beispiel hier aus](https://mdn.github.io/css-examples/alt-style-sheets/).

## Details

Jedes Stylesheet in einem Dokument fällt in eine der folgenden Kategorien:

- **Persistent** (hat `rel="stylesheet"`, kein `title=""`): wird immer auf das Dokument angewendet.
- **Preferred** (hat `rel="stylesheet"`, mit `title="…"` spezifiziert): wird standardmäßig angewendet, aber [deaktiviert](/de/docs/Web/API/StyleSheet/disabled), wenn ein alternatives Stylesheet ausgewählt wird. **Es kann nur ein bevorzugtes Stylesheet geben**, daher werden Stylesheets mit unterschiedlichen Titelattributen dazu führen, dass einige von ihnen ignoriert werden.
- **Alternate** (`rel="alternate stylesheet"`, mit `title="…"` spezifiziert): standardmäßig deaktiviert, kann ausgewählt werden.

In Fällen, in denen ein Stylesheet-Menü existiert, wenn Stylesheets mit einem `title`-Attribut am {{HTMLElement("link", "&lt;link rel=\"stylesheet\"&gt;")}} oder {{HTMLElement("style")}}-Element referenziert werden, wird der Titel zu einer der angebotenen Auswahlmöglichkeiten für den Benutzer. Stylesheets, die mit demselben [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title) verlinkt sind, sind Teil derselben Auswahl. Stylesheets, die ohne ein `title`-Attribut verlinkt sind, werden immer angewendet.

Verwenden Sie `rel="stylesheet"` für das Verknüpfen mit dem Standardstil und `rel="alternate stylesheet"` für das Verknüpfen mit alternativen Stylesheets. Dies teilt dem Browser mit, welcher Stylesheet-Titel standardmäßig ausgewählt werden sollte, und macht diese Standardauswahl in Browsern anwendbar, die alternative Stylesheets nicht unterstützen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS](/de/docs/Web/CSS)
- [Verwendung dynamischer Stilinformationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
