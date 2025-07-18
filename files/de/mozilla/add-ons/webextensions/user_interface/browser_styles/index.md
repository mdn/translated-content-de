---
title: Browser-Stile
slug: Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Ihre Erweiterung kann Benutzerschnittstellenelemente enthalten - Browser- und Seitenaktions-[Popups](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups), [Seitenleisten](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars), und [Optionen-Seiten](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages) - die angegeben werden durch:

1. Erstellen einer HTML-Datei, die die Struktur des UI-Elements definiert.
2. Hinzufügen eines manifest.json-Schlüssels ([`action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action), [`browser_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action), [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action), [`sidebar_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) oder [`options_ui`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui)), der auf diese HTML-Datei verweist.

Sie können diese Elemente so gestalten, dass sie dem Stil des Browsers entsprechen. Die manifest.json-Schlüssel enthalten eine optionale Eigenschaft, um dies zu unterstützen: `browser_style`. Wenn diese eingeschlossen und auf `true` gesetzt ist, erhält Ihr Dokument ein oder mehrere zusätzliche Stylesheets, die helfen, es konsistent mit der Benutzeroberfläche des Browsers und mit anderen Erweiterungen, die die `browser_style`-Eigenschaft verwenden, aussehen zu lassen.

> [!NOTE]
> Die Unterstützung für `browser_style` in Manifest V3 ist veraltet. Ab Firefox 115 ändert sich der Standardwert von `options_ui.browser_style` und `sidebar_action.browser_style` von `true` auf `false`. In Firefox 118 wird `"browser_style": true` in Manifest V3-Erweiterungen nicht mehr unterstützt.
> Wenn Ihre Manifest V3-Erweiterung von den `"browser_style": true`-Stilen abhängt, folgen Sie dem [Manifest V3-Migrationsleitfaden für `browser_style`](#manifest_v3_migration).
> Weitere Informationen finden Sie im ([Firefox-Bug 1827910](https://bugzil.la/1827910)).
> Wenn Sie den Firefox-Stil auf Ihre Erweiterung anwenden möchten, sehen Sie sich den [Firefox Style Guide](https://acorn.firefox.com/latest) an.

Wenn Sie überlegen, ob Sie `browser_style: true` verwenden sollen, testen Sie Ihre Erweiterung mit verschiedenen Themen (integriert oder von AMO), um sicherzustellen, dass die Benutzeroberfläche der Erweiterung so funktioniert, wie Sie es erwarten.

> [!WARNING]
> Wenn `browser_style: true` im Manifest Ihrer Web-Erweiterung enthalten ist, wird die Textauswahl in der Benutzeroberfläche Ihrer Erweiterung außer in den Eingabesteuerelementen deaktiviert. Wenn dies ein Problem verursacht, schließen Sie stattdessen `browser_style:false` ein.

> [!NOTE]
> **Google Chrome** und **Opera** verwenden `chrome_style` anstelle von `browser_style` in Manifest V2. Für browserübergreifende Erweiterungen müssen Sie beide Schlüssel hinzufügen. `chrome_style` ist in Manifest V3 nicht verfügbar.

In Firefox kann das Stylesheet unter `chrome://browser/content/extension.css` eingesehen werden. Das zusätzliche Stylesheet unter `chrome://browser/content/extension-mac.css` ist ebenfalls auf macOS enthalten.

Die meisten Stile werden automatisch angewendet, aber einige Elemente erfordern, dass Sie die nicht standardmäßige Klasse `browser-style` hinzufügen, um deren Styling zu erhalten, wie in der folgenden Tabelle beschrieben:

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">Element</th>
      <th scope="col">Beispiel</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code
          ><a href="/de/docs/Web/HTML/Reference/Elements/button">&#x3C;button></a></code
        >
      </td>
      <td>
        <pre class="brush: html">
&#x3C;button class="browser-style">Click me&#x3C;/button></pre
        >
      </td>
    </tr>
    <tr>
      <td>
        <p>
          <code
            ><a href="/de/docs/Web/HTML/Reference/Elements/select"
              >&#x3C;select></a
            ></code
          >
        </p>
      </td>
      <td>
        <pre class="brush: html">
&#x3C;select class="browser-style" name="select">
  &#x3C;option value="value1">Value 1&#x3C;/option>
  &#x3C;option value="value2" selected>Value 2&#x3C;/option>
  &#x3C;option value="value3">Value 3&#x3C;/option>
&#x3C;/select></pre
        >
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/de/docs/Web/HTML/Reference/Elements/textarea"
            >&#x3C;textarea></a
          ></code
        >
      </td>
      <td>
        <pre class="brush: html">
&#x3C;textarea class="browser-style">Write here&#x3C;/textarea></pre
        >
      </td>
    </tr>
    <tr>
      <td>
        Elternteil eines
        <code
          ><a href="/de/docs/Web/HTML/Reference/Elements/input">&#x3C;input></a></code
        >
      </td>
      <td>
        <pre class="brush: html">
&#x3C;div class="browser-style">
  &#x3C;input type="radio" id="op1" name="choices" value="op1"/>
  &#x3C;label for="op1">Option 1&#x3C;/label>

&#x3C;input type="radio" id="op2" name="choices" value="op2"/>
&#x3C;label for="op2">Option 2&#x3C;/label>
&#x3C;/div></pre
        >

</td>
</tr>

  </tbody>
</table>

## Manifest V3 Migration

Da `browser_style` in Manifest V3 veraltet ist, möchten Sie möglicherweise die Unterstützung entfernen, wenn Sie Ihre Manifest V2-Erweiterungen migrieren. Verwenden Sie `options_ui` als Beispiel, würden Sie diese Schritte unternehmen, um die Unterstützung für `browser_style` zu entfernen:

- Setzen Sie `options_ui/browser_style` auf `false`.
- Ändert sich das Erscheinungsbild der Benutzeroberfläche Ihrer Erweiterung?
  - Wenn sich das Erscheinungsbild nicht verändert, entfernen Sie den Schlüssel.
  - Wenn sich das Erscheinungsbild ändert, experimentieren Sie, um festzustellen, welche Abhängigkeiten bestehen, und fügen Sie die relevanten Eigenschaften im Stylesheet der Erweiterung hinzu. Die Stile, die am ehesten Layoutänderungen verursachen, sind `box-sizing:`, `border-box` und `display: flex`.
    Wenn Sie die Abhängigkeiten nicht identifizieren können, fügen Sie den Inhalt von [extension.css](https://searchfox.org/mozilla-central/source/browser/components/extensions/extension.css) in die Erweiterung ein und löschen Sie alle Teile, die nicht relevant sind, normalerweise die `body`- und `body *`-Blöcke, da die meisten Erweiterungen die `browser-style`-Klasse nicht verwenden.

## Firefox-Panel-Komponenten (veraltet)

> [!NOTE]
> Diese Funktion ist nicht standardisiert und funktioniert nur in Firefox.

Das `chrome://browser/content/extension.css`-Stylesheet enthält auch die Stile für die veralteten Firefox-Panel-Komponenten (Navigationskomponenten).

Der [Legacy Firefox Style Guide](https://firefoxux.github.io/StyleGuide/#/navigation) dokumentiert die korrekte Verwendung.

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">Element</th>
      <th scope="col">Beispiel</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Kopfzeile</td>
      <td>
        <pre class="brush: html">
&#x3C;header class="panel-section panel-section-header">
  &#x3C;div class="icon-section-header">&#x3C;img src="image.svg"/>&#x3C;/div>
  &#x3C;div class="text-section-header">Header&#x3C;/div>
&#x3C;/header></pre
        >
      </td>
    </tr>
    <tr>
      <td>Fußzeile</td>
      <td>
        <pre class="brush: html">
&#x3C;footer class="panel-section panel-section-footer">
  &#x3C;button class="panel-section-footer-button">Cancel&#x3C;/button>
  &#x3C;div class="panel-section-footer-separator">&#x3C;/div>
  &#x3C;button class="panel-section-footer-button default">Confirm&#x3C;/button>
&#x3C;/footer></pre
        >
      </td>
    </tr>
    <tr>
      <td>Tabs</td>
      <td>
        <pre class="brush: html">
&#x3C;div class="panel-section panel-section-tabs">
  &#x3C;button class="panel-section-tabs-button selected">Tab&#x3C;/button>
  &#x3C;div class="panel-section-tabs-separator">&#x3C;/div>
  &#x3C;button class="panel-section-tabs-button">Tab&#x3C;/button>
  &#x3C;div class="panel-section-tabs-separator">&#x3C;/div>
  &#x3C;button class="panel-section-tabs-button">Tab&#x3C;/button>
&#x3C;/div></pre
        >
      </td>
    </tr>
    <tr>
      <td>Formular</td>
      <td>
        <pre class="brush: html">
&#x3C;div class="panel-section panel-section-formElements">
  &#x3C;div class="panel-formElements-item">
    &#x3C;label for="name01">Label:&#x3C;/label>
    &#x3C;input type="text" value="Name" id="name01" />
  &#x3C;/div>
  &#x3C;div class="panel-formElements-item">
    &#x3C;label for="picker01">Label:&#x3C;/label>
    &#x3C;select id="picker01">
      &#x3C;option value="value1" selected="true">Dropdown&#x3C;/option>
      &#x3C;option value="value2">List Item&#x3C;/option>
      &#x3C;option value="value3">List Item&#x3C;/option>
    &#x3C;/select>
  &#x3C;/div>
  &#x3C;div class="panel-formElements-item">
    &#x3C;label for="placeholder01">Label:&#x3C;/label>
    &#x3C;input type="text" placeholder="Placeholder" id="placeholder01" />
    &#x3C;button name="expander" class="expander">&#x3C;/button>
  &#x3C;/div>
&#x3C;/div></pre
        >
      </td>
    </tr>
    <tr>
      <td>Menü</td>
      <td>
        <pre class="brush: html">
&#x3C;div class="panel-section panel-section-list">
  &#x3C;div class="panel-list-item">
    &#x3C;div class="icon">&#x3C;/div>
    &#x3C;div class="text">List Item&#x3C;/div>
    &#x3C;div class="text-shortcut">Ctrl-L&#x3C;/div>
  &#x3C;/div>

&#x3C;div class="panel-list-item">
&#x3C;div class="icon">&#x3C;/div>
&#x3C;div class="text">List Item&#x3C;/div>
&#x3C;div class="text-shortcut">&#x3C;/div>
&#x3C;/div>

&#x3C;div class="panel-section-separator">&#x3C;/div>

&#x3C;div class="panel-list-item disabled">
&#x3C;div class="icon">&#x3C;/div>
&#x3C;div class="text">Disabled List Item&#x3C;/div>
&#x3C;div class="text-shortcut">&#x3C;/div>
&#x3C;/div>

&#x3C;div class="panel-section-separator">&#x3C;/div>

&#x3C;div class="panel-list-item">
&#x3C;div class="icon">&#x3C;/div>
&#x3C;div class="text">List Item&#x3C;/div>
&#x3C;div class="text-shortcut">&#x3C;/div>
&#x3C;/div>

&#x3C;div class="panel-list-item">
&#x3C;div class="icon">&#x3C;/div>
&#x3C;div class="text">List Item&#x3C;/div>
&#x3C;div class="text-shortcut">&#x3C;/div>
&#x3C;/div>
&#x3C;/div></pre
        >

</td>
</tr>

  </tbody>
</table>

### Beispiel

#### HTML

```html
<header class="panel-section panel-section-header">
  <div class="icon-section-header"><!-- An image goes here. --></div>
  <div class="text-section-header">Header</div>
</header>

<div class="panel-section panel-section-list">
  <div class="panel-list-item">
    <div class="icon"></div>
    <div class="text">List Item</div>
    <div class="text-shortcut">Ctrl-L</div>
  </div>

  <div class="panel-list-item">
    <div class="icon"></div>
    <div class="text">List Item</div>
    <div class="text-shortcut"></div>
  </div>

  <div class="panel-section-separator"></div>

  <div class="panel-list-item disabled">
    <div class="icon"></div>
    <div class="text">Disabled List Item</div>
    <div class="text-shortcut"></div>
  </div>

  <div class="panel-section-separator"></div>

  <div class="panel-list-item">
    <div class="icon"></div>
    <div class="text">List Item</div>
    <div class="text-shortcut"></div>
  </div>

  <div class="panel-list-item">
    <div class="icon"></div>
    <div class="text">List Item</div>
    <div class="text-shortcut"></div>
  </div>
</div>

<footer class="panel-section panel-section-footer">
  <button class="panel-section-footer-button">Cancel</button>
  <div class="panel-section-footer-separator"></div>
  <button class="panel-section-footer-button default">Confirm</button>
</footer>
```

```css hidden
/* Global */
html,
body {
  background: white;
  box-sizing: border-box;
  color: #222426;
  cursor: default;
  display: flex;
  flex-direction: column;
  font: caption;
  margin: 0;
  padding: 0;
  -moz-user-select: none;
}

body * {
  box-sizing: border-box;
  text-align: start;
}

button.panel-section-footer-button,
button.panel-section-tabs-button {
  color: inherit;
  background-color: unset;
  font: inherit;
  text-shadow: inherit;
  appearance: none;
  border: none;
}

/* Panel Section */
.panel-section {
  display: flex;
  flex-direction: row;
}

.panel-section-separator {
  background-color: rgb(0 0 0 / 0.15);
  min-height: 1px;
}

/* Panel Section - Header */
.panel-section-header {
  border-bottom: 1px solid rgb(0 0 0 / 0.15);
  padding: 16px;
}

.panel-section-header > .icon-section-header {
  background-position: center center;
  background-repeat: no-repeat;
  height: 32px;
  margin-right: 16px;
  position: relative;
  width: 32px;
}

.panel-section-header > .text-section-header {
  align-self: center;
  font-size: 1.385em;
  font-weight: lighter;
}

/* Panel Section - List */
.panel-section-list {
  flex-direction: column;
  padding: 4px 0;
}

.panel-list-item {
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 24px;
  padding: 0 16px;
}

.panel-list-item:not(.disabled):hover {
  background-color: rgb(0 0 0 / 0.06);
  border-bottom: 1px solid rgb(0 0 0 / 0.1);
  border-top: 1px solid rgb(0 0 0 / 0.1);
}

.panel-list-item:not(.disabled):hover:active {
  background-color: rgb(0 0 0 / 0.1);
}

.panel-list-item.disabled {
  color: #999;
}

.panel-list-item > .icon {
  flex-grow: 0;
  flex-shrink: 0;
}

.panel-list-item > .text {
  flex-grow: 10;
}

.panel-list-item > .text-shortcut {
  color: #808080;
  font-family: "Lucida Grande", caption;
  font-size: 0.847em;
  justify-content: flex-end;
}

.panel-section-list .panel-section-separator {
  margin: 4px 0;
}

/* Panel Section - Footer */
.panel-section-footer {
  background-color: rgb(0 0 0 / 0.06);
  border-top: 1px solid rgb(0 0 0 / 0.15);
  color: #1a1a1a;
  display: flex;
  flex-direction: row;
  height: 41px;
  margin-top: -1px;
  padding: 0;
}

.panel-section-footer-button {
  flex: 1 1 auto;
  height: 100%;
  margin: 0 -1px;
  padding: 12px;
  text-align: center;
}

.panel-section-footer-button > .text-shortcut {
  color: #808080;
  font-family: "Lucida Grande", caption;
  font-size: 0.847em;
}

.panel-section-footer-button:hover {
  background-color: rgb(0 0 0 / 0.06);
}

.panel-section-footer-button:hover:active {
  background-color: rgb(0 0 0 / 0.1);
}

.panel-section-footer-button.default {
  background-color: #0996f8;
  box-shadow: 0 1px 0 #0670cc inset;
  color: #fff;
}

.panel-section-footer-button.default:hover {
  background-color: #0670cc;
  box-shadow: 0 1px 0 #005bab inset;
}

.panel-section-footer-button.default:hover:active {
  background-color: #005bab;
  box-shadow: 0 1px 0 #004480 inset;
}

.panel-section-footer-separator {
  background-color: rgb(0 0 0 / 0.1);
  width: 1px;
  z-index: 99;
}
```

```css hidden
/* Example specific – not part of chrome://browser/content/extension.css */
body {
  background: #fcfcfc;
  background-clip: padding-box;
  border: 1px solid rgb(24 26 27 / 0.2);
  box-shadow:
    0 3px 5px rgb(24 26 27 / 0.1),
    0 0 7px rgb(24 26 27 / 0.1);
  box-sizing: content-box;
  margin: 2em auto 0.5em;
  width: 384px;
}

html {
  min-height: 100vh;
}

html > body {
  margin: auto;
}

.icon-section-header {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj48Y2lyY2xlIGZpbGw9IiMzNjM5NTkiIGN4PSIxNSIgY3k9IjE1IiByPSIxNSIvPjwvc3ZnPg==");
}
```

#### Ergebnis

{{EmbedLiveSample("Example","640","360")}}

## Browser-Kompatibilität

{{Compat}}
