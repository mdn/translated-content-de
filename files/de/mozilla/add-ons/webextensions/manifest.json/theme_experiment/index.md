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
      <th scope="row">Verpflichtend</th>
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

Dieser Schlüssel ermöglicht die Definition von experimentellen Eigenschaften des [`theme`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme)-Schlüssels für die Firefox-Oberfläche. Diese Experimente sind ein Vorläufer, um neue Theme-Funktionen für die Aufnahme in Firefox vorzuschlagen. Experimentiert wird durch:

- das Erstellen eines Stylesheets, das Zuordnungen zwischen internen CSS-Selektoren für Firefox-UI-Elemente und beliebigen CSS-Variablen definiert. Die CSS-Variablen werden dann in den Objekten `colors`, `images` und `properties` neuen Eigenschaften des `theme`-Schlüssels zugeordnet.
- (ohne ein Stylesheet) die Verwendung von `colors`, `images` und `properties`, um interne Firefox-CSS-Selektoren, wie `--arrowpanel-dimmed`, neuen Eigenschaften des `theme`-Schlüssels zuzuordnen. Diese Option beschränkt das Experimentieren auf UI-Komponenten, die mit einer eingebauten CSS-Variable verknüpft sind.

Um die CSS-Selektoren für Firefox-UI-Elemente oder interne Firefox-CSS-Variablen zu entdecken, verwenden Sie das [Browser-Entwicklertools](https://firefox-source-docs.mozilla.org/devtools-user/browser_toolbox/index.html).

> [!NOTE]
> Dieser Schlüssel steht nur in den Firefox Developer Edition und Firefox Nightly-Kanälen zur Verfügung und erfordert, dass die Einstellung `extensions.experiments.enabled` aktiviert ist. In Firefox 73 und früher musste stattdessen `extensions.legacy.enabled` verwendet werden.

> [!WARNING]
> Diese Funktion ist experimentell und könnte sich ändern.

## Syntax

Der Schlüssel theme_experiment ist ein Objekt, das die folgenden Eigenschaften hat:

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
          Name eines Stylesheets, das eine Zuordnung von CSS-Selektoren für Firefox-UI-Elemente zu CSS-Variablen bereitstellt.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>images</code></td>
      <td><code>Object</code></td>
      <td>
        <p>Optional</p>
        <p>
          Zuordnungen von CSS-Variablen (wie in Firefox oder im über <code>stylesheet</code> definierten Stylesheet definiert) zu <code>images</code>-Eigenschaftsnamen zur Verwendung im
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
          Zuordnungen von CSS-Variablen (wie in Firefox oder im über <code>stylesheet</code> definierten Stylesheet definiert) zu <code>colors</code>-Eigenschaftsnamen zur Verwendung im
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
          Zuordnungen von CSS-Variablen (wie in Firefox oder im über <code>stylesheet</code> definierten Stylesheet definiert) zu
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

Dieses Beispiel verwendet ein Stylesheet namens `style.css`, um die Möglichkeit zu bieten, eine Farbe für die Browser-Neuladetaste im [`theme`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme)-Schlüssel festzulegen.

Das Stylesheet definiert:

```css
#reload-button {
  fill: var(--reload-button-color);
}
```

wobei `#reload-button` der interne CSS-Selektor von Firefox für die Neuladetaste ist und `--reload-button-color` ein beliebiger Name ist.

In der `manifest.json`-Datei wird `--reload-button-color` dann dem Namen zugeordnet, der in der `colors`-Eigenschaft von `theme` verwendet werden soll:

```json
"theme_experiment": {
  "stylesheet": "style.css",
  "colors": {
    "reload_button": "--reload-button-color"
  }
}
```

Das Argument `reload_button` wird ebenso wie jede andere `theme`-Eigenschaft verwendet:

```json
"theme": {
  "colors": {
    "reload_button": "orange"
  }
}
```

Dies bewirkt, dass das Neuladesymbol orange wird.

![Ergebnis eines Theme-Experiments, bei dem die Neuladetaste orange gefärbt wurde.](theme_experiment.png)

Diese Eigenschaft kann auch in `browser.theme.update()` verwendet werden. `images` und `properties` funktionieren auf ähnliche Weise wie `colors`.

## Browser-Kompatibilität

{{Compat}}
