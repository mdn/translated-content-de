---
title: prefers-color-scheme
slug: Web/CSS/@media/prefers-color-scheme
l10n:
  sourceCommit: 134f9a1ab341bf9ad30358e5f3a59bd9204078df
---

{{CSSRef}}

Das **`prefers-color-scheme`** [CSS](/de/docs/Web/CSS) [media feature](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#targeting_media_features) wird verwendet, um zu erkennen, ob ein Nutzer helle oder dunkle Farbthemen angefordert hat.
Ein Benutzer gibt seine Präferenz über eine Einstellung des Betriebssystems (z.B. Licht- oder Dunkelmodus) oder eine Einstellung des User Agents an.

## Eingebettete Elemente

Für SVG und iframes ermöglicht `prefers-color-scheme`, einen CSS-Stil für das SVG oder iframe basierend auf dem [`color-scheme`](/de/docs/Web/CSS/color-scheme) des übergeordneten Elements auf der Webseite festzulegen.
SVGs müssen eingebettet verwendet werden (d.h. `<img src="circle.svg" alt="circle" />`) im Gegensatz zu [inline in HTML](/de/docs/Web/SVG/Tutorial/SVG_In_HTML_Introduction#basic_example).
Ein Beispiel für die Verwendung von `prefers-color-scheme` in SVGs finden Sie im Abschnitt ["Geerbtes Farbschema in eingebetteten Elementen"](#geerbtes_farbschema_in_eingebetteten_elementen).

Die Verwendung von `prefers-color-scheme` ist in [cross-origin](/de/docs/Web/Security/Same-origin_policy#cross-origin_network_access) `<svg>` und `<iframe>` Elementen zulässig. Cross-origin Elemente sind Elemente, die von einem anderen Host abgerufen werden als der Seite, die sie referenziert.
Um mehr über SVGs zu erfahren, siehe die [SVG-Dokumentation](/de/docs/Web/SVG) und für weitere Informationen über iframes, siehe die [iframe-Dokumentation](/de/docs/Web/HTML/Element/iframe).

## Syntax

- `light`
  - : Zeigt an, dass der Benutzer mitgeteilt hat, dass er eine Benutzeroberfläche mit einem hellen Thema bevorzugt oder keine aktive Präferenz ausgedrückt hat.
- `dark`
  - : Zeigt an, dass der Benutzer mitgeteilt hat, dass er eine Benutzeroberfläche mit einem dunklen Thema bevorzugt.

## Beispiele

### Erkennen eines dunklen oder hellen Themas

Eine häufige Verwendung ist die Nutzung eines hellen Farbschemas standardmäßig und dann `prefers-color-scheme: dark`, um die Farben auf eine dunklere Variante zu ändern. Es ist auch möglich, es umgekehrt zu machen.

Dieses Beispiel zeigt beide Optionen: Thema A verwendet helle Farben, kann aber auf dunkle Farben umgestellt werden. Thema B verwendet dunkle Farben, kann aber auf helle Farben umgestellt werden. Am Ende, wenn der Browser `prefers-color-scheme` unterstützt, werden beide Themen hell oder dunkel sein.

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

Thema A (braun) verwendet standardmäßig ein helles Farbschema, wechselt aber zu einem dunklen Schema basierend auf der Media Query:

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

Thema B (blau) verwendet standardmäßig ein dunkles Farbschema, wechselt aber zu einem hellen Schema basierend auf der Media Query:

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

Die linken Boxen zeigen Thema A und Thema B, wie sie ohne die `prefers-color-scheme` Media Query erscheinen würden. Die rechten Boxen zeigen die gleichen Themen, aber eines von ihnen wird basierend auf dem aktiven Farbschema des Nutzers in eine dunklere oder hellere Variante geändert. Der Umriss einer der Boxen wird gestrichelt oder gepunktet sein, wenn er basierend auf den Einstellungen Ihres Browsers oder Betriebssystems geändert wurde.

{{EmbedLiveSample("Detecting_a_dark_or_light_theme", "100%", "200px")}}

### Geerbtes Farbschema in eingebetteten Elementen

Das folgende Beispiel zeigt, wie die `prefers-color-scheme` Media-Funktion in einem eingebetteten Element verwendet wird, um ein Farbschema von einem übergeordneten Element zu erben.
Ein Skript wird verwendet, um die Quelle der `<img>` Elemente und ihre `alt` Attribute festzulegen. Dies würde normalerweise in HTML als `<img src="circle.svg" alt="circle" />` gemacht werden.

Sie sollten drei Kreise sehen, mit einem, der in einer anderen Farbe gezeichnet ist.
Der erste Kreis erbt das `color-scheme` vom Betriebssystem und kann über den Themenwechsler des Betriebssystems umgeschaltet werden.

Der zweite und dritte Kreis erben das `color-scheme` vom einbettenden Element; die `@media` Abfrage erlaubt es, die Stile des SVG-Inhalts basierend auf dem `color-scheme` des übergeordneten Elements festzulegen.
In diesem Fall ist das übergeordnete Element mit einer `color-scheme` CSS-Eigenschaft ein `<div>`.

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
- {{HTTPHeader("Sec-CH-Prefers-Color-Scheme")}} HTTP Header [User Agent Client Hint](/de/docs/Web/HTTP/Client_hints#user-agent_client_hints)
- [Simulieren von prefers-color-scheme in Firefox](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#view-media-rules-for-prefers-color-scheme)
- [Video: Eine Dunkelmodus für Ihre Website programmieren](https://www.youtube.com/watch?v=jmepqJ5UbuM)
- [Neugestaltung Ihres Produkts und Ihrer Website für den Dunkelmodus](https://stuffandnonsense.co.uk/blog/redesigning-your-product-and-website-for-dark-mode)
- Farbsc Themen ändern in [Windows](https://blogs.windows.com/windowsexperience/2019/04/01/windows-10-tip-dark-theme-in-file-explorer/), [macOS](https://developer.apple.com/design/human-interface-guidelines/dark-mode), [Android](https://www.theverge.com/2019/5/7/18530599/google-android-q-features-hands-on-dark-mode-gestures-accessibility-io-2019), oder [anderen Plattformen](https://support.mozilla.org/en-US/questions/1271928).
