---
title: theme
slug: Mozilla/Add-ons/WebExtensions/manifest.json/theme
l10n:
  sourceCommit: c4c42a1573a65a808f085999a4d8d97199e142d1
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
"theme": {
  "images": {
    "theme_frame": "images/sun.jpg"
  },
  "colors": {
    "frame": "#CF723F",
    "tab_background_text": "#000"
  }
}</pre
        >
      </td>
    </tr>
  </tbody>
</table>

Verwenden Sie den `theme`-Schlüssel, um ein statisches Theme zu definieren, das auf Firefox angewendet werden soll.

> [!NOTE]
> Wenn Sie ein Theme mit einer Erweiterung einbinden möchten, beachten Sie die {{WebExtAPIRef("theme")}} API.

> [!NOTE]
> Seit Mai 2019 müssen Themes signiert sein, um installiert werden zu können ([Firefox Fehler 1545109](https://bugzil.la/1545109)). Weitere Einzelheiten finden Sie unter [Signing and distributing your add-on](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/#distributing-your-addon).

> [!NOTE]
> Eine neue Version von Firefox für Android, basierend auf GeckoView, wird derzeit entwickelt. Eine [Vorabversion](https://play.google.com/store/apps/details?id=org.mozilla.fenix) ist verfügbar. Die Vorabversion unterstützt keine Themes.

## Bildformate

Die folgenden Bildformate werden in allen Theme-Bild-Eigenschaften unterstützt:

- JPEG
- PNG
- APNG
- SVG (animiertes SVG wird ab Firefox 59 unterstützt)
- GIF (animiertes GIF wird nicht unterstützt)

## Syntax

Der `theme`-Schlüssel ist ein Objekt, das die folgenden Eigenschaften enthält:

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
      <td><code>images</code></td>
      <td><code>Object</code></td>
      <td>
        <p>Optional ab Firefox 60. Vor Firefox 60 verpflichtend.</p>
        <p>
          Ein JSON-Objekt, dessen Eigenschaften die Bilder darstellen, die in verschiedenen Teilen des Browsers angezeigt werden sollen. Siehe
          <code><a href="#images">images</a></code> für Details zu den Eigenschaften, die dieses Objekt enthalten kann.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>colors</code></td>
      <td><code>Object</code></td>
      <td>
        <p>Verpflichtend.</p>
        <p>
          Ein JSON-Objekt, dessen Eigenschaften die Farben der verschiedenen Teile des Browsers repräsentieren. Siehe <code><a href="#colors">colors</a></code> für Details zu den Eigenschaften, die dieses Objekt enthalten kann.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>properties</code></td>
      <td><code>Object</code></td>
      <td>
        <p>Optional</p>
        <p>
          Dieses Objekt besitzt Eigenschaften, die beeinflussen, wie die
          <code>"additional_backgrounds"</code>-Bilder angezeigt werden und Farbschemata angewendet werden. Siehe
          <code><a href="#properties">properties</a></code> für Details zu den Eigenschaften, die dieses Objekt enthalten kann.
        </p>
      </td>
    </tr>
  </tbody>
</table>

### images

Alle URLs sind relativ zur manifest.json-Datei und können keine externe URL referenzieren.

Bilder sollten 200 Pixel hoch sein, um sicherzustellen, dass sie immer den gesamten Header-Bereich vertikal ausfüllen.

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
      <td><code>theme_frame</code></td>
      <td><code>String</code></td>
      <td>
        <p>
          Die URL eines Vordergrundbildes, das dem Header-Bereich hinzugefügt und an der oberen rechten Ecke des Header-Bereichs verankert wird.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Chrome verankert das Bild an der oberen linken Seite des Headers. Wenn das Bild den Header-Bereich nicht ausfüllt, wird das Bild gekachelt.
          </p>
        </div>
        <p>
          Optional in Desktop-Firefox ab Version 60. Erforderlich in Firefox für Android.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>additional_backgrounds</code></td>
      <td><code>Array</code> von <code>String</code></td>
      <td>
        <div class="warning">
          <p>
            <strong>Warnung:</strong> Die Eigenschaft <code>additional_backgrounds</code> ist experimentell. Sie wird derzeit in den Release-Versionen von Firefox akzeptiert, aber ihr Verhalten kann sich ändern. Sie wird nicht in Firefox für Android unterstützt.
          </p>
        </div>
        <p>
          Ein Array von URLs für zusätzliche Hintergrundbilder, die dem Header-Bereich hinzugefügt und hinter dem
          <code>"theme_frame":</code>-Bild angezeigt werden. Diese Bilder schichten das erste Bild im Array oben und das letzte Bild im Array unten.
        </p>
        <p>Optional.</p>
        <p>
          Standardmäßig sind alle Bilder an der oberen rechten Ecke des Header-Bereichs verankert, aber ihre Ausrichtung und Wiederholungsverhalten kann durch Eigenschaften von <code>"properties":</code> gesteuert werden.
        </p>
      </td>
    </tr>
  </tbody>
</table>

### colors

Diese Eigenschaften definieren die Farben, die für verschiedene Teile des Browsers verwendet werden. Sie sind alle optional. Wie diese Eigenschaften die Firefox-Benutzeroberfläche beeinflussen, wird hier gezeigt:

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <td>
        <p>
          <img
            alt="Übersicht der Farbeigenschaften und wie sie auf die Firefox-Benutzeroberfläche angewendet werden"
            src="themes_components_annotations.png"
          />
        </p>
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Wenn ein Element von mehreren Farbeigenschaften beeinflusst wird, sind die Eigenschaften in der Reihenfolge der Priorität aufgelistet.

Alle diese Eigenschaften können entweder als String angegeben werden, der jeden gültigen [CSS Farb-String](/de/docs/Web/CSS/color_value) (einschließlich Hexadezimal) enthält, oder als RGB-Array, wie zum Beispiel `"tab_background_text": [107, 99, 23]`.

> **Hinweis:** [In Chrome können Farben nur als RGB-Arrays angegeben werden](#chrome-kompatibilität).
>
> In Firefox für Android können Farben angegeben werden als:
>
> - vollständige Hexadezimalnotation, das heißt nur #RRGGBB. _alpha_- und verkürzte Syntax wie #RGB\[A] werden nicht unterstützt.
> - [Funktionale Notation](/de/docs/Web/CSS/color_value) (RGB-Arrays) für Themes, die Firefox 68.2 oder später anvisieren.
>
> Farben für Themes von Firefox für Android können nicht mit Farbnamen angegeben werden.

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>bookmark_text</code></td>
      <td>
        <p>
          Die Farbe von Text und Symbolen in den Lesezeichen- und Suchleisten. Außerdem wird, wenn <code>tab_text</code> nicht definiert ist, die Farbe des Texts des aktiven Tabs gesetzt und wenn <code>icons</code> nicht definiert ist, die Farbe der Symbolleistensymbole. Wird als Chrome-kompatibler Alias für <code>toolbar_text</code> bereitgestellt.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass jede verwendete Farbe gut mit den in <code>frame</code> und <code>frame_inactive</code> oder <code>toolbar</code>, wenn Sie diese Eigenschaft verwenden, verwendeten Farben kontrastiert.
          </p>
          <p>
            Wenn <code>icons</code> nicht definiert ist, stellen Sie auch sicher, dass ein guter Kontrast zu <code>button_background_active</code> und <code>button_background_hover</code> besteht.
          </p>
        </div>
        <details open>
          <summary>Beispiel ansehen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
    "frame": "black",
    "tab_background_text": "white",
    "tab_text": "white",
    "toolbar": "black",
    "bookmark_text": "red"
  }
}</pre
          >
        </details>
        <p>
          <img
            alt="Browser Firefox ist schwarz. Der Tab des Browsers ist schwarz mit weißem Text. Die URL-Leiste und die Suchleiste auf der Seite sind weiß mit schwarzem Text, aber alle Symbole im Browser und die Suchleiste sind rot."
            src="theme-bookmark_text.png"
          />
        </p>
      </td>
    </tr>
    <tr>
      <td><code>button_background_active</code></td>
      <td>
        <p>Die Hintergrundfarbe der gedrückten Symbolleistenschaltflächen.</p>
        <details open>
          <summary>Beispiel ansehen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "frame": "black",
     "tab_background_text": "white",
     "button_background_active": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Browser Firefox ist schwarz. Die Tabs und die URL-Leiste des Browsers sind grau mit weißem Text. Das Symbol zum Anpassen der Symbolleiste in der URL-Leiste ist weiß mit rotem Hintergrund und gedrückt, ein Popup öffnet sich und zeigt eine kurze Liste von Dingen, die zur Symbolleiste hinzugefügt werden können, wie die Bibliothek des Browsers und die Seitenleisten." src="theme-button_background_active.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>button_background_hover</code></td>
      <td>
        <p>Die Hintergrundfarbe der Symbolleistenschaltflächen bei Hover.</p>
        <details open>
          <summary>Beispiel ansehen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "frame": "black",
     "tab_background_text": "white",
     "button_background_hover": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Browser Firefox ist schwarz. Die Tabs und die URL-Leiste des Browsers sind grau mit weißem Text. Das Symbol 'Einen Schritt zurückgehen' ist weiß mit einem roten Kreis im Hintergrund." src="theme-button_background_hover.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>icons</code></td>
      <td>
        <p>Die Farbe der Symbolleistensymbole, mit Ausnahme der in der Suchsymbolleiste.</p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut mit den in <code>frame</code>, <code>frame_inactive</code>, <code>button_background_active</code> und <code>button_background_hover</code> verwendeten Farben kontrastiert.
          </p>
        </div>
        <details open>
          <summary>Beispiel ansehen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "frame": "black",
     "tab_background_text": "white",
     "icons": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Browser Firefox ist schwarz. Die Tabs und die URL-Leiste des Browsers sind grau mit weißem Text. Die URL-Leiste und Öffnen einer neuen Tab-Symbole sind rot. Die roten Symbole kontrastieren gut mit der schwarzen Hintergrundfarbe des Kopfteils." src="theme-icons.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>icons_attention</code></td>
      <td>
        <p>
          Die Farbe der Symbolleistensymbole im Zustand der Aufmerksamkeit, wie das Stern-Lesezeichensymbol oder das fertige Download-Symbol.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut mit den in <code>frame</code>, <code>frame_inactive</code>, <code>button_background_active</code> und <code>button_background_hover</code> verwendeten Farben kontrastiert.
          </p>
        </div>
        <details open>
          <summary>Beispiel ansehen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "frame": "black",
     "tab_background_text": "white",
     "icons_attention": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Browser Firefox ist schwarz. Die Tabs und die URL-Leiste des Browsers sind grau mit weißem Text. Das Lesezeichen-diese-Seite-Symbol ist rot und gedrückt, ein offenes Popup namens 'Dieses Lesezeichen bearbeiten' wird angezeigt. Im Aufmerksamkeit-Zustand kontrastieren die Symbolleistensymbole gut mit dem schwarzen Hintergrund des Kopfteils." src="theme-icons_attention.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>frame</code></td>
      <td>
        <p>
          Die Farbe des Hintergrunds des Headers, angezeigt in dem Teil des Headers, der nicht abgedeckt oder durch die in <code>"theme_frame"</code> und <code>"additional_backgrounds"</code> angegebenen Bilder sichtbar ist.
        </p>
        <details open>
          <summary>Beispiel ansehen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "frame": "red",
     "tab_background_text": "white"
  }
}</pre
          >
        </details>
        <p><img alt="Browser Firefox ist rot mit weißem Text. Die Tabs des Browsers sind hellrot, ebenfalls mit weißem Text. Die URL-Leiste ist sehr hellrot mit schwarzem Text." src="theme-frame.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>frame_inactive</code></td>
      <td>
        <p>
          Die Farbe des Hintergrunds des Headers, wenn das Browserfenster inaktiv ist, angezeigt in dem Teil des Headers, der nicht abgedeckt oder durch die in <code>"theme_frame"</code> und <code>"additional_backgrounds"</code> angegebenen Bilder sichtbar ist.
        </p>
        <details open>
          <summary>Beispiel ansehen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "frame": "red",
     "frame_inactive": "gray",
     "tab_text": "white"
  }
}</pre
          >
        </details>
        <p>
          <img
            alt="Browser Firefox ist grau. Die Tabs und die URL-Leiste des Browsers sind hellgrau. Der Tab-Text ist weiß und die URL-Leisten-Symbole sind dunkler grau."
            src="theme-frame_inactive.png"
          />
        </p>
      </td>
    </tr>
    <tr>
      <td><code>ntp_background</code></td>
      <td>
        <p>Die Hintergrundfarbe der neuen Registerkarte-Seite.</p>
        <details open>
          <summary>Beispiel ansehen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "ntp_background": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Firefox zeigt eine neue Registerkarte-Seite. Der Hintergrund der Seite ist rot." src="ntp-background.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>ntp_card_background</code></td>
      <td>
        <p>Die Hintergrundfarbe der neuen Registerkarte-Karte.</p>
        <details open>
          <summary>Beispiel ansehen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "ntp_card_background": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Firefox zeigt eine neue Registerkarte-Seite. Auf der Seite ist der Hintergrund der Suchleiste und der Verknüpfungsschaltflächen rot." src="ntp-card-background.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>ntp_text</code></td>
      <td>
        <p>Die Textfarbe der neuen Registerkarte-Seite.</p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut mit den in <code>ntp_background</code> und <code>ntp_card_background</code> verwendeten Farben kontrastiert.
          </p>
        </div>
        <details open>
          <summary>Beispiel ansehen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "ntp_text": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Firefox zeigt eine neue Registerkarte-Seite. Auf der Seite ist der Text in Rot." src="ntp-text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>popup</code></td>
      <td>
        <p>
          Die Hintergrundfarbe von Popups (wie z.B. das Dropdown der URL-Leiste und die Pfeil-Panels).
        </p>
        <details open>
          <summary>Beispiel ansehen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "frame": "black",
     "tab_background_text": "white",
     "popup": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Browser Firefox ist schwarz. Die Tabs und die URL-Leiste des Browsers sind hellgrau mit Symbolen und Text in weiß. Das Lesezeichen-diese-Seite-Symbol ist blau und gedrückt, ein offenes Popup mit dem Namen 'Dieses Lesezeichen bearbeiten' wird angezeigt mit einem roten Hintergrund. Die Hintergrundfarbe des Popups ist rot." src="theme-popup.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>popup_border</code></td>
      <td>
        <p>Die Rahmenfarbe von Popups.</p>
        <details open>
          <summary>Beispiel ansehen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "frame": "black",
     "tab_background_text": "white",
     "popup": "black",
     "popup_text": "white",
     "popup_border": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Browser Firefox ist schwarz. Die Tabs und die URL-Leiste des Browsers sind hellgrau mit Symbolen und Text in weiß. Das Lesezeichen-diese-Seite-Symbol ist blau und gedrückt, ein offenes Popup mit dem Namen 'Dieses Lesezeichen bearbeiten' wird angezeigt mit einem roten Rahmen und schwarzem Hintergrund. Der Rahmen des Popups ist rot." src="theme-popup_border.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>popup_highlight</code></td>
      <td>
        <p>
          Die Hintergrundfarbe von Elementen, die mit der Tastatur innerhalb von Popups hervorgehoben werden (wie das ausgewählte URL-Leisten-Dropdown-Element).
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Es wird empfohlen, <code>popup_highlight_text</code> zu definieren, um die standardmäßige Textfarbe des Browsers auf verschiedenen Plattformen zu überschreiben.
          </p>
        </div>
        <details open>
          <summary>Beispiel ansehen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "frame": "black",
     "tab_background_text": "white",
     "popup_highlight": "red",
     "popup_highlight_text": "white"
  }
}</pre
          >
        </details>
        <p><img alt="Screenshot von Firefox ist schwarz. Die Tabs und die URL-Leiste des Browsers sind hellgrau mit Symbolen und Text in weiß. Ein Suchergebnis-Popup wird angezeigt mit einem hervorgehobenen Element, dessen Hintergrund rot ist. Die Hintergrundfarbe des hervorgehobenen Elements innerhalb des Popups ist rot." src="theme-popup_highlight.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>popup_highlight_text</code></td>
      <td>
        <p>Die Textfarbe von hervorgehobenen Elementen innerhalb von Popups.</p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut mit denen in <code>popup_highlight</code> verwendeten Farben kontrastiert.
          </p>
        </div>
        <details open>
          <summary>Beispiel ansehen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "frame": "black",
     "tab_background_text": "white",
     "popup_highlight": "black",
     "popup_highlight_text": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Browser Firefox ist schwarz. Die Tabs und die URL-Leiste des Browsers sind hellgrau mit Symbolen und Text in weiß. Ein Suchergebnis-Popup wird angezeigt mit einem hervorgehobenen Element, dessen Text in rot mit einem schwarzen Hintergrund ist. Die Textfarbe des hervorgehobenen Elements kontrastiert gut mit der schwarzen Hintergrundfarbe dieses Elements." src="theme-popup_highlight_text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>popup_text</code></td>
      <td>
        <p>Die Textfarbe von Popups.</p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut mit denen in <code>popup</code> verwendeten Farben kontrastiert.
          </p>
        </div>
        <details open>
          <summary>Beispiel ansehen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "frame": "black",
     "tab_background_text": "white",
     "popup": "black",
     "popup_text": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Browser Firefox ist schwarz. Die Tabs und die URL-Leiste des Browsers sind hellgrau mit Symbolen und Text in weiß. Ein Suchergebnis-Popup wird angezeigt mit Elementtexten in rot. Die Textfarbe kontrastiert gut mit der schwarzen Hintergrundfarbe des Popups." src="popup_text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>sidebar</code></td>
      <td>
        <p>Die Hintergrundfarbe der Seitenleiste.</p>
        <details open>
          <summary>Beispiel ansehen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "sidebar": "red",
     "sidebar_highlight": "white",
     "sidebar_highlight_text": "green",
     "sidebar_text": "white"
  }
}</pre
          >
        </details>
        <p><img alt="Ein Nahaufnahme-Screenshot eines Browserfensters mit geöffneter Seitenleiste. Die Hintergrundfarbe der Seitenleiste ist rot." src="sidebar-colors.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>sidebar_border</code></td>
      <td>
        <p>Die Farbe der Rahmen und Trennlinien der Browser-Seitenleiste</p>
        <details open>
          <summary>Beispiel ansehen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "sidebar_border": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Ein Nahaufnahme der Firefox-Browser-Lesezeichen-Seitenleiste mit einem roten horizontalen Separator zwischen dem Seitenleistentitel und dem Seitenleistenmenü. Die Farbe der Rahmen und Trennlinien der Seitenleiste ist rot." src="sidebar-border.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>sidebar_highlight</code></td>
      <td>
        <p>Die Hintergrundfarbe hervorgehobener Zeilen in integrierten Seitenleisten</p>
        <details open>
          <summary>Beispiel ansehen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "sidebar_highlight": "red",
     "sidebar_highlight_text": "white"
  }
}</pre
          >
        </details>
        <p><img alt="Ein Nahaufnahme der Firefox-Browser-Lesezeichen-Seitenleiste mit einem hervorgehobenen Element. Die Hintergrundfarbe einer hervorgehobenen Zeile in der Seitenleiste ist rot mit weißem Text." src="sidebar-highlight.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>sidebar_highlight_text</code></td>
      <td>
        <p>Die Textfarbe hervorgehobener Zeilen in Seitenleisten.</p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut mit denen in <code>sidebar_highlight</code> verwendeten Farben kontrastiert.
          </p>
        </div>
        <details open>
          <summary>Beispiel ansehen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
    "sidebar_highlight": "pink",
    "sidebar_highlight_text": "red",
  }
}</pre
          >
        </details>
        <p><img alt="Ein Nahaufnahme der Firefox-Browser-Lesezeichen-Seitenleiste mit einem hervorgehobenen Element. Die Farbe des Textes einer hervorgehobenen Zeile in der Seitenleiste ist rot. Die Textfarbe kontrastiert gut mit der pinkfarbenen Hintergrundfarbe der hervorgehobenen Zeile." src="sidebar-highlight-text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>sidebar_text</code></td>
      <td>
        <p>Die Textfarbe der Seitenleisten.</p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut mit denen in <code>sidebar</code> verwendeten Farben kontrastiert.
          </p>
        </div>
        <details open>
          <summary>Beispiel ansehen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "sidebar": "red",
     "sidebar_highlight": "white",
     "sidebar_highlight_text": "green",
     "sidebar_text": "white"
  }
}</pre
          >
        </details>
        <p><img alt="Ein Nahaufnahme-Screenshot eines Browserfensters mit geöffneter Seitenleiste. Die Farbe des Textes innerhalb der Seitenleiste ist weiß. Die Textfarbe kontrastiert gut mit dem roten Hintergrund der Seitenleiste." src="sidebar-colors.png" /></p>
      </td>
    </tr>
    <tr>
      <td>
        <code>tab_background_separator</code> {{Deprecated_Inline}}
      </td>
      <td>
        <div class="notecard warning">
          <p>
            <strong>Warnung:</strong> <code>tab_background_separator</code> wird ab Firefox 89 nicht mehr unterstützt.
          </p>
        </div>
        <p>Die Farbe des vertikalen Separators der Hintergrund-Tabs.</p>
        <details open>
          <summary>Beispiel ansehen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "frame": "black",
     "tab_background_text": "white",
     "tab_background_separator": "red"
  }
}</pre
          >
        </details>
        <p>
          <img
            alt="Ein Nahaufnahme von Browser-Tabs zur Hervorhebung des Separators."
            src="theme-tab-background-separator.png"
          />
        </p>
      </td>
    </tr>
    <tr>
      <td><code>tab_background_text</code></td>
      <td>
        <p>
          Die Farbe des Textes, der in den inaktiven Seitentabs angezeigt wird. Wenn <code>tab_text</code> oder <code>bookmark_text</code> nicht angegeben ist, wird auf den aktiven Tab-Text angewendet.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut mit denen in <code>tab_selected</code> oder <code>frame</code> und <code>frame_inactive</code> verwendeten Farben kontrastiert.
          </p>
        </div>
        <details open>
          <summary>Beispiel ansehen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
    "frame": "black",
    "toolbar": "white",
    "tab_background_text": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Ein Screenshot eines Browserfensters mit einem offenen Tab. Der Browser ist schwarz. Die Tabs und die URL-Leiste des Browsers sind weiß mit roten Symbolen und rotem Text. Die Farbe des Textes im geöffneten Tab ist rot. Die Textfarbe kontrastiert gut mit der schwarzen Hintergrundfarbe des Tabs." src="theme-tab_background_text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>tab_line</code></td>
      <td>
        <p>Die Farbe der ausgewählten Tab-Linie.</p>
        <details open>
          <summary>Beispiel ansehen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "frame": "black",
     "tab_background_text": "white",
     "tab_line": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Browser Firefox ist schwarz. Die Tabs und die URL-Leiste des Browsers sind dunkelgrau mit hellgrauen Symbolen und weißem Text. Der ausgewählte Tab hat eine rote Umrandung." src="theme-tab_line.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>tab_loading</code></td>
      <td>
        <p>Die Farbe des Ladeindikators des Tabs und des Tab-Ladebursts.</p>
        <details open>
          <summary>Beispiel ansehen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "frame": "black",
     "tab_background_text": "white",
     "tab_loading": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Ein Screenshot eines Browserfensters mit einem offenen Tab. Der Browser ist schwarz. Die Tabs und die URL-Leiste des Browsers sind dunkelgrau mit Symbolen und Text in weiß. Innerhalb des ausgewählten Tabs ist ein animierter Ladeindikator rot." src="theme-tab_loading.gif" /></p>
      </td>
    </tr>
    <tr>
      <td><code>tab_selected</code></td>
      <td>
        <p>
          Die Hintergrundfarbe des ausgewählten Tabs. Wenn nicht in Gebrauch, wird die ausgewählte Tab-Farbe von <code>frame</code> und <code>frame_inactive</code> gesetzt.
        </p>
        <details open>
          <summary>Beispiel ansehen</summary>
          <pre class="brush: json">
