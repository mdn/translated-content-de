---
title: theme
slug: Mozilla/Add-ons/WebExtensions/manifest.json/theme
l10n:
  sourceCommit: 7501dc2c20f28e88a983e85e979978496946a804
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

Verwenden Sie den Schlüssel `theme`, um ein statisches Theme für Firefox zu definieren. Wenn nur dieser Schlüssel angegeben wird, definiert er das Theme, das Firefox sowohl beim hellen als auch beim dunklen Farbschema verwendet. Wenn der [Schlüssel `dark_theme`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/dark_theme) angegeben ist, definiert `theme` das Theme für das helle Farbschema.

> [!NOTE]
> Wenn Sie ein Theme in eine Erweiterung einbinden möchten, lesen Sie die Dokumentation zur API {{WebExtAPIRef("theme")}}.

> [!NOTE]
> Seit Mai 2019 müssen Themes signiert sein, damit sie installiert werden können ([Firefox-Bug 1545109](https://bugzil.la/1545109)). Weitere Informationen finden Sie unter [Signieren und Verteilen Ihres Add-ons](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/#distributing-your-addon).

## Bildformate

Die folgenden Bildformate werden in allen Bildeigenschaften eines Themes unterstützt:

- JPEG
- PNG
- APNG
- SVG (animierte SVGs werden ab Firefox 59 unterstützt)
- GIF (animierte GIFs werden nicht unterstützt)

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
          Ein JSON-Objekt, dessen Eigenschaften die Bilder repräsentieren, die
          in verschiedenen Bereichen des Browsers angezeigt werden. Einzelheiten
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
          Bereiche des Browsers repräsentieren. Einzelheiten zu den möglichen
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
          Die Eigenschaften dieses Objekts beeinflussen, wie die Einträge in
          <code>"additional_backgrounds"</code> angezeigt und Farbschemata
          angewendet werden. Einzelheiten zu den möglichen Eigenschaften dieses
          Objekts finden Sie unter
          <code><a href="#properties">properties</a></code>.
        </p>
      </td>
    </tr>
  </tbody>
</table>

### images

Alle URLs sind relativ zur Datei manifest.json und können nicht auf eine externe URL verweisen.

Bilder sollten 200 Pixel hoch sein, damit sie den Kopfbereich vertikal stets vollständig ausfüllen.

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
          Kopfbereich hinzugefügt und an dessen oberer rechter Ecke ausgerichtet
          wird. CSS-Farbverläufe werden ab Firefox 153 unterstützt.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Chrome richtet das Bild an der oberen
            linken Ecke des Kopfbereichs aus. Wenn das Bild den Kopfbereich
            nicht ausfüllt, wird es gekachelt.
          </p>
        </div>
        <p>
          Ab Firefox 60 auf Desktopgeräten optional.
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
            <code>additional_backgrounds</code> ist experimentell. Sie wird in
            veröffentlichten Firefox-Versionen akzeptiert, ihr Verhalten kann
            sich jedoch ändern.
          </p>
        </div>
        <p>
          Ein Array zusätzlicher Hintergrundeinträge. Jeder Eintrag ist
          entweder ein Pfad zu einer in der Erweiterung enthaltenen Bilddatei
          oder ein <a href="#css_gradient_syntax">CSS-Farbverlauf</a>. Die
          Einträge werden dem Kopfbereich hinzugefügt und hinter dem Eintrag
          <code>"theme_frame":</code> angezeigt. Dabei liegt der erste Eintrag
          des Arrays ganz oben und der letzte ganz unten. CSS-Farbverläufe
          werden ab Firefox 153 unterstützt.
        </p>
        <p>Optional</p>
        <p>
          Standardmäßig werden alle Einträge an der oberen rechten Ecke des
          Kopfbereichs ausgerichtet. Ihre Ausrichtung, ihr Wiederholungs- und
          Größenverhalten sowie der Bereich des Browserfensters, in dem sie
          dargestellt werden, lassen sich jedoch über
          <a href="#properties"><code>"properties":</code></a> steuern.
        </p>
        <p>
          Da zusätzliche Hintergrundeinträge hinter dem Eintrag
          <code>theme_frame</code> angezeigt werden, sind sie nicht sichtbar,
          wenn <code>theme_frame</code> als CSS-Farbverlauf festgelegt ist.
        </p>
      </td>
    </tr>
  </tbody>
</table>

### CSS-Farbverlaufssyntax

Ein CSS-Farbverlauf wird als Objekt der Form `{ "GRADIENT_TYPE": "GRADIENT_PARAMS" }` angegeben. Dabei gilt:

- `GRADIENT_TYPE` ist einer der folgenden Werte:
  - `linear-gradient`
  - `radial-gradient`
  - `conic-gradient`
  - `repeating-linear-gradient`
  - `repeating-radial-gradient`
  - `repeating-conic-gradient`
- `GRADIENT_PARAMS` enthält die Parameter der jeweiligen CSS-Farbverlaufsfunktion, wie unter [CSS-Farbverlaufswerte](/de/docs/Web/CSS/Reference/Values/gradient) beschrieben.

### colors

Diese Eigenschaften definieren die Farben verschiedener Browserbereiche. Sie sind alle optional.

> [!NOTE]
> Farbeigenschaften, die mit Firefox 157 (Nova) eingeführt wurden, werden in früheren Firefox-Versionen ignoriert. Verwenden Sie `strict_min_version` für Themes, die ausschließlich für Nova entwickelt wurden.

Wie sich diese Eigenschaften auf die Firefox-Benutzeroberfläche auswirken, zeigen die folgenden Abbildungen:

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <td>
        <p>
          Firefox 157 und höher (Nova):
          <img
            alt="Übersicht über die Farbeigenschaften und ihre Auswirkungen auf Komponenten der Firefox-Benutzeroberfläche in Nova"
            src="themes_components_annotations-nova.webp"
          />
        </p>
        <p>
           Firefox 156 und früher:
          <img
            alt="Übersicht über die Farbeigenschaften und ihre Auswirkungen auf Komponenten der Firefox-Benutzeroberfläche"
            src="themes_components_annotations.png"
          />
        </p>
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Wenn mehrere Farbeigenschaften eine Komponente beeinflussen, sind sie in der Reihenfolge ihrer Priorität aufgeführt.

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
          Die Farbe von Text und Symbolen in der Lesezeichen- und Suchleiste.
          Wenn <code>tab_text</code> nicht definiert ist, bestimmt sie außerdem
          die Textfarbe des aktiven Tabs. Wenn <code>icons</code> nicht
          definiert ist, bestimmt sie zudem die Farbe der Symbolleistensymbole.
          Diese Eigenschaft dient als Chrome-kompatibler Alias für
          <code>toolbar_text</code>.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Achten Sie darauf, dass die verwendete
            Farbe einen guten Kontrast zu den Farben von <code>frame</code> und
            <code>frame_inactive</code> bietet – beziehungsweise zu
            <code>toolbar</code>, falls Sie diese Eigenschaft verwenden.
          </p>
          <p>
            Wenn <code>icons</code> nicht definiert ist, achten Sie außerdem auf
            einen guten Kontrast zu <code>button_background_active</code> und
            <code>button_background_hover</code>.
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
          Firefox 157 und höher (Nova):
          <img
            alt="Firefox ist schwarz. Der Tab ist schwarz mit weißem Text. Die URL-Leiste und die Leiste „Auf dieser Seite suchen“ sind weiß mit schwarzem Text, aber alle Browser- und Suchleistensymbole sind rot."
            src="theme-bookmark_text-nova.png"
          />
        </p>
        <p>
          Firefox 156 und früher:
          <img
            alt="Firefox ist schwarz. Der Tab ist schwarz mit weißem Text. Die URL-Leiste und die Leiste „Auf dieser Seite suchen“ sind weiß mit schwarzem Text, aber alle Browser- und Suchleistensymbole sind rot."
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
        <p>
          Firefox 157 und höher (Nova):
          <img
            alt="Firefox ist schwarz. Tabs und URL-Leiste sind grau mit weißem Text. Das Symbol zum Anpassen der Symbolleiste in der URL-Leiste ist weiß auf rotem Hintergrund und gedrückt. Ein geöffnetes Popup zeigt eine kurze Liste von Elementen, die der Symbolleiste hinzugefügt werden können, etwa die Browserbibliothek und die Seitenleisten."
            src="theme-button_background_active-nova.png"
          />
        </p>
        <p>
          Firefox 156 und früher:
          <img alt="Firefox ist schwarz. Tabs und URL-Leiste sind grau mit weißem Text. Das Symbol zum Anpassen der Symbolleiste in der URL-Leiste ist weiß auf rotem Hintergrund und gedrückt. Ein geöffnetes Popup zeigt eine kurze Liste von Elementen, die der Symbolleiste hinzugefügt werden können, etwa die Browserbibliothek und die Seitenleisten." src="theme-button_background_active.png" />
        </p>
      </td>
    </tr>
    <tr>
      <td><code>button_background_hover</code></td>
      <td>
        <p>Die Hintergrundfarbe von Schaltflächen in der Symbolleiste, wenn sich der Mauszeiger darüber befindet.</p>
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
        <p>
          Firefox 157 und höher (Nova):
          <img
            alt="Firefox ist schwarz. Tabs und URL-Leiste sind grau mit weißem Text. Das Symbol zum Zurückblättern ist weiß und hat einen roten kreisförmigen Hintergrund."
            src="theme-button_background_hover-nova.png"
          />
        </p>
        <p>
          Firefox 156 und früher:
          <img alt="Firefox ist schwarz. Tabs und URL-Leiste sind grau mit weißem Text. Das Symbol zum Zurückblättern ist weiß und hat einen roten kreisförmigen Hintergrund." src="theme-button_background_hover.png" />
        </p>
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
        <p>
          Firefox 157 und höher (Nova):
          <img
            alt="Firefox ist schwarz. Tabs und URL-Leiste sind grau mit weißem Text. Die Symbole in der URL-Leiste und zum Öffnen eines neuen Tabs sind rot. Die roten Symbole heben sich gut vom schwarzen Hintergrund des Kopfbereichs ab."
            src="theme-icons-nova.png"
          />
        </p>
        <p>
          Firefox 156 und früher:
          <img alt="Firefox ist schwarz. Tabs und URL-Leiste sind grau mit weißem Text. Die Symbole in der URL-Leiste und zum Öffnen eines neuen Tabs sind rot. Die roten Symbole heben sich gut vom schwarzen Hintergrund des Kopfbereichs ab." src="theme-icons.png" />
        </p>
      </td>
    </tr>
    <tr>
      <td><code>icons_attention</code></td>
      <td>
        <p>
          Die Farbe von Symbolleistensymbolen im Aufmerksamkeitszustand, etwa
          eines mit einem Stern versehenen Lesezeichensymbols oder des Symbols
          für einen abgeschlossenen Download.
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
        <p>
          Firefox 157 und höher (Nova):
          <img
            alt="Firefox ist schwarz. Tabs und URL-Leiste sind grau mit weißem Text. Das Symbol zum Speichern der Seite als Lesezeichen ist rot und gedrückt; das Popup „Lesezeichen bearbeiten“ ist geöffnet. Im Aufmerksamkeitszustand heben sich die Symbolleistensymbole gut vom schwarzen Hintergrund des Kopfbereichs ab."
            src="theme-icons_attention-nova.png"
          />
        </p>
        <p>
          Firefox 156 und früher:
          <img alt="Firefox ist schwarz. Tabs und URL-Leiste sind grau mit weißem Text. Das Symbol zum Speichern der Seite als Lesezeichen ist rot und gedrückt; das Popup „Lesezeichen bearbeiten“ ist geöffnet. Im Aufmerksamkeitszustand heben sich die Symbolleistensymbole gut vom schwarzen Hintergrund des Kopfbereichs ab." src="theme-icons_attention.png" />
        </p>
      </td>
    </tr>
    <tr>
      <td><code>frame</code></td>
      <td>
        <p>
          Die Hintergrundfarbe des Kopfbereichs. Sie wird in den Teilen
          angezeigt, die nicht von den unter <code>"theme_frame"</code> und
          <code>"additional_backgrounds"</code> angegebenen Einträgen verdeckt
          werden oder durch diese hindurch sichtbar sind.
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
        <p>
          Firefox 157 und höher (Nova):
          <img
            alt="Firefox ist rot mit weißem Text. Die Tabs sind heller rot, ebenfalls mit weißem Text. Die URL-Leiste ist sehr hellrot mit schwarzem Text."
            src="theme-frame-nova.png"
          />
        </p>
        <p>
          Firefox 156 und früher:
          <img alt="Firefox ist rot mit weißem Text. Die Tabs sind heller rot, ebenfalls mit weißem Text. Die URL-Leiste ist sehr hellrot mit schwarzem Text." src="theme-frame.png" />
        </p>
      </td>
    </tr>
    <tr>
      <td><code>frame_inactive</code></td>
      <td>
        <p>
          Die Hintergrundfarbe des Kopfbereichs, wenn das Browserfenster
          inaktiv ist. Sie wird in den Teilen angezeigt, die nicht von den unter
          <code>"theme_frame"</code> und <code>"additional_backgrounds"</code>
          angegebenen Einträgen verdeckt werden oder durch diese hindurch
          sichtbar sind.
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
          Firefox 157 und höher (Nova):
          <img
            alt="Firefox ist grau. Tabs und URL-Leiste sind heller grau. Der Tab-Text ist weiß und die Symbole in der URL-Leiste sind dunkler grau."
            src="theme-frame_inactive-nova.png"
          />
        </p>
        <p>
          Firefox 156 und früher:
          <img
            alt="Firefox ist grau. Tabs und URL-Leiste sind heller grau. Der Tab-Text ist weiß und die Symbole in der URL-Leiste sind dunkler grau."
            src="theme-frame_inactive.png"
          />
        </p>
      </td>
    </tr>
    <tr>
      <td><code>ntp_background</code></td>
      <td>
        <p>Die Hintergrundfarbe der Neuer-Tab-Seite.</p>
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
        <p>
          Firefox 157 und höher (Nova):
          <img
            alt="Firefox zeigt eine Neuer-Tab-Seite. Der Hintergrund der Seite ist rot."
            src="ntp-background-nova.png"
          />
        </p>
        <p>
          Firefox 156 und früher:
          <img alt="Firefox zeigt eine Neuer-Tab-Seite. Der Hintergrund der Seite ist rot." src="ntp-background.png" />
        </p>
      </td>
    </tr>
    <tr>
      <td><code>ntp_card_background</code></td>
      <td>
        <p>Die Hintergrundfarbe der Karten auf der Neuer-Tab-Seite.</p>
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
        <p>
          Firefox 157 und höher (Nova):
          <img
            alt="Firefox zeigt eine Neuer-Tab-Seite. Der Hintergrund der Suchleiste und der Verknüpfungsschaltflächen ist rot."
            src="ntp-card-background-nova.png"
          />
        </p>
        <p>
          Firefox 156 und früher:
          <img alt="Firefox zeigt eine Neuer-Tab-Seite. Der Hintergrund der Suchleiste und der Verknüpfungsschaltflächen ist rot." src="ntp-card-background.png" />
        </p>
      </td>
    </tr>
    <tr>
      <td><code>ntp_text</code></td>
      <td>
        <p>Die Textfarbe der Neuer-Tab-Seite.</p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Achten Sie darauf, dass die verwendete
            Farbe einen guten Kontrast zu <code>ntp_background</code> und
            <code>ntp_card_background</code> bietet.
          </p>
        </div>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> In Nova wird der Text im Suchfeld nicht
            durch diese Eigenschaft gestaltet. Er verwendet die
            Standardtextfarbe.
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
        <p>
          Firefox 157 und höher (Nova):
          <img
            alt="Firefox zeigt eine Neuer-Tab-Seite. Der Text auf der Seite ist rot."
            src="ntp-text-nova.png"
          />
        </p>
        <p>
          Firefox 156 und früher:
          <img alt="Firefox zeigt eine Neuer-Tab-Seite. Der Text auf der Seite ist rot." src="ntp-text.png" />
        </p>
      </td>
    </tr>
    <tr>
      <td><code>popup</code></td>
      <td>
        <p>
          Die Hintergrundfarbe von Popups, etwa dem Dropdown-Menü der
          URL-Leiste und den Pfeil-Panels.
        </p>
        <p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> In Firefox 157 und höher (Nova) verwendet
            das Dropdown-Menü der URL-Leiste weder <code>popup</code> noch
            <code>popup_text</code>. Es behält die Standardfarben des Browsers
            bei.
          </p>
        </div>
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
        <p>
          Firefox 157 und höher (Nova):
          <img
            alt="Firefox ist schwarz. Tabs und URL-Leiste sind heller grau mit weißen Symbolen und weißem Text. Das Symbol zum Speichern der Seite als Lesezeichen ist blau und gedrückt. Das geöffnete Popup „Lesezeichen bearbeiten“ hat einen roten Hintergrund."
            src="theme-popup-nova.png"
          />
        </p>
        <p>
          Firefox 156 und früher:
          <img alt="Firefox ist schwarz. Tabs und URL-Leiste sind heller grau mit weißen Symbolen und weißem Text. Das Symbol zum Speichern der Seite als Lesezeichen ist blau und gedrückt. Das geöffnete Popup „Lesezeichen bearbeiten“ hat einen roten Hintergrund." src="theme-popup.png" />
        </p>
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
        <p>
          Firefox 157 und höher (Nova):
          <img
            alt="Firefox ist schwarz. Tabs und URL-Leiste sind heller grau mit weißen Symbolen und weißem Text. Das Symbol zum Speichern der Seite als Lesezeichen ist blau und gedrückt. Das geöffnete Popup „Lesezeichen bearbeiten“ hat einen schwarzen Hintergrund und einen roten Rahmen."
            src="theme-popup_border-nova.png"
          />
        </p>
        <p>
          Firefox 156 und früher:
          <img alt="Firefox ist schwarz. Tabs und URL-Leiste sind heller grau mit weißen Symbolen und weißem Text. Das Symbol zum Speichern der Seite als Lesezeichen ist blau und gedrückt. Das geöffnete Popup „Lesezeichen bearbeiten“ hat einen schwarzen Hintergrund und einen roten Rahmen." src="theme-popup_border.png" />
        </p>
      </td>
    </tr>
    <tr>
      <td><code>popup_highlight</code></td>
      <td>
        <p>
          Die Hintergrundfarbe von Einträgen in Popups, die über die Tastatur
          hervorgehoben werden, etwa eines ausgewählten Eintrags im
          Dropdown-Menü der URL-Leiste.
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
        <p>
          Firefox 157 und höher (Nova):
          <img
            alt="Screenshot eines schwarzen Firefox-Fensters. Tabs und URL-Leiste sind heller grau mit weißen Symbolen und weißem Text. Ein Popup mit Suchergebnissen ist geöffnet; der hervorgehobene Eintrag hat einen roten Hintergrund."
            src="theme-popup_highlight-nova.png"
          />
        </p>
        <p>
          Firefox 156 und früher:
          <img alt="Screenshot eines schwarzen Firefox-Fensters. Tabs und URL-Leiste sind heller grau mit weißen Symbolen und weißem Text. Ein Popup mit Suchergebnissen ist geöffnet; der hervorgehobene Eintrag hat einen roten Hintergrund." src="theme-popup_highlight.png" />
        </p>
      </td>
    </tr>
    <tr>
      <td><code>popup_highlight_text</code></td>
      <td>
        <p>Die Textfarbe hervorgehobener Einträge in Popups.</p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Achten Sie darauf, dass die verwendete
            Farbe einen guten Kontrast zu <code>popup_highlight</code> bietet.
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
        <p>
          Firefox 157 und höher (Nova):
          <img
            alt="Firefox ist schwarz. Tabs und URL-Leiste sind heller grau mit weißen Symbolen und weißem Text. Ein Popup mit Suchergebnissen ist geöffnet. Der hervorgehobene Eintrag hat roten Text auf schwarzem Hintergrund, von dem er sich gut abhebt."
            src="theme-popup_highlight_text-nova.png"
          />
        </p>
        <p>
          Firefox 156 und früher:
          <img alt="Firefox ist schwarz. Tabs und URL-Leiste sind heller grau mit weißen Symbolen und weißem Text. Ein Popup mit Suchergebnissen ist geöffnet. Der hervorgehobene Eintrag hat roten Text auf schwarzem Hintergrund, von dem er sich gut abhebt." src="theme-popup_highlight_text.png" />
        </p>
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
        <p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> In Firefox 157 und höher (Nova) verwendet
            das Dropdown-Menü der URL-Leiste weder <code>popup</code> noch
            <code>popup_text</code>. Es behält die Standardfarben des Browsers
            bei.
          </p>
        </div>
        </p>
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
        <p>
          Firefox 157 und höher (Nova):
          <img
            alt="Firefox mit schwarzem Rahmen und weißem Tab-Text. Das Panel zum Hinzufügen eines Lesezeichens ist geöffnet. Es hat einen schwarzen Hintergrund; Beschriftungen, Felder und Schaltflächen sind rot."
            src="popup_text-nova.png"
          />
        </p>
        <p>
          Firefox 156 und früher:
          <img alt="Firefox ist schwarz. Tabs und URL-Leiste sind heller grau mit weißen Symbolen und weißem Text. Ein Popup mit Suchergebnissen zeigt rote Eintragstexte, die sich gut vom schwarzen Hintergrund abheben." src="popup_text.png" />
        </p>
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
        <p>
          Firefox 157 und höher (Nova):
          <img
            alt="Nahaufnahme der geöffneten Seitenleiste eines Browserfensters. Der Hintergrund der Seitenleiste ist rot."
            src="sidebar-colors-nova.png"
          />
        </p>
        <p>
          Firefox 156 und früher:
          <img alt="Nahaufnahme der geöffneten Seitenleiste eines Browserfensters. Der Hintergrund der Seitenleiste ist rot." src="sidebar-colors.png" />
        </p>
      </td>
    </tr>
    <tr>
      <td><code>sidebar_border</code></td>
      <td>
        <p>Die Farbe des Rahmens und der Trennlinie der Browserseitenleiste.</p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> In Firefox 157 und höher (Nova) enthält
            die neu gestaltete Seitenleiste keine Trennlinie mehr.
          </p>
        </div>
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
        <p>
          Firefox 157 und höher (Nova):
          <img
            alt="Nahaufnahme der Firefox-Lesezeichenseitenleiste mit einer roten horizontalen Trennlinie zwischen dem Titel und dem Menü der Seitenleiste. Der Rahmen und die Trennlinie der Seitenleiste sind rot."
            src="sidebar-border-nova.png"
          />
        </p>
        <p>
          Firefox 156 und früher:
          <img alt="Nahaufnahme der Firefox-Lesezeichenseitenleiste mit einer roten horizontalen Trennlinie zwischen dem Titel und dem Menü der Seitenleiste. Der Rahmen und die Trennlinie der Seitenleiste sind rot." src="sidebar-border.png" />
        </p>
      </td>
    </tr>
    <tr>
      <td><code>sidebar_highlight</code></td>
      <td>
        <p>Die Hintergrundfarbe hervorgehobener Zeilen in integrierten Seitenleisten.</p>
        <p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> In Firefox 157 und höher (Nova) behält
            eine hervorgehobene Zeile in der neu gestalteten Seitenleiste die
            Standardfarbe des Browsers bei. Diese Eigenschaft hat daher keine
            sichtbare Wirkung.
          </p>
        </div>
        </p>
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
        <p>
          Firefox 157 und höher (Nova):
          <img
            alt="Lesezeichenseitenleiste mit einer hervorgehobenen Zeile. Statt des vom Theme festgelegten Rots behält die Zeile den standardmäßigen lavendelfarbenen Hintergrund des Browsers bei."
            src="sidebar-highlight-nova.png"
          />
        </p>
        <p>
          Firefox 156 und früher:
          <img alt="Nahaufnahme der Firefox-Lesezeichenseitenleiste mit einem hervorgehobenen Eintrag. Die hervorgehobene Zeile hat einen roten Hintergrund und weißen Text." src="sidebar-highlight.png" />
        </p>
      </td>
    </tr>
    <tr>
      <td><code>sidebar_highlight_text</code></td>
      <td>
        <p>Die Textfarbe hervorgehobener Zeilen in Seitenleisten.</p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Achten Sie darauf, dass die verwendete
            Farbe einen guten Kontrast zu <code>sidebar_highlight</code> bietet.
          </p>
        </div>
        <p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> In Firefox 157 und höher (Nova) behält
            eine hervorgehobene Zeile in der neu gestalteten Seitenleiste die
            Standardtextfarbe des Browsers bei. Diese Eigenschaft hat daher
            keine sichtbare Wirkung.
          </p>
        </div>
        </p>
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
        <p>
          Firefox 157 und höher (Nova):
          <img
            alt="Lesezeichenseitenleiste mit einer hervorgehobenen Zeile. Statt des vom Theme festgelegten Rots behält ihre Beschriftung die Standardfarbe des Browsers bei."
            src="sidebar-highlight-text-nova.png"
          />
        </p>
        <p>
          Firefox 156 und früher:
          <img alt="Nahaufnahme der Firefox-Lesezeichenseitenleiste mit einem hervorgehobenen Eintrag. Der Text der hervorgehobenen Zeile ist rot und hebt sich gut vom rosa Hintergrund ab." src="sidebar-highlight-text.png" />
        </p>
      </td>
    </tr>
    <tr>
      <td><code>sidebar_text</code></td>
      <td>
        <p>Die Textfarbe von Seitenleisten.</p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Achten Sie darauf, dass die verwendete
            Farbe einen guten Kontrast zu <code>sidebar</code> bietet.
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
        <p>
          Firefox 157 und höher (Nova):
          <img
            alt="Nahaufnahme der geöffneten Seitenleiste eines Browserfensters. Der Text in der Seitenleiste ist weiß und hebt sich gut vom roten Hintergrund ab."
            src="sidebar-colors-nova.png"
          />
        </p>
        <p>
          Firefox 156 und früher:
          <img alt="Nahaufnahme der geöffneten Seitenleiste eines Browserfensters. Der Text in der Seitenleiste ist weiß und hebt sich gut vom roten Hintergrund ab." src="sidebar-colors.png" />
        </p>
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
            wird seit Firefox 89 nicht mehr unterstützt.
          </p>
        </div>
        <p>Die Farbe der vertikalen Trennlinie zwischen Hintergrund-Tabs.</p>
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
          Firefox 157 und höher (Nova):
          <img
            alt="Nahaufnahme von Browser-Tabs, die die Trennlinie hervorhebt."
            src="theme-tab-background-separator-nova.png"
          />
        </p>
        <p>
          Firefox 156 und früher:
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
          Die Farbe des Textes in inaktiven Seiten-Tabs. Wenn weder
          <code>tab_text</code> noch <code>bookmark_text</code> angegeben ist,
          gilt sie auch für den Text des aktiven Tabs.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Achten Sie darauf, dass die verwendete
            Farbe einen guten Kontrast zu <code>tab_selected</code> oder zu
            <code>frame</code> und <code>frame_inactive</code> bietet.
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
        <p>
          Firefox 157 und höher (Nova):
          <img
            alt="Screenshot eines Browserfensters mit einem geöffneten Tab. Der Browser ist schwarz. Tab und URL-Leiste sind weiß mit roten Symbolen und rotem Text. Der Text im geöffneten Tab ist rot und hebt sich gut vom schwarzen Tab-Hintergrund ab."
            src="theme-tab_background_text-nova.png"
          />
        </p>
        <p>
          Firefox 156 und früher:
          <img alt="Screenshot eines Browserfensters mit einem geöffneten Tab. Der Browser ist schwarz. Tab und URL-Leiste sind weiß mit roten Symbolen und rotem Text. Der Text im geöffneten Tab ist rot und hebt sich gut vom schwarzen Tab-Hintergrund ab." src="theme-tab_background_text.png" />
        </p>
      </td>
    </tr>
    <tr>
      <td><code>tab_line</code></td>
      <td>
        <p>Die Farbe der Linie am ausgewählten Tab.</p>
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
        <p>
          Firefox 157 und höher (Nova):
          <img
            alt="Firefox ist schwarz. Tabs und URL-Leiste sind dunkelgrau mit hellgrauen Symbolen und weißem Text. Der ausgewählte Tab hat eine rote Umrandung."
            src="theme-tab_line-nova.png"
          />
        </p>
        <p>
          Firefox 156 und früher:
          <img alt="Firefox ist schwarz. Tabs und URL-Leiste sind dunkelgrau mit hellgrauen Symbolen und weißem Text. Der ausgewählte Tab hat eine rote Umrandung." src="theme-tab_line.png" />
        </p>
      </td>
    </tr>
    <tr>
      <td><code>tab_loading</code></td>
      <td>
        <p>Die Farbe der Ladeanzeige und der Ladeanimation im Tab.</p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> In Firefox 157 und höher (Nova) behält die
            Ladeanzeige im Tab ihre Standardfarbe bei. Diese Eigenschaft hat
            daher keine sichtbare Wirkung.
          </p>
        </div>
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
        <p>
          Firefox 157 und höher (Nova):
          <img
            alt="Firefox mit schwarzem Rahmen und weißem Tab-Text lädt eine Seite. Die Ladeanzeige im Tab ist standardmäßig grau statt des vom Theme festgelegten Rots."
            src="theme-tab_loading-nova.png"
          />
        </p>
        <p>
          Firefox 156 und früher:
          <img alt="Screenshot eines Browserfensters mit einem geöffneten Tab. Der Browser ist schwarz. Tab und URL-Leiste sind dunkelgrau mit weißen Symbolen und weißem Text. Im ausgewählten Tab ist eine rote animierte Ladeanzeige zu sehen." src="theme-tab_loading.gif" />
        </p>
      </td>
    </tr>
    <tr>
      <td><code>tab_selected</code></td>
      <td>
        <p>
          Die Hintergrundfarbe des ausgewählten Tabs. Wird diese Eigenschaft
          nicht verwendet, bestimmen <code>frame</code> und
          <code>frame_inactive</code> die Farbe des ausgewählten Tabs.
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> In Nova wurde der Schlagschatten des
            ausgewählten Tabs entfernt. Damit ausgewählte Tabs deutlich
            erkennbar sind, legen Sie für diese Eigenschaft eine Farbe fest,
            die sich von <code>frame</code> und <code>frame_inactive</code>
            abhebt.
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
     "tab_selected": "red"
  }
}</pre
          >
        </details>
        <p>
          Firefox 157 und höher (Nova):
          <img
            alt="Screenshot eines Browserfensters mit einem geöffneten Tab. Der Browser ist schwarz. Tab und URL-Leiste sind dunkelgrau mit weißen Symbolen und weißem Text. Der ausgewählte Tab hat einen roten Hintergrund und weißen Text."
            src="theme-tab_selected-nova.png"
          />
        </p>
        <p>
          Firefox 156 und früher:
          <img alt="Screenshot eines Browserfensters mit einem geöffneten Tab. Der Browser ist schwarz. Tab und URL-Leiste sind dunkelgrau mit weißen Symbolen und weißem Text. Der ausgewählte Tab hat einen roten Hintergrund und weißen Text." src="theme-tab_selected.png" />
        </p>
      </td>
    </tr>
    <tr>
      <td><code>tab_text</code></td>
      <td>
        <p>
          Ab Firefox 59 bestimmt diese Eigenschaft die Textfarbe des
          ausgewählten Tabs. Wenn <code>tab_line</code> nicht angegeben ist,
          bestimmt sie auch die Farbe der Linie am ausgewählten Tab.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Achten Sie darauf, dass die verwendete
            Farbe einen guten Kontrast zu <code>tab_selected</code> oder zu
            <code>frame</code> und <code>frame_inactive</code> bietet.
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
        <p>
          Firefox 157 und höher (Nova):
          <img
            alt="Firefox verwendet ein Theme mit einem Insektenbild. Die URL-Leiste ist hellgrau mit weißen Symbolen. Der Text des ausgewählten Tabs ist rot auf weißem Hintergrund."
            src="theme-tab_text-nova.png"
          />
        </p>
        <p>
          Firefox 156 und früher:
          <img alt="Firefox verwendet ein Theme mit einem Insektenbild. Die URL-Leiste ist hellgrau mit weißen Symbolen. Der Text des ausgewählten Tabs ist rot auf weißem Hintergrund." src="theme-tab_text.png" />
        </p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar</code></td>
      <td>
        <p>
          Die Hintergrundfarbe der Navigationsleiste, der Lesezeichenleiste
          und des ausgewählten Tabs.
        </p>
        <p>Sie bestimmt auch die Hintergrundfarbe der Suchleiste.</p>
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
        <p>
          Firefox 157 und höher (Nova):
          <img
            alt="Firefox ist schwarz. Tab, Suchleiste und URL-Leiste sind rot mit weißem Text und weißen Symbolen. In der Suchleiste sind Text und Symbole dagegen schwarz."
            src="toolbar-nova.png"
          />
        </p>
        <p>
          Firefox 156 und früher:
          <img alt="Firefox ist schwarz. Tab, Suchleiste und URL-Leiste sind rot mit weißem Text und weißen Symbolen. In der Suchleiste sind Text und Symbole dagegen schwarz." src="toolbar.png" />
        </p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_bottom_separator</code></td>
      <td>
        <p>
          Die Farbe der Linie entlang des oberen und linken Randes des
          Bereichs, der die Webseite enthält. Sie trennt damit den
          Seiteninhalt von der darüberliegenden Symbolleiste und, sofern die
          Seitenleiste angezeigt wird, von der Seitenleiste links daneben.
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
        <p>
          Firefox 157 und höher (Nova):
          <img
            alt="Firefox ist schwarz mit weißem Tab-Text; die Seitenleiste zeigt ihre Symbole. Eine rote Linie verläuft entlang des oberen und linken Randes des Webseitenbereichs und trennt ihn von der Symbolleiste darüber und der Seitenleiste links daneben."
            src="theme-toolbar_bottom_separator-nova.png"
          />
        </p>
        <p>
          Firefox 156 und früher:
          <img alt="Firefox ist schwarz. Tab und URL-Leiste sind heller grau mit weißem Text und weißen Symbolen. Eine horizontale rote Linie trennt die Symbolleiste vom darunter angezeigten Webseiteninhalt." src="theme-toolbar_bottom_separator.png" />
        </p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field</code></td>
      <td>
        <p>
          Die Hintergrundfarbe von Feldern in der Symbolleiste, etwa der
          URL-Leiste.
        </p>
        <p>
          Sie bestimmt auch die Hintergrundfarbe des Feldes
          <strong>Auf dieser Seite suchen</strong>.
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
        <p>
          Firefox 157 und höher (Nova):
          <img
            alt="Firefox ist schwarz. Tab, Suchleiste und URL-Leiste sind heller grau mit weißem Text und weißen Symbolen. Der Hintergrund der URL-Leiste ist rot. Die Suchleiste ist weiß mit schwarzem Text; ihr Suchfeld ist rot mit schwarzem Text."
            src="toolbar-field-nova.png"
          />
        </p>
        <p>
          Firefox 156 und früher:
          <img alt="Firefox ist schwarz. Tab, Suchleiste und URL-Leiste sind heller grau mit weißem Text und weißen Symbolen. Der Hintergrund der URL-Leiste ist rot. Die Suchleiste ist weiß mit schwarzem Text; ihr Suchfeld ist rot mit schwarzem Text." src="toolbar-field.png" />
        </p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_border</code></td>
      <td>
        <p>Die Rahmenfarbe von Feldern in der Symbolleiste.</p>
        <p>
          Sie bestimmt auch die Rahmenfarbe des Feldes
          <strong>Auf dieser Seite suchen</strong>.
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
        <p>
          Firefox 157 und höher (Nova):
          <img
            alt="Firefox ist schwarz. Tab, Suchleiste und URL-Leiste sind schwarz mit weißem Text und weißen Symbolen. Die URL-Leiste und das Suchfeld haben eine rote Umrandung."
            src="toolbar-field-border-nova.png"
          />
        </p>
        <p>
          Firefox 156 und früher:
          <img alt="Firefox ist schwarz. Tab, Suchleiste und URL-Leiste sind schwarz mit weißem Text und weißen Symbolen. Die URL-Leiste und das Suchfeld haben eine rote Umrandung." src="toolbar-field-border.png" />
        </p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_border_focus</code></td>
      <td>
        <p>Die Rahmenfarbe fokussierter Felder in der Symbolleiste.</p>
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
        <p>
          Firefox 157 und höher (Nova):
          <img
            alt="Firefox ist schwarz. Tab und URL-Leiste sind schwarz mit weißem Text und weißen Symbolen. Das Feld der URL-Leiste ist fokussiert und rot umrandet."
            src="theme-toolbar_field_border_focus-nova.png"
          />
        </p>
        <p>
          Firefox 156 und früher:
          <img alt="Firefox ist schwarz. Tab und URL-Leiste sind schwarz mit weißem Text und weißen Symbolen. Das Feld der URL-Leiste ist fokussiert und rot umrandet." src="theme-toolbar_field_border_focus.png" />
        </p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_focus</code></td>
      <td>
        <p>
          Die Hintergrundfarbe fokussierter Felder in der Symbolleiste, etwa
          der URL-Leiste.
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
        <p>
          Firefox 157 und höher (Nova):
          <img
            alt="Firefox ist schwarz. Tab, Suchleiste und URL-Leiste sind schwarz mit weißem Text und weißen Symbolen. Die fokussierte URL-Leiste hat einen roten Hintergrund und weißen Text."
            src="theme-toolbar_field_focus-nova.png"
          />
        </p>
        <p>
          Firefox 156 und früher:
          <img alt="Firefox ist schwarz. Tab, Suchleiste und URL-Leiste sind schwarz mit weißem Text und weißen Symbolen. Die fokussierte URL-Leiste hat einen roten Hintergrund und weißen Text." src="theme-toolbar_field_focus.png" />
        </p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_highlight</code></td>
      <td>
        Die Hintergrundfarbe zur Kennzeichnung von aktuell ausgewähltem Text
        in der URL-Leiste (und in der Suchleiste, falls diese als separates
        Feld konfiguriert ist).
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
          Firefox 157 und höher (Nova):
          <img
            alt="Firefox ist weiß. Tab und URL-Leiste sind weiß mit schwarzem Text und schwarzen Symbolen. Das Feld der URL-Leiste ist fokussiert, blau umrandet und sein Text ist ausgewählt."
            src="toolbar_field_highlight-nova.png"
          />
        </p>
        <p>
          Firefox 156 und früher:
          <img
            alt="Firefox ist weiß. Tab und URL-Leiste sind weiß mit schwarzem Text und schwarzen Symbolen. Das Feld der URL-Leiste ist fokussiert, blau umrandet und sein Text ist ausgewählt."
            src="toolbar_field_highlight.png"
          />
        </p>
        <p>
          Hier legt <code>toolbar_field_highlight</code> ein helles Grün als
          Hervorhebungsfarbe fest, während
          <code>toolbar_field_highlight_text</code> den Text auf ein dunkles
          bis mittleres Grün setzt.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_highlight_text</code></td>
      <td>
        <p>
          Die Farbe des aktuell ausgewählten Textes in der URL-Leiste (und in
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
          Firefox 157 und höher (Nova):
          <img
            alt="Firefox ist weiß. Tab und URL-Leiste sind weiß mit schwarzem Text und schwarzen Symbolen. Das Feld der URL-Leiste ist fokussiert, blau umrandet und sein Text ist ausgewählt."
            src="toolbar_field_highlight-nova.png"
          />
        </p>
        <p>
          Firefox 156 und früher:
          <img
            alt="Firefox ist weiß. Tab und URL-Leiste sind weiß mit schwarzem Text und schwarzen Symbolen. Das Feld der URL-Leiste ist fokussiert, blau umrandet und sein Text ist ausgewählt."
            src="toolbar_field_highlight.png"
          />
        </p>
        <p>
          Hier setzt <code>toolbar_field_highlight_text</code> die Textfarbe
          auf ein dunkles Grün, während die Hervorhebungsfarbe hellgrün ist.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_separator</code> {{Deprecated_Inline}}</td>
      <td>
        <div class="notecard warning">
          <p>
            <strong>Warnung:</strong> <code>toolbar_field_separator</code>
            wird seit Firefox 89 nicht mehr unterstützt.
          </p>
        </div>
        <p>
          Die Farbe der Trennlinien innerhalb der URL-Leiste. In Firefox 58
          wurde dies als <code>toolbar_vertical_separator</code> implementiert.
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
        <p>
          Firefox 157 und höher (Nova):
          <img
            alt="Screenshot eines Browserfensters mit einem geöffneten Tab. Firefox ist schwarz. Tab und URL-Leiste sind schwarz mit weißem Text und weißen Symbolen. Im weißen Feld der URL-Leiste trennt eine rote vertikale Linie nach dem Lesemodus-Symbol die übrigen Symbole ab."
            src="theme-toolbar_field_separator-nova.png"
          />
        </p>
        <p>
          Firefox 156 und früher:
          <img alt="Screenshot eines Browserfensters mit einem geöffneten Tab. Firefox ist schwarz. Tab und URL-Leiste sind schwarz mit weißem Text und weißen Symbolen. Im weißen Feld der URL-Leiste trennt eine rote vertikale Linie nach dem Lesemodus-Symbol die übrigen Symbole ab." src="theme-toolbar_field_separator.png" />
        </p>
        <p>
          In diesem Screenshot ist <code>"toolbar_vertical_separator"</code>
          die rote vertikale Linie in der URL-Leiste, die das Lesemodus-Symbol
          von den anderen Symbolen trennt.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_text</code></td>
      <td>
        <p>
          Die Textfarbe von Feldern in der Symbolleiste, etwa der URL-Leiste.
          Sie bestimmt auch die Textfarbe des Feldes
          <strong>Auf dieser Seite suchen</strong>.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Achten Sie darauf, dass die verwendete
            Farbe einen guten Kontrast zu <code>toolbar_field</code> bietet.
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
        <p>
          Firefox 157 und höher (Nova):
          <img
            alt="Screenshot eines Browserfensters mit einem geöffneten Tab. Der Browser ist schwarz. Tab und URL-Leiste sind schwarz mit weißem Text und weißen Symbolen. Der Text in der URL-Leiste ist rot. Auch das Suchfeld zeigt roten Text auf schwarzem Hintergrund."
            src="toolbar-field-text-nova.png"
          />
        </p>
        <p>
          Firefox 156 und früher:
          <img alt="Screenshot eines Browserfensters mit einem geöffneten Tab. Der Browser ist schwarz. Tab und URL-Leiste sind schwarz mit weißem Text und weißen Symbolen. Der Text in der URL-Leiste ist rot. Auch das Suchfeld zeigt roten Text auf schwarzem Hintergrund." src="toolbar-field-text.png" />
        </p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_text_focus</code></td>
      <td>
        <p>
          Die Textfarbe fokussierter Felder in der Symbolleiste, etwa der
          URL-Leiste.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Achten Sie darauf, dass die verwendete
            Farbe einen guten Kontrast zu <code>toolbar_field_focus</code>
            bietet.
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
        <p>
          Firefox 157 und höher (Nova):
          <img
            alt="Screenshot eines Browserfensters mit zwei geöffneten Tabs. Der Browser ist schwarz. Tab und URL-Leiste sind schwarz mit weißem Text und weißen Symbolen. Die URL-Leiste ist fokussiert; ihr Text und ihre Symbole sind rot auf schwarzem Hintergrund."
            src="theme-toolbar_field_text_focus-nova.png"
          />
        </p>
        <p>
          Firefox 156 und früher:
          <img alt="Screenshot eines Browserfensters mit zwei geöffneten Tabs. Der Browser ist schwarz. Tab und URL-Leiste sind schwarz mit weißem Text und weißen Symbolen. Die URL-Leiste ist fokussiert; ihr Text und ihre Symbole sind rot auf schwarzem Hintergrund." src="theme-toolbar_field_text_focus.png" />
        </p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_text</code></td>
      <td>
        <p>
          Die Textfarbe der Symbolleiste. Sie bestimmt auch die Textfarbe der
          Suchleiste.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Verwenden Sie für die Kompatibilität mit
            Chrome den Alias <code>bookmark_text</code>.
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
        <p>
          Firefox 157 und höher (Nova):
          <img
            alt="Screenshot eines Browserfensters mit einem geöffneten Tab. Der Browser ist schwarz. Tab, Suchleiste und URL-Leiste sind schwarz mit rotem Text und roten Symbolen. Der Text im aktiven Tab, in der Navigationsleiste und in der Suchleiste ist rot."
            src="toolbar-text-nova.png"
          />
        </p>
        <p>
          Firefox 156 und früher:
          <img alt="Screenshot eines Browserfensters mit einem geöffneten Tab. Der Browser ist schwarz. Tab, Suchleiste und URL-Leiste sind schwarz mit rotem Text und roten Symbolen. Der Text im aktiven Tab, in der Navigationsleiste und in der Suchleiste ist rot." src="toolbar-text.png" />
        </p>
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
        <p>
          Firefox 157 und höher (Nova):
          <img
            alt="Screenshot eines Browserfensters mit einem geöffneten Tab. Der Browser ist schwarz. Tab und URL-Leiste sind schwarz mit weißem Text und weißen Symbolen. Eine rote Linie trennt den oberen Rand der URL-Leiste vom darüberliegenden Browserbereich."
            src="theme-toolbar_top_separator-nova.png"
          />
        </p>
        <p>
          Firefox 156 und früher:
          <img alt="Screenshot eines Browserfensters mit einem geöffneten Tab. Der Browser ist schwarz. Tab und URL-Leiste sind schwarz mit weißem Text und weißen Symbolen. Eine rote Linie trennt den oberen Rand der URL-Leiste vom darüberliegenden Browserbereich." src="theme-toolbar_top_separator.png" />
        </p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_vertical_separator</code></td>
      <td>
        <p>
          Die Farbe der Trennlinie in der Lesezeichen-Symbolleiste. In
          Firefox 58 entspricht sie der Farbe der Trennlinien innerhalb der
          URL-Leiste.
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
        <p>
          Firefox 157 und höher (Nova):
          <img
            alt="Screenshot eines Browserfensters mit einem geöffneten Tab. Der Browser ist schwarz. Tab und URL-Leiste sind schwarz mit weißem Text und weißen Symbolen. Die vertikale Linie, die die Lesezeichen-Symbolleiste vom Inhalt rechts daneben trennt, ist rot."
            src="theme-toolbar_vertical_separator-nova.png"
          />
        </p>
        <p>
          Firefox 156 und früher:
          <img alt="Screenshot eines Browserfensters mit einem geöffneten Tab. Der Browser ist schwarz. Tab und URL-Leiste sind schwarz mit weißem Text und weißen Symbolen. Die vertikale Linie, die die Lesezeichen-Symbolleiste vom Inhalt rechts daneben trennt, ist rot." src="theme-toolbar_vertical_separator.png" />
        </p>
      </td>
    </tr>
  </tbody>
</table>

#### Aliase

Dieser Schlüssel akzeptiert außerdem verschiedene Eigenschaften als Aliase für die oben genannten Eigenschaften. Sie dienen der Kompatibilität mit Chrome. Wenn sowohl ein Alias als auch die entsprechende Eigenschaft ohne Alias angegeben sind, wird der Wert der Eigenschaft ohne Alias verwendet.

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
        <p><code>Array</code> aus <code>String</code></p>
      </td>
      <td>
        <p>Optional</p>
        <p>
          Ein Array aus Aufzählungswerten, das die Ausrichtung des jeweiligen
          Eintrags im Array <code>"additional_backgrounds":</code>
          definiert.<br />Folgende Ausrichtungen sind möglich:
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
          Enthält das Array weniger Einträge als
          <code>additional_backgrounds</code>, werden seine Werte für die
          fehlenden Einträge erneut verwendet. Wenn
          <code>additional_backgrounds</code> beispielsweise 5 Werte und
          <code>additional_backgrounds_alignment</code> die Werte
          <code>["left", "top"]</code> enthält, wird der dritte
          Hintergrundeintrag mit <code>"left"</code>, der vierte mit
          <code>"top"</code> und der fünfte wieder mit <code>"left"</code>
          ausgerichtet.
        </p>
        <p>Wenn nichts angegeben ist, gilt standardmäßig <code>"right top"</code>.</p>
      </td>
    </tr>
    <tr>
      <td><code>additional_backgrounds_tiling</code></td>
      <td>
        <p><code>Array</code> aus <code>String</code></p>
      </td>
      <td>
        <p>Optional</p>
        <p>
          Ein Array aus Aufzählungswerten, das festlegt, wie der jeweilige
          Eintrag im Array <code>"additional_backgrounds":</code> wiederholt
          wird. Folgende Werte sind möglich:
        </p>
        <ul>
          <li><code>"no-repeat"</code></li>
          <li><code>"repeat"</code></li>
          <li><code>"repeat-x"</code></li>
          <li><code>"repeat-y"</code></li>
        </ul>
        <p>
          Enthält das Array weniger Einträge als
          <code>additional_backgrounds</code>, werden seine Werte für die
          fehlenden Einträge erneut verwendet. Wenn
          <code>additional_backgrounds</code> beispielsweise 5 Werte und
          <code>additional_backgrounds_tiling</code> die Werte
          <code>["no-repeat", "repeat-x"]</code> enthält, wird der dritte
          Hintergrundeintrag mit <code>"no-repeat"</code>, der vierte mit
          <code>"repeat-x"</code> und der fünfte wieder mit
          <code>"no-repeat"</code> gekachelt.
        </p>
        <p>Wenn nichts angegeben ist, gilt standardmäßig <code>"no-repeat"</code>.</p>
      </td>
    </tr>
    <tr>
      <td><code>additional_backgrounds_size</code></td>
      <td>
        <p><code>Array</code> aus <code>String</code></p>
      </td>
      <td>
        <p>Optional</p>
        <p>
          Ein Array aus Werten, das die Größe des jeweiligen Eintrags im Array
          <code>"additional_backgrounds":</code> definiert. Es akzeptiert
          dieselben Werte wie die CSS-Eigenschaft
          <a href="/de/docs/Web/CSS/Reference/Properties/background-size"><code>background-size</code></a>,
          beispielsweise <code>"auto"</code>, <code>"cover"</code>,
          <code>"contain"</code> oder explizite Werte für Breite und Höhe
          (etwa <code>"100px 200px"</code>).
        </p>
        <p>
          Enthält das Array weniger Einträge als
          <code>additional_backgrounds</code>, werden seine Werte für die
          fehlenden Einträge erneut verwendet. Wenn
          <code>additional_backgrounds</code> beispielsweise 5 Werte und
          <code>additional_backgrounds_size</code> die Werte
          <code>["auto", "100px 100px"]</code> enthält, wird die Größe des
          dritten Hintergrundeintrags mit <code>"auto"</code>, die des vierten
          mit <code>"100px 100px"</code> und die des fünften wieder mit
          <code>"auto"</code> festgelegt.
        </p>
        <p>Wenn nichts angegeben ist, gilt standardmäßig <code>"auto"</code>.</p>
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
          Hintergrundbilder und Farbverläufe des Themes dargestellt werden.
          Folgende Werte sind möglich:
        </p>
        <ul>
          <li>
            <code>"auto"</code> – Firefox wählt den Bereich anhand von
            <code>additional_backgrounds_alignment</code>. Wenn ein
            Ausrichtungswert einen Hintergrund vertikal in der Mitte oder am
            unteren Rand des Kopfbereichs positioniert, werden die
            Hintergründe in den oberen Symbolleisten dargestellt. Andernfalls
            werden sie im gesamten Fenster dargestellt.
          </li>
          <li>
            <code>"window"</code> – die Hintergründe werden im gesamten
            Browserfenster dargestellt und erstrecken sich damit auch hinter
            vertikale Bedienelemente wie die Seitenleiste und vertikale Tabs.
          </li>
          <li>
            <code>"top_toolbars"</code> – die Hintergründe werden nur in den
            horizontalen Symbolleisten am oberen Fensterrand dargestellt, also
            in der Menüleiste, der Tab-Leiste, der Navigationsleiste und der
            Lesezeichen-Symbolleiste. Vertikale Bedienelemente wie die
            Seitenleiste verwenden stattdessen die Farbe <code>frame</code>.
          </li>
        </ul>
        <p>Wenn nichts angegeben ist, gilt standardmäßig <code>"auto"</code>.</p>
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
          Bestimmt, welches Farbschema auf die Browseroberfläche (beispielsweise
          Kontextmenüs) und auf Inhalte (beispielsweise integrierte Seiten und
          das bevorzugte Farbschema für Webseiten) angewendet wird. Folgende
          Werte sind möglich:
        </p>
        <ul>
          <li><code>"auto"</code> – ein automatisch anhand des Themes gewähltes helles oder dunkles Farbschema.</li>
          <li><code>"light"</code> – ein helles Farbschema.</li>
          <li><code>"dark"</code> – ein dunkles Farbschema.</li>
          <li><code>"system"</code> – verwendet das Farbschema des Systems.</li>
        </ul>
        <p>Wenn nichts angegeben ist, gilt standardmäßig <code>"auto"</code>.</p>
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
          Bestimmt, welches Farbschema auf Inhalte angewendet wird,
          beispielsweise auf integrierte Seiten und das bevorzugte Farbschema
          für Webseiten. Überschreibt <code>color_scheme</code>. Folgende
          Werte sind möglich:
        </p>
        <ul>
          <li><code>"auto"</code> – ein automatisch anhand des Themes gewähltes helles oder dunkles Farbschema.</li>
          <li><code>"light"</code> – ein helles Farbschema.</li>
          <li><code>"dark"</code> – ein dunkles Farbschema.</li>
          <li><code>"system"</code> – das Farbschema des Systems.</li>
        </ul>
        <p>Wenn nichts angegeben ist, gilt standardmäßig <code>"auto"</code>.</p>
      </td>
    </tr>
  </tbody>
</table>

## Beispiele

Ein einfaches Theme muss ein Bild für den Kopfbereich, die dort zu verwendende Akzentfarbe und die Textfarbe für den Kopfbereich definieren:

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

Sie können mehrere Einträge verwenden, um den Kopfbereich auszufüllen. Verwenden Sie vor Firefox 60 ein leeres oder transparentes Bild für den Kopfbereich, um die Platzierung jedes zusätzlichen Eintrags steuern zu können:

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

Sie können den Kopfbereich auch mit einem oder mehreren wiederholten Bildern ausfüllen. In diesem Fall wird ein einzelnes Bild oben mittig im Kopfbereich verankert und über den restlichen Kopfbereich wiederholt:

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

Das Ergebnis sieht so aus:

Firefox 157 und höher (Nova):

![Browserfenster mit zwei geöffneten Tabs und dunkelgrünem Hintergrund im Kopfbereich. Der inaktive Tab hat weißen Text. Der aktive Tab und die Symbolleiste haben einen blauen Hintergrund mit türkisfarbenem Text. Die URL-Leiste hat einen orangefarbenen Hintergrund mit weißen Rahmen, grünen Text und eine weiße vertikale Trennlinie. Eine rote Linie trennt die Tabs oben voneinander und eine weiße Linie trennt sie vom darunterliegenden Inhalt.](theme-nova.png)

Firefox 156 und früher:

![Browserfenster mit zwei geöffneten Tabs und dunkelgrünem Hintergrund im Kopfbereich. Der inaktive Tab hat weißen Text. Der aktive Tab und die Symbolleiste haben einen blauen Hintergrund mit türkisfarbenem Text. Die URL-Leiste hat einen orangefarbenen Hintergrund mit weißen Rahmen, grünen Text und eine weiße vertikale Trennlinie. Eine rote Linie trennt die Tabs oben voneinander und eine weiße Linie trennt sie vom darunterliegenden Inhalt.](theme.png)

In diesem Screenshot ist `"toolbar_vertical_separator"` die weiße vertikale Linie in der URL-Leiste, die das Lesemodus-Symbol von den anderen Symbolen trennt.

Dieses Beispiel (Firefox 153 und höher) kombiniert Bildhintergründe mit einem linearen CSS-Farbverlauf:

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
- Der `linear-gradient` beginnt oben rechts, wird horizontal über den Kopfbereich gekachelt (`repeat-x`) und auf eine Höhe von 144px skaliert (die Breite wird automatisch bestimmt). Der Farbverlauf geht von Rosa (`#FF6BBA`) oben zu Pfirsichfarben (`#FFC999`) unten über.

Dieses Beispiel (Firefox 156 und höher) beschränkt den Hintergrundfarbverlauf auf die horizontalen Symbolleisten am oberen Fensterrand, sodass er sich nicht hinter die Seitenleiste oder vertikale Tabs erstreckt. Ohne `backgrounds_area` führt die Ausrichtung `"right top"` dazu, dass Firefox den Farbverlauf im gesamten Fenster darstellt:

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

Wenn `backgrounds_area` auf `"top_toolbars"` gesetzt ist, verwendet die Seitenleiste die Farbe `frame`. Wenn Sie `backgrounds_area` stattdessen auf `"window"` setzen, erstreckt sich der Farbverlauf über das gesamte Fenster, einschließlich des Bereichs hinter der Seitenleiste.

## Browser-Kompatibilität

{{Compat}}

### Chrome-Kompatibilität

In Chrome:

- `colors/toolbar_text` wird nicht verwendet; verwenden Sie stattdessen `colors/bookmark_text`.
- `images/theme_frame` richtet das Bild an der oberen linken Ecke des Kopfbereichs aus. Wenn das Bild den Kopfbereich nicht ausfüllt, wird es gekachelt.
- Alle Farben müssen als Array aus RGB-Werten angegeben werden, zum Beispiel:

  ```json
  "theme": {
    "colors": {
       "frame": [255, 0, 0],
       "tab_background_text": [0, 255, 0],
       "bookmark_text": [0, 0, 255]
    }
  }
  ```

  Ab Firefox 59 werden für alle Eigenschaften sowohl die Array-Form als auch die CSS-Farbform akzeptiert. Davor war für `colors/frame` und `colors/tab_background_text` die Array-Form erforderlich, während für andere Eigenschaften die CSS-Farbform erforderlich war.
