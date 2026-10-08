---
title: theme
slug: Mozilla/Add-ons/WebExtensions/manifest.json/theme
l10n:
  sourceCommit: 977386fc14a76dec21374aef1e0571900b28dab4
---

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
"theme": {
  "images": {
    "theme_frame": "images/sun.jpg"
  },
  "colors": {
    "frame": "#CF723F",
    "tab_background_text": "black"
  }
}</pre
        >
      </td>
    </tr>
  </tbody>
</table>

Verwenden Sie den Schlüssel `theme`, um ein statisches Theme für Firefox zu definieren. Wenn dieser Schlüssel allein angegeben wird, definiert er das Theme, das Firefox sowohl beim hellen als auch beim dunklen Farbschema verwendet. Wenn der [Schlüssel `dark_theme`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/dark_theme) angegeben ist, definiert `theme` das Theme für das helle Farbschema.

> [!NOTE]
> Wenn Sie ein Theme in eine Erweiterung einbinden möchten, lesen Sie die Dokumentation zur {{WebExtAPIRef("theme")}}-API.

> [!NOTE]
> Seit Mai 2019 müssen Themes signiert sein, damit sie installiert werden können ([Firefox-Bug 1545109](https://bugzil.la/1545109)). Weitere Informationen finden Sie unter [Signieren und Verteilen Ihres Add-ons](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/#distributing-your-addon).

## Bildformate

Die folgenden Bildformate werden für alle Bild-Eigenschaften von Themes unterstützt:

- JPEG
- PNG
- APNG
- SVG (animiertes SVG wird ab Firefox 59 unterstützt)
- GIF (animiertes GIF wird nicht unterstützt)

## Syntax

Der Schlüssel `theme` ist ein Objekt mit den folgenden Eigenschaften:

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
        <p>Ab Firefox 60 optional. Vor Firefox 60 erforderlich.</p>
        <p>
          Ein JSON-Objekt, dessen Eigenschaften die Bilder darstellen, die in
          verschiedenen Bereichen des Browsers angezeigt werden. Einzelheiten
          zu den möglichen Eigenschaften dieses Objekts finden Sie unter
          <code><a href="#images">images</a></code>.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>colors</code></td>
      <td><code>Object</code></td>
      <td>
        <p>Erforderlich</p>
        <p>
          Ein JSON-Objekt, dessen Eigenschaften die Farben verschiedener
          Bereiche des Browsers darstellen. Einzelheiten zu den möglichen
          Eigenschaften dieses Objekts finden Sie unter
          <code><a href="#colors">colors</a></code>.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>properties</code></td>
      <td><code>Object</code></td>
      <td>
        <p>Optional</p>
        <p>
          Dieses Objekt enthält Eigenschaften, die beeinflussen, wie die
          Elemente von <code>"additional_backgrounds"</code> angezeigt und
          Farbschemata angewendet werden. Einzelheiten zu den möglichen
          Eigenschaften dieses Objekts finden Sie unter
          <code><a href="#properties">properties</a></code>.
        </p>
      </td>
    </tr>
  </tbody>
</table>

### images

Alle URLs sind relativ zur Datei manifest.json und dürfen nicht auf eine externe URL verweisen.

Bilder sollten 200 Pixel hoch sein, damit sie den Header-Bereich vertikal immer vollständig ausfüllen.

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
      <td><code>String</code> oder <code>Object</code></td>
      <td>
        <p>
          Ein Vordergrundbild (angegeben durch den Pfad zu einer in der
          Erweiterung enthaltenen Bilddatei) oder ein
          <a href="#css_gradient_syntax">CSS-Farbverlauf</a>, das bzw. der dem
          Header-Bereich hinzugefügt und an dessen oberer rechter Ecke
          ausgerichtet wird. CSS-Farbverläufe werden ab Firefox 153 unterstützt.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Chrome richtet das Bild an der oberen
            linken Ecke des Headers aus und wiederholt es, wenn es den
            Header-Bereich nicht vollständig ausfüllt.
          </p>
        </div>
        <p>
          Ab Firefox 60 auf Desktop-Geräten optional.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>additional_backgrounds</code></td>
      <td><code>Array</code> aus <code>String</code> oder <code>Object</code></td>
      <td>
        <div class="warning">
          <p>
            <strong>Warnung:</strong> Die Eigenschaft
            <code>additional_backgrounds</code> ist experimentell. Sie wird
            in Release-Versionen von Firefox akzeptiert, ihr Verhalten kann
            sich jedoch ändern.
          </p>
        </div>
        <p>
          Ein Array zusätzlicher Hintergründe, bei denen es sich jeweils
          entweder um den Pfad zu einer in der Erweiterung enthaltenen
          Bilddatei oder um einen <a href="#css_gradient_syntax">CSS-Farbverlauf</a>
          handelt. Sie werden dem Header-Bereich hinzugefügt und hinter dem
          Element <code>"theme_frame":</code> angezeigt. Das erste Element des
          Arrays liegt dabei ganz oben, das letzte ganz unten. CSS-Farbverläufe
          werden ab Firefox 153 unterstützt.
        </p>
        <p>Optional</p>
        <p>
          Standardmäßig werden alle Elemente an der oberen rechten Ecke des
          Header-Bereichs ausgerichtet. Ihre Ausrichtung, ihr
          Wiederholungsverhalten und ihre Größe sowie der Bereich des
          Browserfensters, in dem sie gezeichnet werden, lassen sich jedoch
          über <a href="#properties"><code>"properties":</code></a> steuern.
        </p>
        <p>
          Da zusätzliche Hintergründe hinter dem Element
          <code>theme_frame</code> angezeigt werden, sind sie nicht sichtbar,
          wenn <code>theme_frame</code> als CSS-Farbverlauf festgelegt ist.
        </p>
      </td>
    </tr>
  </tbody>
</table>

### Syntax für CSS-Farbverläufe

Ein CSS-Farbverlauf wird als Objekt in der Form `{ "GRADIENT_TYPE": "GRADIENT_PARAMS" }` angegeben. Dabei gilt:

- `GRADIENT_TYPE` ist einer der folgenden Werte:
  - `linear-gradient`
  - `radial-gradient`
  - `conic-gradient`
  - `repeating-linear-gradient`
  - `repeating-radial-gradient`
  - `repeating-conic-gradient`
- `GRADIENT_PARAMS` enthält die Parameter für die jeweilige CSS-Farbverlaufsfunktion, wie unter [CSS-Farbverlaufswerte](/de/docs/Web/CSS/Reference/Values/gradient) beschrieben.

### colors

Diese Eigenschaften definieren die Farben verschiedener Bereiche des Browsers. Sie sind alle optional. Wie sich diese Eigenschaften auf die Firefox-Benutzeroberfläche auswirken, zeigt die folgende Abbildung:

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <td>
        <p>
          <img
            alt="Übersicht der Farbeigenschaften und ihrer Anwendung auf Komponenten der Firefox-Benutzeroberfläche"
            src="themes_components_annotations.png"
          />
        </p>
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Wenn mehrere Farbeigenschaften eine Komponente beeinflussen, sind die Eigenschaften in der Reihenfolge ihrer Priorität aufgeführt.

Alle diese Eigenschaften können entweder als Zeichenfolge mit einem gültigen [CSS-Farbwert](/de/docs/Web/CSS/Reference/Values/color_value) (einschließlich Hexadezimalwerten) oder als RGB-Array angegeben werden, beispielsweise `"tab_background_text": [ 107 , 99 , 23 ]`.

> [!NOTE]
> [In Chrome können Farben nur als RGB-Arrays angegeben werden](#chrome-kompatibilität).

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
          Die Farbe von Text und Symbolen in der Lesezeichenleiste und der
          Suchleiste. Wenn <code>tab_text</code> nicht definiert ist, legt sie
          auch die Textfarbe des aktiven Tabs fest. Wenn <code>icons</code>
          nicht definiert ist, legt sie außerdem die Farbe der
          Symbolleistensymbole fest. Wird als mit Chrome kompatibler Alias für
          <code>toolbar_text</code> bereitgestellt.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Achten Sie darauf, dass die verwendete
            Farbe einen guten Kontrast zu den Farben von <code>frame</code>
            und <code>frame_inactive</code> beziehungsweise zu
            <code>toolbar</code> bietet, falls Sie diese Eigenschaft verwenden.
          </p>
          <p>
            Wenn <code>icons</code> nicht definiert ist, achten Sie auch auf
            einen guten Kontrast zu <code>button_background_active</code> und
            <code>button_background_hover</code>.
          </p>
        </div>
        <details open>
          <summary>Beispiel anzeigen</summary>
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
            alt="Firefox ist schwarz. Der Browser-Tab ist schwarz mit weißem Text. Die URL-Leiste und die Suchleiste sind weiß mit schwarzem Text, aber alle Symbole des Browsers und der Suchleiste sind rot."
            src="theme-bookmark_text.png"
          />
        </p>
      </td>
    </tr>
    <tr>
      <td><code>button_background_active</code></td>
      <td>
        <p>Die Hintergrundfarbe gedrückter Schaltflächen in der Symbolleiste.</p>
        <details open>
          <summary>Beispiel anzeigen</summary>
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
        <p><img alt="Firefox ist schwarz. Die Tabs und die URL-Leiste sind grau mit weißem Text. Das Symbol zum Anpassen der Symbolleiste in der URL-Leiste ist weiß auf rotem Hintergrund und gedrückt. Ein geöffnetes Popup zeigt eine kurze Liste von Elementen an, die der Symbolleiste hinzugefügt werden können, darunter die Browser-Bibliothek und die Sidebars." src="theme-button_background_active.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>button_background_hover</code></td>
      <td>
        <p>Die Hintergrundfarbe von Schaltflächen in der Symbolleiste beim Darüberfahren mit dem Mauszeiger.</p>
        <details open>
          <summary>Beispiel anzeigen</summary>
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
        <p><img alt="Firefox ist schwarz. Die Tabs und die URL-Leiste sind grau mit weißem Text. Das Symbol zum Zurücknavigieren ist weiß auf einem roten kreisförmigen Hintergrund." src="theme-button_background_hover.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>icons</code></td>
      <td>
        <p>Die Farbe der Symbolleistensymbole, ausgenommen die Symbole in der Suchleiste.</p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Achten Sie darauf, dass die verwendete
            Farbe einen guten Kontrast zu den Farben von <code>frame</code>,
            <code>frame_inactive</code>, <code>button_background_active</code>
            und <code>button_background_hover</code> bietet.
          </p>
        </div>
        <details open>
          <summary>Beispiel anzeigen</summary>
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
        <p><img alt="Firefox ist schwarz. Die Tabs und die URL-Leiste sind grau mit weißem Text. Die Symbole der URL-Leiste und zum Öffnen eines neuen Tabs sind rot. Die roten Symbole heben sich gut vom schwarzen Hintergrund des Header-Bereichs ab." src="theme-icons.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>icons_attention</code></td>
      <td>
        <p>
          Die Farbe von Symbolleistensymbolen im Aufmerksamkeitszustand, etwa
          des Sternsymbols für Lesezeichen oder des Symbols für einen
          abgeschlossenen Download.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Achten Sie darauf, dass die verwendete
            Farbe einen guten Kontrast zu den Farben von <code>frame</code>,
            <code>frame_inactive</code>, <code>button_background_active</code>
            und <code>button_background_hover</code> bietet.
          </p>
        </div>
        <details open>
          <summary>Beispiel anzeigen</summary>
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
        <p><img alt="Firefox ist schwarz. Die Tabs und die URL-Leiste sind grau mit weißem Text. Das Symbol zum Setzen eines Lesezeichens für diese Seite ist rot und gedrückt; ein Popup zum Bearbeiten des Lesezeichens ist geöffnet. Im Aufmerksamkeitszustand heben sich die Symbolleistensymbole gut vom schwarzen Hintergrund des Header-Bereichs ab." src="theme-icons_attention.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>frame</code></td>
      <td>
        <p>
          Die Hintergrundfarbe des Header-Bereichs. Sie wird in den Teilen des
          Headers angezeigt, die nicht von den in <code>"theme_frame"</code>
          und <code>"additional_backgrounds"</code> angegebenen Elementen
          bedeckt sind oder durch diese hindurch sichtbar bleiben.
        </p>
        <details open>
          <summary>Beispiel anzeigen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "frame": "red",
     "tab_background_text": "white"
  }
}</pre
          >
        </details>
        <p><img alt="Firefox ist rot mit weißem Text. Die Browser-Tabs sind heller rot, ebenfalls mit weißem Text. Die URL-Leiste ist sehr hellrot mit schwarzem Text." src="theme-frame.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>frame_inactive</code></td>
      <td>
        <p>
          Die Hintergrundfarbe des Header-Bereichs, wenn das Browserfenster
          inaktiv ist. Sie wird in den Teilen des Headers angezeigt, die nicht
          von den in <code>"theme_frame"</code> und
          <code>"additional_backgrounds"</code> angegebenen Elementen bedeckt
          sind oder durch diese hindurch sichtbar bleiben.
        </p>
        <details open>
          <summary>Beispiel anzeigen</summary>
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
            alt="Firefox ist grau. Die Tabs und die URL-Leiste sind heller grau. Der Tab-Text ist weiß und die Symbole der URL-Leiste sind dunkler grau."
            src="theme-frame_inactive.png"
          />
        </p>
      </td>
    </tr>
    <tr>
      <td><code>ntp_background</code></td>
      <td>
        <p>Die Hintergrundfarbe der Seite „Neuer Tab“.</p>
        <details open>
          <summary>Beispiel anzeigen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "ntp_background": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Firefox zeigt eine Seite „Neuer Tab“ mit rotem Hintergrund." src="ntp-background.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>ntp_card_background</code></td>
      <td>
        <p>Die Hintergrundfarbe der Karten auf der Seite „Neuer Tab“.</p>
        <details open>
          <summary>Beispiel anzeigen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "ntp_card_background": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Firefox zeigt eine Seite „Neuer Tab“. Die Hintergründe der Suchleiste und der Verknüpfungsschaltflächen auf der Seite sind rot." src="ntp-card-background.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>ntp_text</code></td>
      <td>
        <p>Die Textfarbe der Seite „Neuer Tab“.</p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Achten Sie darauf, dass die verwendete
            Farbe einen guten Kontrast zu den Farben von
            <code>ntp_background</code> und <code>ntp_card_background</code>
            bietet.
          </p>
        </div>
        <details open>
          <summary>Beispiel anzeigen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "ntp_text": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Firefox zeigt eine Seite „Neuer Tab“. Der Text auf der Seite ist rot." src="ntp-text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>popup</code></td>
      <td>
        <p>
          Die Hintergrundfarbe von Popups, beispielsweise des Dropdown-Menüs
          der URL-Leiste und der Pfeil-Panels.
        </p>
        <details open>
          <summary>Beispiel anzeigen</summary>
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
        <p><img alt="Firefox ist schwarz. Die Tabs und die URL-Leiste sind heller grau mit weißen Symbolen und weißem Text. Das Symbol zum Setzen eines Lesezeichens für diese Seite ist blau und gedrückt. Ein Popup zum Bearbeiten des Lesezeichens mit rotem Hintergrund ist geöffnet." src="theme-popup.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>popup_border</code></td>
      <td>
        <p>Die Rahmenfarbe von Popups.</p>
        <details open>
          <summary>Beispiel anzeigen</summary>
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
        <p><img alt="Firefox ist schwarz. Die Tabs und die URL-Leiste sind heller grau mit weißen Symbolen und weißem Text. Das Symbol zum Setzen eines Lesezeichens für diese Seite ist blau und gedrückt. Ein Popup zum Bearbeiten des Lesezeichens mit schwarzem Hintergrund und rotem Rahmen ist geöffnet." src="theme-popup_border.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>popup_highlight</code></td>
      <td>
        <p>
          Die Hintergrundfarbe von Elementen, die innerhalb von Popups per
          Tastatur hervorgehoben werden, beispielsweise eines ausgewählten
          Eintrags im Dropdown-Menü der URL-Leiste.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Es wird empfohlen,
            <code>popup_highlight_text</code> zu definieren, um die
            Standardtextfarbe des Browsers auf verschiedenen Plattformen zu
            überschreiben.
          </p>
        </div>
        <details open>
          <summary>Beispiel anzeigen</summary>
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
        <p><img alt="Screenshot von Firefox mit schwarzem Browserfenster. Die Tabs und die URL-Leiste sind heller grau mit weißen Symbolen und weißem Text. Ein Popup mit Suchergebnissen wird angezeigt; der Hintergrund eines hervorgehobenen Eintrags ist rot." src="theme-popup_highlight.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>popup_highlight_text</code></td>
      <td>
        <p>Die Textfarbe hervorgehobener Elemente innerhalb von Popups.</p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Achten Sie darauf, dass die verwendete
            Farbe einen guten Kontrast zu <code>popup_highlight</code> bietet.
          </p>
        </div>
        <details open>
          <summary>Beispiel anzeigen</summary>
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
        <p><img alt="Firefox ist schwarz. Die Tabs und die URL-Leiste sind heller grau mit weißen Symbolen und weißem Text. In einem Popup mit Suchergebnissen hat ein hervorgehobener Eintrag roten Text auf schwarzem Hintergrund. Der Text hebt sich gut vom Hintergrund des Eintrags ab." src="theme-popup_highlight_text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>popup_text</code></td>
      <td>
        <p>Die Textfarbe von Popups.</p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Achten Sie darauf, dass die verwendete
            Farbe einen guten Kontrast zu <code>popup</code> bietet.
          </p>
        </div>
        <details open>
          <summary>Beispiel anzeigen</summary>
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
        <p><img alt="Firefox ist schwarz. Die Tabs und die URL-Leiste sind heller grau mit weißen Symbolen und weißem Text. In einem Popup mit Suchergebnissen ist der Text der Einträge rot und hebt sich gut vom schwarzen Hintergrund des Popups ab." src="popup_text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>sidebar</code></td>
      <td>
        <p>Die Hintergrundfarbe der Sidebar.</p>
        <details open>
          <summary>Beispiel anzeigen</summary>
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
        <p><img alt="Nahaufnahme der geöffneten Sidebar eines Browserfensters. Der Hintergrund der Sidebar ist rot." src="sidebar-colors.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>sidebar_border</code></td>
      <td>
        <p>Die Farbe des Rahmens und der Trennlinie der Browser-Sidebar.</p>
        <details open>
          <summary>Beispiel anzeigen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "sidebar_border": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Nahaufnahme der Lesezeichen-Sidebar von Firefox mit einer roten horizontalen Trennlinie zwischen dem Titel der Sidebar und ihrem Menü. Die Rahmen- und Trennlinienfarbe der Sidebar ist rot." src="sidebar-border.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>sidebar_highlight</code></td>
      <td>
        <p>Die Hintergrundfarbe hervorgehobener Zeilen in integrierten Sidebars.</p>
        <details open>
          <summary>Beispiel anzeigen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "sidebar_highlight": "red",
     "sidebar_highlight_text": "white"
  }
}</pre
          >
        </details>
        <p><img alt="Nahaufnahme der Lesezeichen-Sidebar von Firefox mit einem hervorgehobenen Eintrag. Die hervorgehobene Zeile hat einen roten Hintergrund und weißen Text." src="sidebar-highlight.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>sidebar_highlight_text</code></td>
      <td>
        <p>Die Textfarbe hervorgehobener Zeilen in Sidebars.</p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Achten Sie darauf, dass die verwendete
            Farbe einen guten Kontrast zu <code>sidebar_highlight</code> bietet.
          </p>
        </div>
        <details open>
          <summary>Beispiel anzeigen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
    "sidebar_highlight": "pink",
    "sidebar_highlight_text": "red",
  }
}</pre
          >
        </details>
        <p><img alt="Nahaufnahme der Lesezeichen-Sidebar von Firefox mit einem hervorgehobenen Eintrag. Der Text der hervorgehobenen Zeile ist rot und hebt sich gut vom rosafarbenen Hintergrund ab." src="sidebar-highlight-text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>sidebar_text</code></td>
      <td>
        <p>Die Textfarbe von Sidebars.</p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Achten Sie darauf, dass die verwendete
            Farbe einen guten Kontrast zu <code>sidebar</code> bietet.
          </p>
        </div>
        <details open>
          <summary>Beispiel anzeigen</summary>
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
        <p><img alt="Nahaufnahme der geöffneten Sidebar eines Browserfensters. Der Text in der Sidebar ist weiß und hebt sich gut vom roten Hintergrund ab." src="sidebar-colors.png" /></p>
      </td>
    </tr>
    <tr>
      <td>
        <code>tab_background_separator</code> {{Deprecated_Inline}}
      </td>
      <td>
        <div class="notecard warning">
          <p>
            <strong>Warnung:</strong> <code>tab_background_separator</code>
            wird ab Firefox 89 nicht mehr unterstützt.
          </p>
        </div>
        <p>Die Farbe der vertikalen Trennlinie zwischen inaktiven Tabs.</p>
        <details open>
          <summary>Beispiel anzeigen</summary>
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
            alt="Nahaufnahme von Browser-Tabs, die die Trennlinie hervorhebt."
            src="theme-tab-background-separator.png"
          />
        </p>
      </td>
    </tr>
    <tr>
      <td><code>tab_background_text</code></td>
      <td>
        <p>
          Die Textfarbe in inaktiven Tabs. Wenn <code>tab_text</code> und
          <code>bookmark_text</code> nicht angegeben sind, gilt sie auch für
          den Text des aktiven Tabs.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Achten Sie darauf, dass die verwendete
            Farbe einen guten Kontrast zu <code>tab_selected</code>
            beziehungsweise zu <code>frame</code> und
            <code>frame_inactive</code> bietet.
          </p>
        </div>
        <details open>
          <summary>Beispiel anzeigen</summary>
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
        <p><img alt="Screenshot eines Browserfensters mit einem geöffneten Tab. Der Browser ist schwarz. Die Tabs und die URL-Leiste sind weiß mit roten Symbolen und rotem Text. Der Text im geöffneten Tab ist rot und hebt sich gut vom schwarzen Hintergrund des Tabs ab." src="theme-tab_background_text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>tab_line</code></td>
      <td>
        <p>Die Farbe der Linie des ausgewählten Tabs.</p>
        <details open>
          <summary>Beispiel anzeigen</summary>
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
        <p><img alt="Firefox ist schwarz. Die Tabs und die URL-Leiste sind dunkelgrau mit hellgrauen Symbolen und weißem Text. Der ausgewählte Tab hat eine rote Umrandung." src="theme-tab_line.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>tab_loading</code></td>
      <td>
        <p>Die Farbe der Ladeanzeige und der Ladeanimation des Tabs.</p>
        <details open>
          <summary>Beispiel anzeigen</summary>
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
        <p><img alt="Screenshot eines Browserfensters mit einem geöffneten Tab. Der Browser ist schwarz. Die Tabs und die URL-Leiste sind dunkelgrau mit weißen Symbolen und weißem Text. Im ausgewählten Tab ist die animierte Ladeanzeige rot." src="theme-tab_loading.gif" /></p>
      </td>
    </tr>
    <tr>
      <td><code>tab_selected</code></td>
      <td>
        <p>
          Die Hintergrundfarbe des ausgewählten Tabs. Wenn diese Eigenschaft
          nicht verwendet wird, bestimmen <code>frame</code> und
          <code>frame_inactive</code> die Farbe des ausgewählten Tabs.
        </p>
        <details open>
          <summary>Beispiel anzeigen</summary>
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
        <p><img alt="Screenshot eines Browserfensters mit einem geöffneten Tab. Der Browser ist schwarz. Die Tabs und die URL-Leiste sind dunkelgrau mit weißen Symbolen und weißem Text. Der ausgewählte Tab hat einen roten Hintergrund und weißen Text." src="theme-tab_selected.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>tab_text</code></td>
      <td>
        <p>
          Ab Firefox 59 definiert diese Eigenschaft die Textfarbe des
          ausgewählten Tabs. Wenn <code>tab_line</code> nicht angegeben ist,
          bestimmt sie auch die Farbe der Linie des ausgewählten Tabs.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Achten Sie darauf, dass die verwendete
            Farbe einen guten Kontrast zu <code>tab_selected</code>
            beziehungsweise zu <code>frame</code> und
            <code>frame_inactive</code> bietet.
          </p>
        </div>
        <details open>
          <summary>Beispiel anzeigen</summary>
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
        <p><img alt="Das Firefox-Theme zeigt ein Insekt. Die URL-Leiste ist hellgrau mit weißen Symbolen. Der Text des ausgewählten Tabs ist rot auf weißem Hintergrund." src="theme-tab_text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar</code></td>
      <td>
        <p>
          Die Hintergrundfarbe der Navigationsleiste, der Lesezeichenleiste
          und des ausgewählten Tabs.
        </p>
        <p>Sie legt auch die Hintergrundfarbe der Suchleiste fest.</p>
        <details open>
          <summary>Beispiel anzeigen</summary>
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
        <p><img alt="Firefox ist schwarz. Der Tab, die Suchleiste und die URL-Leiste sind rot mit weißem Text und weißen Symbolen. In der Suchleiste sind Text und Symbole dagegen schwarz." src="toolbar.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_bottom_separator</code></td>
      <td>
        <p>
          Die Farbe der Linie, die den unteren Rand der Symbolleiste vom
          darunterliegenden Bereich trennt.
        </p>
        <details open>
          <summary>Beispiel anzeigen</summary>
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
        <p><img alt="Firefox ist schwarz. Der Tab und die URL-Leiste sind heller grau mit weißem Text und weißen Symbolen. Eine horizontale rote Linie trennt den unteren Rand der Symbolleiste vom darunter angezeigten Webseiteninhalt." src="theme-toolbar_bottom_separator.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field</code></td>
      <td>
        <p>
          Die Hintergrundfarbe von Feldern in der Symbolleiste, beispielsweise
          der URL-Leiste.
        </p>
        <p>
          Sie legt auch die Hintergrundfarbe des Felds
          <strong>Auf dieser Seite suchen</strong> fest.
        </p>
        <details open>
          <summary>Beispiel anzeigen</summary>
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
        <p><img alt="Firefox ist schwarz. Der Tab, die Suchleiste und die URL-Leiste sind heller grau mit weißem Text und weißen Symbolen. Das Feld der URL-Leiste hat einen roten Hintergrund. Die Suchleiste ist weiß mit schwarzem Text; ihr Suchfeld ist rot mit schwarzem Text." src="toolbar-field.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_border</code></td>
      <td>
        <p>Die Rahmenfarbe von Feldern in der Symbolleiste.</p>
        <p>
          Sie legt auch die Rahmenfarbe des Felds
          <strong>Auf dieser Seite suchen</strong> fest.
        </p>
        <details open>
          <summary>Beispiel anzeigen</summary>
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
        <p><img alt="Firefox ist schwarz. Der Tab, die Suchleiste und die URL-Leiste sind schwarz mit weißem Text und weißen Symbolen. Die Felder der URL-Leiste und der Suchleiste sind rot umrandet." src="toolbar-field-border.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_border_focus</code></td>
      <td>
        <p>Die Rahmenfarbe fokussierter Felder in der Symbolleiste.</p>
        <details open>
          <summary>Beispiel anzeigen</summary>
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
        <p><img alt="Firefox ist schwarz. Der Tab und die URL-Leiste sind schwarz mit weißem Text und weißen Symbolen. Das Feld der URL-Leiste ist fokussiert und rot umrandet." src="theme-toolbar_field_border_focus.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_focus</code></td>
      <td>
        <p>
          Die Hintergrundfarbe fokussierter Felder in der Symbolleiste,
          beispielsweise der URL-Leiste.
        </p>
        <details open>
          <summary>Beispiel anzeigen</summary>
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
        <p><img alt="Firefox ist schwarz. Der Tab, die Suchleiste und die URL-Leiste sind schwarz mit weißem Text und weißen Symbolen. Der Hintergrund der fokussierten URL-Leiste ist rot und ihr Text ist weiß." src="theme-toolbar_field_focus.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_highlight</code></td>
      <td>
        Die Hintergrundfarbe, mit der aktuell ausgewählter Text in der
        URL-Leiste markiert wird (und in der Suchleiste, falls diese als
        separates Feld konfiguriert ist).
        <details open>
          <summary>Beispiel anzeigen</summary>
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
            alt="Firefox ist weiß. Der Tab und die URL-Leiste sind weiß mit schwarzem Text und schwarzen Symbolen. Das Feld der URL-Leiste ist fokussiert, blau umrandet und der Text darin ist ausgewählt."
            src="toolbar_field_highlight.png"
          />
        </p>
        <p>
          Hier legt das Feld <code>toolbar_field_highlight</code> ein helles
          Grün als Markierungsfarbe fest, während
          <code>toolbar_field_highlight_text</code> die Textfarbe auf ein
          mittleres bis dunkles Grün setzt.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_highlight_text</code></td>
      <td>
        <p>
          Die Farbe von aktuell ausgewähltem Text in der URL-Leiste (und in
          der Suchleiste, falls diese als separates Feld konfiguriert ist).
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Achten Sie darauf, dass die verwendete
            Farbe einen guten Kontrast zu <code>toolbar_field_highlight</code>
            bietet.
          </p>
        </div>
        <details open>
          <summary>Beispiel anzeigen</summary>
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
            alt="Firefox ist weiß. Der Tab und die URL-Leiste sind weiß mit schwarzem Text und schwarzen Symbolen. Das Feld der URL-Leiste ist fokussiert, blau umrandet und der Text darin ist ausgewählt."
            src="toolbar_field_highlight.png"
          />
        </p>
        <p>
          Hier setzt das Feld <code>toolbar_field_highlight_text</code> die
          Textfarbe auf ein mittleres bis dunkles Grün, während die
          Markierungsfarbe hellgrün ist.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_separator</code> {{Deprecated_Inline}}</td>
      <td>
        <div class="notecard warning">
          <p>
            <strong>Warnung:</strong> <code>toolbar_field_separator</code>
            wird ab Firefox 89 nicht mehr unterstützt.
          </p>
        </div>
        <p>
          Die Farbe von Trennlinien innerhalb der URL-Leiste. In Firefox 58
          wurde dies über <code>toolbar_vertical_separator</code> umgesetzt.
        </p>
        <details open>
          <summary>Beispiel anzeigen</summary>
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
        <p><img alt="Screenshot eines Browserfensters mit einem geöffneten Tab. Firefox ist schwarz. Der Tab und die URL-Leiste sind schwarz mit weißem Text und weißen Symbolen. Innerhalb des weißen Felds der URL-Leiste trennt eine rote vertikale Linie hinter dem Symbol für den Lesemodus die übrigen Symbole ab." src="theme-toolbar_field_separator.png" /></p>
        <p>
          In diesem Screenshot ist <code>"toolbar_vertical_separator"</code>
          die rote vertikale Linie in der URL-Leiste, die das Symbol für den
          Lesemodus von den anderen Symbolen trennt.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_text</code></td>
      <td>
        <p>
          Die Textfarbe in Feldern der Symbolleiste, beispielsweise in der
          URL-Leiste. Sie legt auch die Textfarbe im Feld
          <strong>Auf dieser Seite suchen</strong> fest.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Achten Sie darauf, dass die verwendete
            Farbe einen guten Kontrast zu <code>toolbar_field</code> bietet.
          </p>
        </div>
        <details open>
          <summary>Beispiel anzeigen</summary>
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
        <p><img alt="Screenshot eines Browserfensters mit einem geöffneten Tab. Der Browser ist schwarz. Der Tab und die URL-Leiste sind schwarz mit weißem Text und weißen Symbolen. Der Text in der URL-Leiste ist rot. Auch das Suchfeld hat roten Text auf schwarzem Hintergrund." src="toolbar-field-text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_text_focus</code></td>
      <td>
        <p>
          Die Textfarbe in fokussierten Feldern der Symbolleiste,
          beispielsweise in der URL-Leiste.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Achten Sie darauf, dass die verwendete
            Farbe einen guten Kontrast zu <code>toolbar_field_focus</code>
            bietet.
          </p>
        </div>
        <details open>
          <summary>Beispiel anzeigen</summary>
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
        <p><img alt="Screenshot eines Browserfensters mit zwei geöffneten Tabs. Der Browser ist schwarz. Der Tab und die URL-Leiste sind schwarz mit weißem Text und weißen Symbolen. Die URL-Leiste ist fokussiert; Text und Symbole darin sind rot auf schwarzem Hintergrund." src="theme-toolbar_field_text_focus.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_text</code></td>
      <td>
        <p>
          Die Textfarbe der Symbolleiste. Sie legt auch die Textfarbe der
          Suchleiste fest.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Verwenden Sie für die Kompatibilität
            mit Chrome den Alias <code>bookmark_text</code>.
          </p>
        </div>
        <details open>
          <summary>Beispiel anzeigen</summary>
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
        <p><img alt="Screenshot eines Browserfensters mit einem geöffneten Tab. Der Browser ist schwarz. Der Tab, die Suchleiste und die URL-Leiste sind schwarz mit rotem Text und roten Symbolen. Der Text im aktiven Tab, in der Navigationsleiste und in der Suchleiste ist rot." src="toolbar-text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_top_separator</code></td>
      <td>
        <p>
          Die Farbe der Linie, die den oberen Rand der Symbolleiste vom
          darüberliegenden Bereich trennt.
        </p>
        <details open>
          <summary>Beispiel anzeigen</summary>
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
        <p><img alt="Screenshot eines Browserfensters mit einem geöffneten Tab. Der Browser ist schwarz. Der Tab und die URL-Leiste sind schwarz mit weißem Text und weißen Symbolen. Eine rote Linie trennt den oberen Rand der URL-Leiste vom darüberliegenden Browserbereich." src="theme-toolbar_top_separator.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_vertical_separator</code></td>
      <td>
        <p>
          Die Farbe der Trennlinie in der Lesezeichen-Symbolleiste. In
          Firefox 58 entspricht sie der Farbe von Trennlinien innerhalb der
          URL-Leiste.
        </p>
        <details open>
          <summary>Beispiel anzeigen</summary>
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
        <p><img alt="Screenshot eines Browserfensters mit einem geöffneten Tab. Der Browser ist schwarz. Der Tab und die URL-Leiste sind schwarz mit weißem Text und weißen Symbolen. Die vertikale Linie, die die Lesezeichen-Symbolleiste vom rechts danebenliegenden Inhalt trennt, ist rot." src="theme-toolbar_vertical_separator.png" /></p>
      </td>
    </tr>
  </tbody>