"theme": {
  "images": {
  "theme_frame": "weta.png"
},
  "colors": {
     "frame": "black",
     "tab_background_text": "white",
     "tab_selected": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Ein Screenshot eines Browserfensters mit einem offenen Tab. Der Browser ist schwarz. Die Tabs und die URL-Leiste des Browsers sind dunkelgrau mit Symbolen und Text in weiß. Der ausgewählte Tab hat roten Hintergrund und weißen Text." src="theme-tab_selected.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>tab_text</code></td>
      <td>
        <p>
          Ab Firefox 59 repräsentiert es die Textfarbe des ausgewählten Tabs. Wenn <code>tab_line</code> nicht angegeben ist, definiert es auch die Farbe der ausgewählten Tab-Linie.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut mit denen in <code>tab_selected</code> oder <code>frame</code> und <code>frame_inactive</code> verwendeten Farben kontrastiert.
          </p>
        </div>
        <details open>
          <summary>Beispiel ansehen</summary>
          <pre class="brush: json">
"theme": {
  "images": {
  "theme_frame": "weta.png"
},
  "colors": {
     "frame": "black",
     "tab_background_text": "white",
     "tab_selected": "white",
     "tab_text": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Browser Firefox hat ein Bild eines Insektthemas. Die URL-Leiste ist hellgrau mit weißen Symbolen. Der ausgewählte Tab-Text ist rot mit weißem Hintergrund." src="theme-tab_text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar</code></td>
      <td>
        <p>
          Die Hintergrundfarbe für die Navigationsleiste, die Lesezeichenleiste und den ausgewählten Tab.
        </p>
        <p>Dies setzt auch die Hintergrundfarbe der "Find"-Leiste.</p>
        <details open>
          <summary>Beispiel ansehen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
    "frame": "black",
    "toolbar": "red",
    "tab_background_text": "white"
  }
}</pre
          >
        </details>
        <p><img alt="Browser Firefox ist schwarz. Der Tab, die Seite-find-in-Thema-Leiste und die URL-Leiste des Browsers sind rot mit weißem Text und Symbolen, mit Ausnahme der Seite-find-in-Leiste, wo der Text und das Symbol schwarz sind." src="toolbar.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_bottom_separator</code></td>
      <td>
        <p>
          Die Farbe der Linie, die den unteren Bereich der Symbolleiste vom darunterliegenden Bereich trennt.
        </p>
        <details open>
          <summary>Beispiel ansehen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
    "frame": "black",
    "tab_background_text": "white",
    "toolbar_bottom_separator": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Browser Firefox ist schwarz. Die Tabs und die URL-Leiste des Browsers sind hellgrau mit weißem Text und Symbolen. Eine horizontale rote Linie trennt den unteren Bereich der Symbolleiste vom Beginn der Anzeige der Webseite." src="theme-toolbar_bottom_separator.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field</code></td>
      <td>
        <p>
          Die Hintergrundfarbe für Felder in der Symbolleiste, wie die URL-Leiste.
        </p>
        <p>
          Dies setzt auch die Hintergrundfarbe des
          <strong>Finden in Seite</strong>-Feldes.
        </p>
        <details open>
          <summary>Beispiel ansehen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
    "frame": "black",
    "tab_background_text": "white",
    "toolbar_field": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Browser Firefox ist schwarz. Der Tab, die Seite-find-in-Thema-Leiste und die URL-Leiste des Browsers sind hellgrau mit weißem Text und Symbolen. Die Hintergrundfarbe der URL-Leiste ist rot. Die Seite-find-in-Thema-Leiste ist weiß mit schwarzem Text. Das Seite-find-in-Feld ist rot mit schwarzem Text." src="toolbar-field.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_border</code></td>
      <td>
        <p>Die Rahmenfarbe für Felder in der Symbolleiste.</p>
        <p>
          Dies setzt auch die Rahmenfarbe des
          <strong>Finden in Seite</strong>-Feldes.
        </p>
        <details open>
          <summary>Beispiel ansehen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
    "frame": "black",
    "toolbar": "black",
    "tab_background_text": "white",
    "toolbar_field": "black",
    "toolbar_field_text": "white",
    "toolbar_field_border": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Browser Firefox ist schwarz. Der Tab, die Seite-find-in-Thema-Leiste und die URL-Leiste des Browsers sind schwarz mit weißem Text und Symbolen. Die URL-Leiste und das Seite-find-in-Feld sind in rot umrandet." src="toolbar-field-border.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_border_focus</code></td>
      <td>
        <p>Die fokussierte Rahmenfarbe für Felder in der Symbolleiste.</p>
        <details open>
          <summary>Beispiel ansehen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
    "frame": "black",
    "toolbar": "black",
    "tab_background_text": "white",
    "toolbar_field": "black",
    "toolbar_field_text": "white",
    "toolbar_field_border_focus": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Browser Firefox ist schwarz. Der Tab und die URL-Leiste des Browsers sind schwarz mit weißem Text und Symbolen. Das URL-Leisten-Feld ist fokussiert und in rot umrandet." src="theme-toolbar_field_border_focus.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_focus</code></td>
      <td>
        <p>
          Die fokussierte Hintergrundfarbe für Felder in der Symbolleiste, wie die URL-Leiste.
        </p>
        <details open>
          <summary>Beispiel ansehen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
    "frame": "black",
    "toolbar": "black",
    "tab_background_text": "white",
    "toolbar_field": "black",
    "toolbar_field_text": "white",
    "toolbar_field_focus": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Browser Firefox ist schwarz. Der Tab, die Seite-find-in-Thema-Leiste und die URL-Leiste des Browsers sind schwarz mit weißem Text und Symbolen. Die Hintergrundfarbe der fokussierten URL-Leiste ist rot und der Text ist weiß." src="theme-toolbar_field_focus.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_highlight</code></td>
      <td>
        Die Hintergrundfarbe, die verwendet wird, um die aktuelle Textauswahl in der URL-Leiste anzuzeigen (und der Suchleiste, wenn sie als separater Kasten konfiguriert ist).
        <details open>
          <summary>Beispiel ansehen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
    "toolbar_field": "rgb(255 255 255 / 91%)",
    "toolbar_field_text": "rgb(0 100 0)",
    "toolbar_field_highlight": "rgb(180 240 180 / 90%)",
    "toolbar_field_highlight_text": "rgb(0 80 0)"
  }
}</pre
          >
        </details>
        <p>
          <img
            alt="Browser Firefox ist weiß. Die Tabs und die URL-Leiste des Browsers sind weiß mit Text und Symbolen in schwarz. Das URL-Leisten-Feld ist fokussiert und in blau umrahmt, und der Text in der URL-Leiste ist ausgewählt."
            src="toolbar_field_highlight.png"
          />
        </p>
        <p>
          Hier gibt das <code>toolbar_field_highlight</code>-Feld an, dass die Hervorhebungsfarbe ein helles Grün ist, während der Text mit <code>toolbar_field_highlight_text</code> auf ein dunkles bis mittleres Grün gesetzt ist.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_highlight_text</code></td>
      <td>
        <p>
          Die Farbe, die verwendet wird, um Text zu zeichnen, der derzeit in der URL-Leiste (und der Suchleiste, falls sie als separater Kasten konfiguriert ist) ausgewählt ist.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut mit denen in <code>toolbar_field_highlight</code> verwendeten Farben kontrastiert.
          </p>
        </div>
        <details open>
          <summary>Beispiel ansehen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
    "toolbar_field": "rgb(255 255 255 / 91%)",
    "toolbar_field_text": "rgb(0 100 0)",
    "toolbar_field_highlight": "rgb(180 240 180 / 90%)",
    "toolbar_field_highlight_text": "rgb(0 80 0)"
  }
}</pre
          >
        </details>
        <p>
          <img
            alt="Browser Firefox ist weiß. Die Tabs und die URL-Leiste des Browsers sind weiß mit Text und Symbolen in schwarz. Das URL-Leisten-Feld ist fokussiert und in blau umrahmt, und der Text in der URL-Leiste ist ausgewählt."
            src="toolbar_field_highlight.png"
          />
        </p>
        <p>
          Hier wird das <code>toolbar_field_highlight_text</code>-Feld verwendet, um die Textfarbe auf ein mittel- bis dunkelgrün zu setzen, während die Hervorhebungsfarbe ein helles Grün ist.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_separator</code> {{Deprecated_Inline}}</td>
      <td>
        <div class="notecard warning">
          <p>
            <strong>Warnung:</strong> <code>toolbar_field_separator</code> wird ab Firefox 89 nicht mehr unterstützt.
          </p>
        </div>
        <p>
          Die Farbe der Separatoren innerhalb der URL-Leiste. In Firefox 58 wurde dies als <code>toolbar_vertical_separator</code> implementiert.
        </p>
        <details open>
          <summary>Beispiel ansehen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
    "frame": "black",
    "toolbar": "black",
    "tab_background_text": "white",
    "toolbar_field_separator": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Ein Screenshot eines Browserfensters mit einem offenen Tab. Browser Firefox ist schwarz. Die Tabs und die URL-Leiste des Browsers sind schwarz mit Text und Symbolen in weiß. Innerhalb des weißen URL-Leisten-Feldes, nach dem Leser-Modus-Symbol, befindet sich eine rote vertikale Linie, die die restlichen URL-Leisten-Symbole trennt. Die Farbe der vertikalen Trennlinie innerhalb der URL-Leiste ist rot." src="theme-toolbar_field_separator.png" /></p>
        <p>
          In diesem Screenshot ist <code>"toolbar_vertical_separator"</code> die rote vertikale Linie in der URL-Leiste, die das Leser-Modus-Symbol von den anderen Symbolen trennt.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_text</code></td>
      <td>
        <p>
          Die Farbe des Textes in Feldern der Symbolleiste, wie der URL-Leiste. Dies setzt auch die Farbe des Textes im
          <strong>Finden in Seite</strong>-Feld.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut mit denen in <code>toolbar_field</code> verwendeten Farben kontrastiert.
          </p>
        </div>
        <details open>
          <summary>Beispiel ansehen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
    "frame": "black",
    "toolbar": "black",
    "tab_background_text": "white",
    "toolbar_field": "black",
    "toolbar_field_text": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Ein Screenshot eines Browserfensters mit einem offenen Tab. Der Browser ist schwarz. Die Tabs und die URL-Leiste des Browsers sind schwarz mit weißem Text und Symbolen. Der Text in der URL-Leiste ist rot. Die Symbole und das Seite-find-in-Feld haben roten Text mit schwarzem Hintergrund." src="toolbar-field-text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_text_focus</code></td>
      <td>
        <p>
          Die Farbe des Textes in fokussierten Feldern der Symbolleiste, wie der URL-Leiste.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut mit denen in <code>toolbar_field_focus</code> verwendeten Farben kontrastiert.
          </p>
        </div>
        <details open>
          <summary>Beispiel ansehen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
    "frame": "black",
    "toolbar": "black",
    "tab_background_text": "white",
    "toolbar_field": "black",
    "toolbar_field_text": "white",
    "toolbar_field_text_focus": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Ein Screenshot eines Browserfensters mit zwei offenen Tabs. Der Browser ist schwarz. Die Tabs und die URL-Leiste des Browsers sind schwarz mit Text und Symbolen in weiß. Die URL-Leiste hat Fokus; der Text und die Symbole in der Leiste sind rot mit schwarzem Hintergrund." src="theme-toolbar_field_text_focus.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_text</code></td>
      <td>
        <p>
          Die Farbe des Symbolleistentextes. Dies setzt auch die Farbe des Textes in der "Find"-Leiste.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Für die Kompatibilität mit Chrome verwenden Sie den Alias
            <code>bookmark_text</code>.
          </p>
        </div>
        <details open>
          <summary>Beispiel ansehen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
    "frame": "black",
    "tab_background_text": "white",
    "toolbar": "black",
    "toolbar_text": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Ein Screenshot eines Browserfensters mit einem offenen Tab. Der Browser ist schwarz. Der Tab, die Seite-find-in-Thema-Leiste und die URL-Leiste des Browsers sind schwarz mit rotem Text und Symbolen. Der Text innerhalb des aktiven Tabs, der Navigationsleiste und der Suchleiste ist rot." src="toolbar-text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_top_separator</code></td>
      <td>
        <p>
          Die Farbe der Linie, die die Oberseite der Symbolleiste vom darüberliegenden Bereich trennt.
        </p>
        <details open>
          <summary>Beispiel ansehen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
    "frame": "black",
    "tab_background_text": "white",
    "toolbar": "black",
    "toolbar_top_separator": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Ein Screenshot eines Browserfensters mit einem offenen Tab. Der Browser ist schwarz. Der Tab und die URL-Leiste des Browsers sind schwarz mit weißem Text und Symbolen. Eine rote Linie trennt die Oberseite der URL-Leiste vom Browser." src="theme-toolbar_top_separator.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_vertical_separator</code></td>
      <td>
        <p>
          Die Farbe des Separators in der Lesezeichen-Symbolleiste. In Firefox 58 entspricht es der Farbe der Separatoren innerhalb der URL-Leiste.
        </p>
        <details open>
          <summary>Beispiel ansehen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
    "frame": "black",
    "tab_background_text": "white",
    "toolbar": "black",
    "toolbar_vertical_separator": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Ein Screenshot eines Browserfensters mit einem offenen Tab. Der Browser ist schwarz. Die Tabs und die URL-Leiste des Browsers sind schwarz mit Text und Symbolen in weiß. Die Farbe der vertikalen Linie, die die Lesezeichen-Symbolleiste vom Inhalt zur rechten Seite trennt, ist rot." src="theme-toolbar_vertical_separator.png" /></p>
      </td>
    </tr>
  </tbody>
