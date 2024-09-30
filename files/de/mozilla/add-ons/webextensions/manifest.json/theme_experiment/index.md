---
title: theme_experiment
slug: Mozilla/Add-ons/WebExtensions/manifest.json/theme_experiment
l10n:
  sourceCommit: 668b38a4f6cd96609b9a969fe4653b46aec4e712
---

{{AddonSidebar}}

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">Typ</th>
      <td><code>Object</code></td>
    </tr>
    <tr>
      <th scope="row">Erforderlich</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Manifest-Version</th>
      <td>2 oder höher</td>
    </tr>
    <tr>
      <th scope="row">Beispiel</th>
      <td>
        <pre class="brush: json">
"theme_experiment": {
  "stylesheet": "style.css",
  "colors": {
    "popup_affordance": "--arrowpanel-dimmed"
  },
  "images": {
    "theme_toolbar": "--toolbar-bgimage"
  },
  "properties": {
    "toolbar_image_alignment":
    "--toolbar-bgalignment"
  }
}</pre
        >
      </td>
    </tr>
  </tbody>
</table>

Dieser Schlüssel ermöglicht die Definition von experimentellen Eigenschaften des [`theme`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme)-Schlüssels für die Firefox-Oberfläche. Diese Experimente sind ein Vorläufer zur Vorschlag neuer Theme-Features zur Aufnahme in Firefox. Die Experimente werden durchgeführt durch:

- Erstellen eines Stylesheets, das Zuordnungen zwischen internen CSS-Selektoren für Firefox-UI-Elemente und beliebigen CSS-Variablen definiert. Die CSS-Variablen werden dann in den Objekten `colors`, `images` und `properties` zu neuen `theme`-Schlüsseleigenschaften zugeordnet.
- (ohne ein Stylesheet) unter Verwendung von `colors`, `images` und `properties`, um interne Firefox-CSS-Selektoren, wie `--arrowpanel-dimmed`, neuen `theme`-Schlüsseleigenschaften zuzuordnen. Diese Option beschränkt das Experimentieren auf UI-Komponenten, die mit einer integrierten CSS-Variable verbunden sind.

Um die CSS-Selektoren für Firefox-UI-Elemente oder interne Firefox-CSS-Variablen zu entdecken, verwenden Sie die [Browser Toolbox](https://firefox-source-docs.mozilla.org/devtools-user/browser_toolbox/index.html).

> [!NOTE]
> Dieser Schlüssel kann nur in den Kanälen Firefox Developer Edition und Firefox Nightly verwendet werden und erfordert, dass die Einstellung `extensions.experiments.enabled` aktiviert ist. In Firefox 73 und früher musste stattdessen `extensions.legacy.enabled` verwendet werden.

> [!WARNING]
> Diese Funktion ist experimentell und könnte Änderungen unterliegen.

## Syntax

Der theme_experiment-Schlüssel ist ein Objekt, das die folgenden Eigenschaften annimmt:

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Typ</th>
      <th scope="col">Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>stylesheet</code></td>
      <td><code>String</code></td>
      <td>
        <p>Optional</p>
        <p>
          Name eines Stylesheets, das die Zuordnung von CSS-Selektoren für
          Firefox-UI-Elemente zu CSS-Variablen bereitstellt.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>images</code></td>
      <td><code>Object</code></td>
      <td>
        <p>Optional</p>
        <p>
          Zuordnungen von CSS-Variablen (wie in Firefox definiert oder durch das im <code>stylesheet</code> definierte Stylesheet) zu <code>images</code>-Eigenschaftsnamen zur Verwendung im
          <code
            ><a
              href="/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme"
              >theme</a
            ></code
          >
          Schlüssel.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>colors</code></td>
      <td><code>Object</code></td>
      <td>
        <p>Optional</p>
        <p>
          Zuordnungen von CSS-Variablen (wie in Firefox definiert oder durch das im <code>stylesheet</code> definierte Stylesheet) zu <code>colors</code>-Eigenschaftsnamen zur Verwendung im
          <code
            ><a
              href="/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme"
              >theme</a
            ></code
          >
          Schlüssel.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>properties</code></td>
      <td><code>Object</code></td>
      <td>
        <p>Optional</p>
        <p>
          Zuordnungen von CSS-Variablen (wie in Firefox definiert oder durch das im <code>stylesheet</code> definierte Stylesheet) zu
          <code>properties</code>-Eigenschaftsnamen zur Verwendung im
          <code
            ><a
              href="/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme"
              >theme</a
            ></code
          >
          Schlüssel.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Beispiele

Dieses Beispiel verwendet ein Stylesheet namens `style.css`, um die Möglichkeit bereitzustellen, im [`theme`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme)-Schlüssel eine Farbe für die Schaltfläche "Neuladen" des Browsers festzulegen.

Das Stylesheet definiert:

```css
#reload-button {
  fill: var(--reload-button-color);
}
```

wo `#reload-button` der interne Firefox-CSS-Selektor für die Neuladen-Schaltfläche ist und `--reload-button-color` ein beliebiger Name ist.

In der `manifest.json` Datei wird `--reload-button-color` dann dem Namen zugeordnet, der in der `colors`-Eigenschaft von `theme` verwendet werden soll:

```json
"theme_experiment": {
  "stylesheet": "style.css",
  "colors": {
    "reload_button": "--reload-button-color"
  }
}
```

Das Argument `reload_button` wird auf die gleiche Weise wie jede andere `theme`-Eigenschaft verwendet:

```json
"theme": {
  "colors": {
    "reload_button": "orange"
  }
}
```

Dies hat den Effekt, dass das Neulade-Symbol orange wird.

![Ergebnis eines Theme-Experiments, das die Neuladen-Schaltfläche orange färbt.](theme_experiment.png)

Diese Eigenschaft kann auch in `browser.theme.update()` verwendet werden. `images` und `properties` funktionieren ähnlich wie `colors`.

## Browser-Kompatibilität

{{Compat}}