</table>

#### Aliase

Dieser Schlüssel akzeptiert außerdem verschiedene Eigenschaften als Aliase für die oben aufgeführten Eigenschaften. Sie dienen der Kompatibilität mit Chrome. Wenn sowohl ein Alias als auch die zugehörige Eigenschaft angegeben werden, wird der Wert der Eigenschaft und nicht der des Alias verwendet.

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
        <p><code>Array</code> aus <code>String</code>-Werten</p>
      </td>
      <td>
        <p>Optional</p>
        <p>
          Ein Array von Aufzählungswerten, die die Ausrichtung des jeweiligen
          Elements im Array <code>"additional_backgrounds":</code>
          festlegen.<br />Mögliche Werte sind:
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
        <p>
          Enthält das Array weniger Elemente als das Array
          <code>additional_backgrounds</code>, werden seine Werte für die
          fehlenden Einträge erneut verwendet. Enthält
          <code>additional_backgrounds</code> beispielsweise 5 Werte und
          <code>additional_backgrounds_alignment</code> den Wert
          <code>["left", "top"]</code>, wird der dritte Hintergrund mit
          <code>"left"</code>, der vierte mit <code>"top"</code> und der
          fünfte wieder mit <code>"left"</code> ausgerichtet.
        </p>
        <p>Ohne Angabe gilt standardmäßig <code>"right top"</code>.</p>
      </td>
    </tr>
    <tr>
      <td><code>additional_backgrounds_tiling</code></td>
      <td>
        <p><code>Array</code> aus <code>String</code>-Werten</p>
      </td>
      <td>
        <p>Optional</p>
        <p>
          Ein Array von Aufzählungswerten, die festlegen, wie das jeweilige
          Element im Array <code>"additional_backgrounds":</code> wiederholt
          wird. Mögliche Werte sind:
        </p>
        <ul>
          <li><code>"no-repeat"</code></li>
          <li><code>"repeat"</code></li>
          <li><code>"repeat-x"</code></li>
          <li><code>"repeat-y"</code></li>
        </ul>
        <p>
          Enthält das Array weniger Elemente als das Array
          <code>additional_backgrounds</code>, werden seine Werte für die
          fehlenden Einträge erneut verwendet. Enthält
          <code>additional_backgrounds</code> beispielsweise 5 Werte und
          <code>additional_backgrounds_tiling</code> den Wert
          <code>["no-repeat", "repeat-x"]</code>, wird für den dritten
          Hintergrund <code>"no-repeat"</code>, für den vierten
          <code>"repeat-x"</code> und für den fünften wieder
          <code>"no-repeat"</code> verwendet.
        </p>
        <p>Ohne Angabe gilt standardmäßig <code>"no-repeat"</code>.</p>
      </td>
    </tr>
    <tr>
      <td><code>additional_backgrounds_size</code></td>
      <td>
        <p><code>Array</code> aus <code>String</code>-Werten</p>
      </td>
      <td>
        <p>Optional</p>
        <p>
          Ein Array von Werten, die die Größe des jeweiligen Elements im
          Array <code>"additional_backgrounds":</code> festlegen. Es
          akzeptiert dieselben Werte wie die CSS-Eigenschaft
          <a href="/de/docs/Web/CSS/Reference/Properties/background-size"><code>background-size</code></a>,
          etwa <code>"auto"</code>, <code>"cover"</code>,
          <code>"contain"</code> oder explizite Werte für Breite und Höhe
          (beispielsweise <code>"100px 200px"</code>).
        </p>
        <p>
          Enthält das Array weniger Elemente als das Array
          <code>additional_backgrounds</code>, werden seine Werte für die
          fehlenden Einträge erneut verwendet. Enthält
          <code>additional_backgrounds</code> beispielsweise 5 Werte und
          <code>additional_backgrounds_size</code> den Wert
          <code>["auto", "100px 100px"]</code>, erhält der dritte
          Hintergrund die Größe <code>"auto"</code>, der vierte
          <code>"100px 100px"</code> und der fünfte wieder
          <code>"auto"</code>.
        </p>
        <p>Ohne Angabe gilt standardmäßig <code>"auto"</code>.</p>
      </td>
    </tr>
    <tr>
      <td><code>backgrounds_area</code></td>
      <td>
        <p><code>String</code></p>
      </td>
      <td>
        <p>Optional</p>
        <p>
          Bestimmt den Bereich des Browserfensters, in dem die
          Hintergrundbilder und -farbverläufe des Themes gezeichnet werden.
          Mögliche Werte sind:
        </p>
        <ul>
          <li>
            <code>"auto"</code> – Firefox wählt den Bereich anhand von
            <code>additional_backgrounds_alignment</code> aus. Wenn ein
            Ausrichtungswert einen Hintergrund vertikal in der Mitte oder am
            unteren Rand des Header-Bereichs positioniert, werden die
            Hintergründe in den oberen Symbolleisten gezeichnet. Andernfalls
            werden sie im gesamten Fenster gezeichnet.
          </li>
          <li>
            <code>"window"</code> – die Hintergründe werden im gesamten
            Browserfenster gezeichnet, sodass sie sich auch hinter vertikalen
            Elementen der Benutzeroberfläche wie der Sidebar und vertikalen
            Tabs erstrecken.
          </li>
          <li>
            <code>"top_toolbars"</code> – die Hintergründe werden nur in den
            horizontalen Symbolleisten am oberen Fensterrand gezeichnet, also
            in der Menüleiste, der Tableiste, der Navigationsleiste und der
            Lesezeichen-Symbolleiste. Vertikale Elemente der
            Benutzeroberfläche wie die Sidebar verwenden stattdessen die
            Farbe <code>frame</code>.
          </li>
        </ul>
        <p>Ohne Angabe gilt standardmäßig <code>"auto"</code>.</p>
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
          Bestimmt, welches Farbschema auf die Browseroberfläche
          (beispielsweise Kontextmenüs) und Inhalte (beispielsweise
          integrierte Seiten und das bevorzugte Farbschema für Webseiten)
          angewendet wird. Mögliche Werte sind:
        </p>
        <ul>
          <li><code>"auto"</code> – ein anhand des Themes automatisch ausgewähltes helles oder dunkles Farbschema.</li>
          <li><code>"light"</code> – ein helles Farbschema.</li>
          <li><code>"dark"</code> – ein dunkles Farbschema.</li>
          <li><code>"system"</code> – verwendet das Farbschema des Systems.</li>
        </ul>
        <p>Ohne Angabe gilt standardmäßig <code>"auto"</code>.</p>
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
          Bestimmt, welches Farbschema auf Inhalte angewendet wird
          (beispielsweise integrierte Seiten und das bevorzugte Farbschema
          für Webseiten). Überschreibt <code>color_scheme</code>.
          Mögliche Werte sind:
        </p>
        <ul>
          <li><code>"auto"</code> – ein anhand des Themes automatisch ausgewähltes helles oder dunkles Farbschema.</li>
          <li><code>"light"</code> – ein helles Farbschema.</li>
          <li><code>"dark"</code> – ein dunkles Farbschema.</li>
          <li><code>"system"</code> – das Farbschema des Systems.</li>
        </ul>
        <p>Ohne Angabe gilt standardmäßig <code>"auto"</code>.</p>
      </td>
    </tr>
  </tbody>