</table>

#### Aliase

Zusätzlich akzeptiert dieser Schlüssel verschiedene Eigenschaften, die Aliase einer der obigen Eigenschaften sind. Diese werden für die Kompatibilität mit Chrome bereitgestellt. Wenn ein Alias angegeben ist und die Version ohne Alias ebenfalls angegeben ist, wird der Wert von der Version ohne Alias übernommen.

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Alias für</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>bookmark_text</code></td>
      <td><code>toolbar_text</code></td>
    </tr>
  </tbody>
</table>

### properties

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
      <td><code>additional_backgrounds_alignment</code></td>
      <td>
        <p><code>Array</code> von <code>String</code></p>
      </td>
      <td>
        <p>Optional</p>
        <p>
          Ein Array von Enumeration-Werten, die die Ausrichtung des entsprechenden <code>"additional_backgrounds":</code>-Array-Elements definieren.<br />Die Ausrichtungsoptionen umfassen:
        </p>
        <ul>
          <li><code>"bottom"</code></li>
          <li><code>"center"</code></li>
          <li><code>"left"</code></li>
          <li><code>"right"</code></li>
          <li><code>"top"</code></li>
          <li><code>"center bottom"</code></li>
          <li><code>"center center"</code></li>
          <li><code>"center top"</code></li>
          <li><code>"left bottom"</code></li>
          <li><code>"left center"</code></li>
          <li><code>"left top"</code></li>
          <li><code>"right bottom"</code></li>
          <li><code>"right center"</code></li>
          <li><code>"right top"</code>.</li>
        </ul>
        <p>Wenn nicht angegeben, ist das Standardwert <code>"right top"</code>.</p>
      </td>
    </tr>
    <tr>
      <td><code>additional_backgrounds_tiling</code></td>
      <td>
        <p><code>Array</code> von <code>String</code></p>
      </td>
      <td>
        <p>Optional</p>
        <p>
          Ein Array von Enumeration-Werten, die definieren, wie das entsprechende <code>"additional_backgrounds":</code>-Array-Element wiederholt wird. Die Optionen umfassen:
        </p>
        <ul>
          <li><code>"no-repeat"</code></li>
          <li><code>"repeat"</code></li>
          <li><code>"repeat-x"</code></li>
          <li><code>"repeat-y"</code></li>
        </ul>
        <p>Wenn nicht angegeben, ist das Standardwert <code>"no-repeat"</code>.</p>
      </td>
    </tr>
    <tr>
      <td><code>color_scheme</code></td>
      <td>
        <p><code>String</code></p>
      </td>
      <td>
        <p>Optional</p>
        <p>
          Bestimmt, welches Farbschema auf das Chrome (z.B. Kontextmenüs) und den Inhalt (z.B. integrierte Seiten und das bevorzugte Farbschema für Webseiten) angewendet wird. Optionen umfassen:
        </p>
        <ul>
          <li><code>"auto"</code> – ein helles oder dunkles Schema, das automatisch basierend auf dem Theme gewählt wird.</li>
          <li><code>"light"</code> – ein helles Schema.</li>
          <li><code>"dark"</code> – ein dunkles Schema.</li>
          <li><code>"system"</code> – verwendet das System-Schema.</li>
        </ul>
        <p>Wenn nicht angegeben, ist das Standardwert <code>"auto"</code>.</p>
      </td>
    </tr>
    <tr>
      <td><code>content_color_scheme</code></td>
      <td>
        <p><code>String</code></p>
      </td>
      <td>
        <p>Optional</p>
        <p>
          Bestimmt, welches Farbschema auf den Inhalt (z.B. integrierte Seiten und bevorzugtes Farbschema für Webseiten) angewendet wird. Überschreibt <code>color_scheme</code>. Optionen umfassen:
        </p>
        <ul>
          <li><code>"auto"</code> – ein helles oder dunkles Schema, das automatisch basierend auf dem Theme gewählt wird.</li>
          <li><code>"light"</code> – ein helles Schema.</li>
          <li><code>"dark"</code> – ein dunkles Schema.</li>
          <li><code>"system"</code> – das System-Schema.</li>
        </ul>
        <p>Wenn nicht angegeben, ist das Standardwert <code>"auto"</code>.</p>
      </td>
    </tr>
  </tbody>
