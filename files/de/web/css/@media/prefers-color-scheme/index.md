---
title: prefers-color-scheme
slug: Web/CSS/@media/prefers-color-scheme
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{CSSRef}}

Das **`prefers-color-scheme`** [CSS](/de/docs/Web/CSS) [Medienmerkmal](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#targeting_media_features) wird verwendet, um zu erkennen, ob ein Benutzer helle oder dunkle Farbthemen angefordert hat. Ein Benutzer gibt seine Präferenz durch eine Betriebssystemeinstellung (z. B. Licht- oder Dunkelmodus) oder eine Benutzereinstellung im Browser an.

## Eingebettete Elemente

Für SVGs und iframes ermöglicht `prefers-color-scheme`, einen CSS-Stil für das SVG oder das iframe basierend auf dem [`color-scheme`](/de/docs/Web/CSS/color-scheme) des übergeordneten Elements auf der Webseite festzulegen. SVGs müssen eingebettet verwendet werden (d.h. `<img src="circle.svg" alt="circle" />`) im Gegensatz zu [in HTML eingebetteten SVGs](/de/docs/Web/SVG/Tutorial/SVG_In_HTML_Introduction#basic_example). Ein Beispiel für die Verwendung von `prefers-color-scheme` in SVGs finden Sie im Abschnitt ["Geerbtes Farbschema in eingebetteten Elementen"](#geerbtes_farbschema_in_eingebetteten_elementen).

Die Verwendung von `prefers-color-scheme` ist in [cross-origin](/de/docs/Web/Security/Same-origin_policy#cross-origin_network_access) `<svg>` und `<iframe>` Elementen erlaubt. Cross-origin-Elemente sind Elemente, die von einem anderen Host als der Seite, die sie referenziert, abgerufen werden. Um mehr über SVGs zu erfahren, lesen Sie die [SVG-Dokumentation](/de/docs/Web/SVG) und für mehr Informationen über iframes, siehe die [iframe-Dokumentation](/de/docs/Web/HTML/Element/iframe).

## Syntax

- `light`
  - : Gibt an, dass der Benutzer ein Interface bevorzugt, das ein helles Thema hat, oder keine aktive Präferenz ausgedrückt hat.
- `dark`
  - : Gibt an, dass der Benutzer ein Interface bevorzugt, das ein dunkles Thema hat.

## Beispiele

### Erkennung eines dunklen oder hellen Themas

Eine häufige Verwendung besteht darin, standardmäßig ein helles Farbschema zu verwenden und dann `prefers-color-scheme: dark` zu verwenden, um die Farben in eine dunklere Variante zu ändern. Es ist auch möglich, es umgekehrt zu machen.

Dieses Beispiel zeigt beide Optionen: Theme A verwendet helle Farben, kann jedoch auf dunkle Farben umgestellt werden. Theme B verwendet dunkle Farben, kann jedoch auf helle Farben umgestellt werden. Am Ende, wenn der Browser `prefers-color-scheme` unterstützt, werden beide Themen entweder hell oder dunkel sein.

#### HTML

```html
<div class="box theme-a">Theme A (initial)</div>
<div class="box theme-a adaptive">Theme A (changed if dark preferred)</div>
<br />

<div class="box theme-b">Theme B (initial)</div>
<div class="box theme-b adaptive">Theme B (changed if light preferred)</div>
```

#### CSS

```css hidden
div.box {
  display: inline-block;
  padding: 1em;
  margin: 6px;
  outline: 2px solid #000;
  width: 12em;
  height: 2em;
  vertical-align: middle;
}
```

Theme A (braun) verwendet standardmäßig ein helles Farbschema, wechselt jedoch basierend auf der Medienabfrage zu einem dunklen Schema:

```css
.theme-a {
  background: #dca;
  color: #731;
}
@media (prefers-color-scheme: dark) {
  .theme-a.adaptive {
    background: #753;
    color: #dcb;
    outline: 5px dashed #000;
  }
}
```

Theme B (blau) verwendet standardmäßig ein dunkles Farbschema, wechselt jedoch basierend auf der Medienabfrage zu einem hellen Schema:

```css
.theme-b {
  background: #447;
  color: #bbd;
}
@media (prefers-color-scheme: light) {
  .theme-b.adaptive {
    background: #bcd;
    color: #334;
    outline: 5px dotted #000;
  }
}
```

#### Ergebnis

Die linken Kästchen zeigen Theme A und Theme B, wie sie ohne die `prefers-color-scheme` Medienabfrage erscheinen würden. Die rechten Kästchen zeigen dieselben Themen, aber eines von ihnen wird basierend auf dem aktiven Farbschema des Benutzers in eine dunklere oder hellere Variante geändert. Der Umriss eines Kastens wird gestrichelt oder gepunktet sein, wenn er basierend auf Ihren Browser- oder Betriebssystemeinstellungen verändert wurde.

{{EmbedLiveSample("Detecting_a_dark_or_light_theme", "100%", "200px")}}

### Geerbtes Farbschema in eingebetteten Elementen

Das folgende Beispiel zeigt, wie man das `prefers-color-scheme` Medienmerkmal in einem eingebetteten Element verwendet, um ein Farbschema von einem übergeordneten Element zu erben. Ein Skript wird verwendet, um die Quelle der `<img>`-Elemente und deren `alt`-Attribute festzulegen. Dies würde normalerweise in HTML als `<img src="circle.svg" alt="circle" />` gemacht werden.

Sie sollten drei Kreise sehen, wobei einer in einer anderen Farbe gezeichnet wird. Der erste Kreis erbt das `color-scheme` vom Betriebssystem und kann mit dem Theme-Schalter des Systems umgeschaltet werden.

Der zweite und dritte Kreis erben das `color-scheme` vom einbettenden Element; die `@media`-Abfrage ermöglicht das Festlegen von Stilen des SVG-Inhalts basierend auf dem Farbschema des übergeordneten Elements. In diesem Fall ist das übergeordnete Element mit einer `color-scheme` CSS-Eigenschaft ein `<div>`.

```html
<div>
  <img />
</div>

<div style="color-scheme: light">
  <img />
</div>
<div style="color-scheme: dark">
  <img />
</div>

<!-- Embed an SVG for all <img> elements -->
<script>
  for (let img of document.querySelectorAll("img")) {
    img.alt = "circle";
    img.src =
      "data:image/svg+xml;base64," +
      window.btoa(`
      <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <style>
          :root { color: blue }
          @media (prefers-color-scheme: dark) {
            :root { color: purple }
          }
        </style>
        <circle fill="currentColor" cx="16" cy="16" r="16"/>
      </svg>
    `);
  }
</script>
```

{{EmbedLiveSample("Color_scheme_inheritance")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("color-scheme")}} Eigenschaft
- [`<meta name="color-scheme">`](/de/docs/Web/HTML/Element/meta/name#color-scheme)
- {{HTTPHeader("Sec-CH-Prefers-Color-Scheme")}} HTTP Header [Benutzeragent-Client-Hinweis](/de/docs/Web/HTTP/Guides/Client_hints#user-agent_client_hints)
- [Simulieren von prefers-color-scheme in Firefox](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#view-media-rules-for-prefers-color-scheme)
- [Video: Codierung eines Dunkelmodus für Ihre Website](https://www.youtube.com/watch?v=jmepqJ5UbuM)
- [Neugestaltung Ihres Produkts und Ihrer Website für den Dunkelmodus](https://stuffandnonsense.co.uk/blog/redesigning-your-product-and-website-for-dark-mode)
- Änderung von Farbschemata in [Windows](https://blogs.windows.com/windowsexperience/2019/04/01/windows-10-tip-dark-theme-in-file-explorer/), [macOS](https://developer.apple.com/design/human-interface-guidelines/dark-mode), [Android](https://www.theverge.com/2019/5/7/18530599/google-android-q-features-hands-on-dark-mode-gestures-accessibility-io-2019), oder [anderen Plattformen](https://support.mozilla.org/en-US/questions/1271928).