</table>

## Beispiele

Ein einfaches Theme muss ein Bild für den Header, eine Akzentfarbe für den Header und eine Farbe für den dort angezeigten Text definieren:

```json
 "theme": {
   "images": {
     "theme_frame": "images/sun.jpg"
   },
   "colors": {
     "frame": "#CF723F",
     "tab_background_text": "black"
   }
 }
```

Der Header kann mit mehreren Elementen gefüllt werden. Verwenden Sie vor Firefox 60 ein leeres oder transparentes Header-Bild, um die Position der einzelnen zusätzlichen Elemente steuern zu können:

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
     "tab_background_text": "white"
   }
 }
```

Sie können den Header auch mit einem oder mehreren wiederholten Bildern füllen. Im folgenden Fall wird ein einzelnes Bild oben mittig im Header ausgerichtet und über den restlichen Header wiederholt:

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
     "tab_background_text": "black"
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

Damit erhalten Sie einen Browser, der so aussieht:

![Ein Browserfenster mit zwei geöffneten Tabs und einem dunkelgrünen Hintergrund im Header-Bereich. Der inaktive Tab hat weißen Text. Der aktive Tab und die Symbolleiste haben einen blauen Hintergrund mit türkisfarbenem Text. Die URL-Leiste hat einen orangefarbenen Hintergrund mit weißen Rahmen, grünen Text und eine weiße vertikale Trennlinie. Eine rote Linie trennt die Tabs am oberen Rand, und eine weiße Linie trennt die Tabs vom darunterliegenden Inhalt.](theme.png)

In diesem Screenshot ist `"toolbar_vertical_separator"` die weiße vertikale Linie in der URL-Leiste, die das Symbol für den Lesemodus von den anderen Symbolen trennt.

Dieses Beispiel (Firefox 153+) kombiniert Bildhintergründe mit einem linearen CSS-Farbverlauf:

```json
"theme": {
  "images": {
    "additional_backgrounds": [
      "background-image1.svg",
      "background-image2.svg",
      { "linear-gradient": "to bottom, #FF6BBA -20%, #FFC999 50%" }
    ]
  },
  "properties": {
    "additional_backgrounds_alignment": ["right top", "left top", "right top"],
    "additional_backgrounds_tiling": ["no-repeat", "no-repeat", "repeat-x"],
    "additional_backgrounds_size": ["auto", "auto", "auto 144px"]
  }
}
```

Das Ergebnis:

- `background-image1.svg` wird oben rechts in seiner natürlichen Größe angezeigt.
- `background-image2.svg` wird oben links in seiner natürlichen Größe angezeigt.
- Der `linear-gradient` wird von oben rechts aus angezeigt, horizontal über den Header wiederholt (`repeat-x`) und auf eine Höhe von 144px skaliert (die Breite wird automatisch bestimmt). Der Farbverlauf geht oben von Rosa (`#FF6BBA`) nach unten zu Pfirsichfarben (`#FFC999`) über.