</table>

## Beispiele

Ein grundlegendes Theme muss ein Bild definieren, das dem Header hinzugefügt wird, die Akzentfarbe, die im Header verwendet wird, und die Farbe des Texts im Header:

```json
 "theme": {
   "images": {
     "theme_frame": "images/sun.jpg"
   },
   "colors": {
     "frame": "#CF723F",
     "tab_background_text": "#000"
   }
 }
```

Mehrere Bilder können verwendet werden, um den Header zu füllen. Vor Firefox Version 60 verwenden Sie ein leeres oder transparentes Header-Bild, um die Platzierung jedes zusätzlichen Bildes zu steuern:

```json
 "theme": {
   "images": {
     "additional_backgrounds": [ "images/left.png", "images/middle.png", "images/right.png"]
   },
   "properties": {
     "additional_backgrounds_alignment": [ "left top", "top", "right top"]
   },
   "colors": {
     "frame": "blue",
     "tab_background_text": "#ffffff"
   }
 }
```

Sie können den Header auch mit einem wiederholten Bild oder Bildern füllen, in diesem Fall mit einem einzelnen Bild, das in der Mitte, oben im Header verankert ist und über den Rest des Headers wiederholt wird:

```json
 "theme": {
   "images": {
     "additional_backgrounds": [ "images/logo.png"]
   },
   "properties": {
     "additional_backgrounds_alignment": [ "top" ],
     "additional_backgrounds_tiling": [ "repeat"  ]
   },
   "colors": {
     "frame": "green",
     "tab_background_text": "#000"
   }
 }
```