Dieses Beispiel (Firefox 156+) beschränkt den Hintergrundfarbverlauf auf die horizontalen Symbolleisten am oberen Fensterrand, sodass er sich nicht hinter die Sidebar oder vertikale Tabs erstreckt. Ohne `backgrounds_area` bewirkt die Ausrichtung `"right top"`, dass Firefox den Farbverlauf im gesamten Fenster zeichnet:

```json
"theme": {
  "images": {
    "additional_backgrounds": [
      { "linear-gradient": "to bottom, rgb(255, 0, 128), rgb(0, 128, 255)" }
    ]
  },
  "colors": {
    "frame": "#000080",
    "tab_background_text": "#ffffff"
  },
  "properties": {
    "additional_backgrounds_alignment": ["right top"],
    "additional_backgrounds_tiling": ["no-repeat"],
    "additional_backgrounds_size": ["100% 100%"],
    "backgrounds_area": "top_toolbars"
  }
}
```

Wenn `backgrounds_area` auf `"top_toolbars"` gesetzt ist, verwendet die Sidebar die Farbe `frame`. Wenn Sie `backgrounds_area` stattdessen auf `"window"` setzen, wird der Farbverlauf im gesamten Fenster gezeichnet, auch hinter der Sidebar.

## Browser-Kompatibilität

{{Compat}}

### Chrome-Kompatibilität

In Chrome gilt:

- `colors/toolbar_text` wird nicht verwendet. Verwenden Sie stattdessen `colors/bookmark_text`.
- `images/theme_frame` richtet das Bild an der oberen linken Ecke des Headers aus und wiederholt es, wenn es den Header-Bereich nicht vollständig ausfüllt.
- Alle Farben müssen als Array von RGB-Werten angegeben werden, beispielsweise so:

  ```json
  "theme": {
    "colors": {
       "frame": [255, 0, 0],
       "tab_background_text": [0, 255, 0],
       "bookmark_text": [0, 0, 255]
    }
  }
  ```

  Ab Firefox 59 werden für alle Eigenschaften sowohl die Array-Form als auch CSS-Farbwerte akzeptiert. Davor erforderten `colors/frame` und `colors/tab_background_text` die Array-Form, während andere Eigenschaften CSS-Farbwerte erforderten.