Das folgende Beispiel verwendet die meisten der verschiedenen Werte für `theme.colors`:

```json
  "theme": {
    "images": {
      "theme_frame": "weta.png"
    },

    "colors": {
       "frame": "darkgreen",
       "tab_background_text": "white",
       "toolbar": "blue",
       "bookmark_text": "cyan",
       "toolbar_field": "orange",
       "toolbar_field_border": "white",
       "toolbar_field_text": "green",
       "toolbar_top_separator": "red",
       "toolbar_bottom_separator": "white",
       "toolbar_vertical_separator": "white"
    }
  }
```

Es wird Ihnen einen Browser geben, der so aussieht:

![Ein Browserfenster mit zwei offenen Tabs und dunkelgrüner Hintergrundfarbe im Header-Bereich. Der inaktive Tab hat eine weiße Textfarbe. Der aktive Tab und die Symbolleiste haben eine blaue Hintergrundfarbe mit cyanfarbigem Text. Die URL-Leiste hat einen orangefarbenen Hintergrund mit weißen Rändern, eine grüne Textfarbe und eine weiße vertikale Linientrennung. Eine rote Linie wird verwendet, um die Tabs oben zu trennen, und eine weiße Linie, um die Tabs vom darunterliegenden Inhalt zu trennen.](theme.png)

In diesem Screenshot ist `"toolbar_vertical_separator"` die weiße vertikale Linie in der URL-Leiste, die das Reader-Modus-Symbol von den anderen Symbolen trennt.

## Browser-Kompatibilität

{{Compat}}

### Chrome-Kompatibilität

In Chrome:

- `colors/toolbar_text` wird nicht verwendet, verwenden Sie stattdessen `colors/bookmark_text`.
- `images/theme_frame` verankert das Bild an der oberen linken Seite des Headers. Wenn das Bild den Header-Bereich nicht ausfüllt, wird das Bild gekachelt.
- alle Farben müssen als ein Array von RGB-Werten angegeben werden, so:

  ```json
  "theme": {
    "colors": {
       "frame": [255, 0, 0],
       "tab_background_text": [0, 255, 0],
       "bookmark_text": [0, 0, 255]
    }
  }
  ```

Ab Firefox 59 werden sowohl die Array-Form als auch die CSS-Farbenform für alle Eigenschaften akzeptiert. Vorher erforderten `colors/frame` und `colors/tab_background_text` die Array-Form, während andere Eigenschaften die CSS-Farbenform erforderten.
