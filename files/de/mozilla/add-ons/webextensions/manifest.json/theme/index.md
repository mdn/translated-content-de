---
title: theme
slug: Mozilla/Add-ons/WebExtensions/manifest.json/theme
l10n:
  sourceCommit: fae82294676474f14263164c0270a51cbd736969
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

Verwenden Sie den Schlüssel `theme`, um ein statisches Theme für Firefox festzulegen. Wenn nur dieser Schlüssel angegeben wird, definiert er das Theme, das Firefox sowohl beim hellen als auch beim dunklen Farbschema verwendet. Wenn der [Schlüssel `dark_theme`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/dark_theme) angegeben ist, legt `theme` das Theme für das helle Farbschema fest.

> [!NOTE]
> Wenn Sie einer Erweiterung ein Theme hinzufügen möchten, lesen Sie die Dokumentation zur API {{WebExtAPIRef("theme")}}.

> [!NOTE]
> Seit Mai 2019 müssen Themes signiert sein, damit sie installiert werden können ([Firefox-Bug 1545109](https://bugzil.la/1545109)). Weitere Informationen finden Sie unter [Ihr Add-on signieren und verteilen](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/#distributing-your-addon).

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
          Ein JSON-Objekt, dessen Eigenschaften die Bilder für verschiedene
          Bereiche des Browsers festlegen. Unter
          <code><a href="#images">images</a></code> finden Sie Einzelheiten
          zu den möglichen Eigenschaften dieses Objekts.
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
          Bereiche des Browsers festlegen. Unter
          <code><a href="#colors">colors</a></code> finden Sie Einzelheiten
          zu den möglichen Eigenschaften dieses Objekts.
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
          Einträge unter <code>"additional_backgrounds"</code> angezeigt und
          Farbschemata angewendet werden. Unter
          <code><a href="#properties">properties</a></code> finden Sie
          Einzelheiten zu den möglichen Eigenschaften dieses Objekts.
        </p>
      </td>
    </tr>
  </tbody>
</table>

### images

Alle URLs sind relativ zur Datei manifest.json und dürfen nicht auf eine externe URL verweisen.

Bilder sollten 200 Pixel hoch sein, damit sie den Kopfbereich vertikal immer vollständig ausfüllen.

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
          Ein Vordergrundbild (angegeben durch den Pfad zu einer in der Erweiterung
          enthaltenen Bilddatei) oder ein
          <a href="#css_gradient_syntax">CSS-Farbverlauf</a>, das beziehungsweise
          der zum Kopfbereich hinzugefügt und an dessen oberer rechter Ecke
          verankert wird. CSS-Farbverläufe werden ab Firefox 153 unterstützt.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Chrome verankert das Bild oben links im
            Kopfbereich und wiederholt es kachelartig, wenn es den Kopfbereich
            nicht vollständig ausfüllt.
          </p>
        </div>
        <p>
          Ab Firefox 60 für Desktop-Systeme optional.
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
            in veröffentlichten Firefox-Versionen unterstützt, ihr Verhalten
            kann sich jedoch ändern.
          </p>
        </div>
        <p>
          Ein Array zusätzlicher Hintergründe. Jeder Eintrag ist entweder der
          Pfad zu einer in der Erweiterung enthaltenen Bilddatei oder ein
          <a href="#css_gradient_syntax">CSS-Farbverlauf</a>. Die Einträge
          werden dem Kopfbereich hinzugefügt und hinter dem Eintrag
          <code>"theme_frame":</code> angezeigt. Der erste Eintrag des Arrays
          liegt dabei ganz oben, der letzte ganz unten. CSS-Farbverläufe werden
          ab Firefox 153 unterstützt.
        </p>
        <p>Optional</p>
        <p>
          Standardmäßig sind alle Einträge an der oberen rechten Ecke des
          Kopfbereichs verankert. Ihre Ausrichtung, Wiederholung und Größe
          sowie der Bereich des Browserfensters, in dem sie gezeichnet werden,
          lassen sich jedoch über
          <a href="#properties"><code>"properties":</code></a> steuern.
        </p>
        <p>
          Da zusätzliche Hintergründe hinter dem Eintrag
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
- `GRADIENT_PARAMS` enthält die Parameter der jeweiligen CSS-Farbverlaufsfunktion, wie unter [CSS-Farbverlaufswerte](/de/docs/Web/CSS/Reference/Values/gradient) beschrieben.

### colors

Diese Eigenschaften legen die Farben verschiedener Bereiche des Browsers fest. Sie sind alle optional.

> [!NOTE]
> Farbeigenschaften, die mit Firefox 157 (Nova) eingeführt wurden, werden in früheren Firefox-Versionen ignoriert. Verwenden Sie `strict_min_version` für Themes, die nur für Nova vorgesehen sind.

Wie sich diese Eigenschaften auf die Firefox-Benutzeroberfläche auswirken, ist hier dargestellt:

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <td>
        <p>
          Firefox 157 und neuer (Nova):
          <img
            alt="Übersicht der Farbeigenschaften und ihrer Anwendung auf Komponenten der Firefox-Benutzeroberfläche in Nova"
            src="themes_components_annotations-nova.webp"
          />
        </p>
        <p>
          Firefox 156 und älter:
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
          Die Farbe von Text und Symbolen in der Lesezeichen- und der Suchleiste.
          Wenn <code>tab_text</code> nicht definiert ist, legt sie außerdem
          die Textfarbe des aktiven Tabs fest; wenn <code>icons</code> nicht
          definiert ist, die Farbe der Symbolleisten-Symbole. Die Eigenschaft
          dient als Chrome-kompatibler Alias für <code>toolbar_text</code>.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Achten Sie darauf, dass die verwendete
            Farbe einen guten Kontrast zu <code>frame</code> und
            <code>frame_inactive</code> beziehungsweise zu
            <code>toolbar</code> bietet, falls Sie diese Eigenschaft verwenden.
          </p>
          <p>
            Wenn <code>icons</code> nicht definiert ist, achten Sie außerdem
            auf einen guten Kontrast zu <code>button_background_active</code>
            und <code>button_background_hover</code>.
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
          Firefox 157 und neuer (Nova):
          <img
            alt="Firefox ist schwarz. Der Tab ist schwarz und hat weißen Text. Die Adressleiste und die Seiten-Suchleiste sind weiß und haben schwarzen Text; alle Browser- und Suchleisten-Symbole sind jedoch rot."
            src="theme-bookmark_text-nova.png"
          />
        </p>
        <p>
          Firefox 156 und älter:
          <img
            alt="Firefox ist schwarz. Der Tab ist schwarz und hat weißen Text. Die Adressleiste und die Seiten-Suchleiste sind weiß und haben schwarzen Text; alle Browser- und Suchleisten-Symbole sind jedoch rot."
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
        <p>
          Firefox 157 und neuer (Nova):
          <img
            alt="Firefox ist schwarz. Die Tabs und die Adressleiste sind grau und haben weißen Text. Das weiße Symbol zum Anpassen der Symbolleiste in der Adressleiste ist auf rotem Hintergrund gedrückt. Ein geöffnetes Popup zeigt eine kurze Liste von Elementen, die der Symbolleiste hinzugefügt werden können, etwa die Bibliothek und die Sidebars."
            src="theme-button_background_active-nova.png"
          />
        </p>
        <p>
          Firefox 156 und älter:
          <img alt="Firefox ist schwarz. Die Tabs und die Adressleiste sind grau und haben weißen Text. Das weiße Symbol zum Anpassen der Symbolleiste in der Adressleiste ist auf rotem Hintergrund gedrückt. Ein geöffnetes Popup zeigt eine kurze Liste von Elementen, die der Symbolleiste hinzugefügt werden können, etwa die Bibliothek und die Sidebars." src="theme-button_background_active.png" />
        </p>
      </td>
    </tr>
    <tr>
      <td><code>button_background_hover</code></td>
      <td>
        <p>Die Hintergrundfarbe von Schaltflächen in der Symbolleiste, wenn sich der Mauszeiger darüber befindet.</p>
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
        <p>
          Firefox 157 und neuer (Nova):
          <img
            alt="Firefox ist schwarz. Die Tabs und die Adressleiste sind grau und haben weißen Text. Das weiße Symbol zum Zurückgehen um eine Seite hat einen roten, kreisförmigen Hintergrund."
            src="theme-button_background_hover-nova.png"
          />
        </p>
        <p>
          Firefox 156 und älter:
          <img alt="Firefox ist schwarz. Die Tabs und die Adressleiste sind grau und haben weißen Text. Das weiße Symbol zum Zurückgehen um eine Seite hat einen roten, kreisförmigen Hintergrund." src="theme-button_background_hover.png" />
        </p>
      </td>
    </tr>
    <tr>
      <td><code>icons</code></td>
      <td>
        <p>Die Farbe der Symbole in der Symbolleiste, ausgenommen die Symbole in der Suchleiste.</p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Achten Sie darauf, dass die verwendete
            Farbe einen guten Kontrast zu <code>frame</code>,
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
        <p>
          Firefox 157 und neuer (Nova):
          <img
            alt="Firefox ist schwarz. Die Tabs und die Adressleiste sind grau und haben weißen Text. Die Symbole in der Adressleiste und zum Öffnen eines neuen Tabs sind rot. Die roten Symbole heben sich gut vom schwarzen Hintergrund des Kopfbereichs ab."
            src="theme-icons-nova.png"
          />
        </p>
        <p>
          Firefox 156 und älter:
          <img alt="Firefox ist schwarz. Die Tabs und die Adressleiste sind grau und haben weißen Text. Die Symbole in der Adressleiste und zum Öffnen eines neuen Tabs sind rot. Die roten Symbole heben sich gut vom schwarzen Hintergrund des Kopfbereichs ab." src="theme-icons.png" />
        </p>
      </td>
    </tr>
    <tr>
      <td><code>icons_attention</code></td>
      <td>
        <p>
          Die Farbe von Symbolleisten-Symbolen im Aufmerksamkeitszustand,
          beispielsweise des mit einem Stern markierten Lesezeichen-Symbols
          oder des Symbols für einen abgeschlossenen Download.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Achten Sie darauf, dass die verwendete
            Farbe einen guten Kontrast zu <code>frame</code>,
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
        <p>
          Firefox 157 und neuer (Nova):
          <img
            alt="Firefox ist schwarz. Die Tabs und die Adressleiste sind grau und haben weißen Text. Das rote Symbol zum Setzen eines Lesezeichens ist gedrückt; das Popup zum Bearbeiten des Lesezeichens ist geöffnet. Im Aufmerksamkeitszustand heben sich die Symbole gut vom schwarzen Hintergrund des Kopfbereichs ab."
            src="theme-icons_attention-nova.png"
          />
        </p>
        <p>
          Firefox 156 und älter:
          <img alt="Firefox ist schwarz. Die Tabs und die Adressleiste sind grau und haben weißen Text. Das rote Symbol zum Setzen eines Lesezeichens ist gedrückt; das Popup zum Bearbeiten des Lesezeichens ist geöffnet. Im Aufmerksamkeitszustand heben sich die Symbole gut vom schwarzen Hintergrund des Kopfbereichs ab." src="theme-icons_attention.png" />
        </p>
      </td>
    </tr>
    <tr>
      <td><code>frame</code></td>
      <td>
        <p>
          Die Hintergrundfarbe des Kopfbereichs. Sie wird dort angezeigt, wo
          der Kopfbereich nicht von den unter <code>"theme_frame"</code> und
          <code>"additional_backgrounds"</code> angegebenen Einträgen
          bedeckt ist oder durch diese hindurch sichtbar bleibt.
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
        <p>
          Firefox 157 und neuer (Nova):
          <img
            alt="Firefox ist rot und hat weißen Text. Die Tabs sind heller rot und haben ebenfalls weißen Text. Die Adressleiste ist sehr hellrot und hat schwarzen Text."
            src="theme-frame-nova.png"
          />
        </p>
        <p>
          Firefox 156 und älter:
          <img alt="Firefox ist rot und hat weißen Text. Die Tabs sind heller rot und haben ebenfalls weißen Text. Die Adressleiste ist sehr hellrot und hat schwarzen Text." src="theme-frame.png" />
        </p>
      </td>
    </tr>
    <tr>
      <td><code>frame_inactive</code></td>
      <td>
        <p>
          Die Hintergrundfarbe des Kopfbereichs bei einem inaktiven
          Browserfenster. Sie wird dort angezeigt, wo der Kopfbereich nicht
          von den unter <code>"theme_frame"</code> und
          <code>"additional_backgrounds"</code> angegebenen Einträgen
          bedeckt ist oder durch diese hindurch sichtbar bleibt.
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
          Firefox 157 und neuer (Nova):
          <img
            alt="Firefox ist grau. Die Tabs und die Adressleiste sind heller grau. Der Tab-Text ist weiß, und die Symbole in der Adressleiste sind dunkler grau."
            src="theme-frame_inactive-nova.png"
          />
        </p>
        <p>
          Firefox 156 und älter:
          <img
            alt="Firefox ist grau. Die Tabs und die Adressleiste sind heller grau. Der Tab-Text ist weiß, und die Symbole in der Adressleiste sind dunkler grau."
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
          <summary>Beispiel anzeigen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "ntp_background": "red"
  }
}</pre
          >
        </details>
        <p>
          Firefox 157 und neuer (Nova):
          <img
            alt="Firefox zeigt eine Neuer-Tab-Seite mit rotem Hintergrund."
            src="ntp-background-nova.png"
          />
        </p>
        <p>
          Firefox 156 und älter:
          <img alt="Firefox zeigt eine Neuer-Tab-Seite mit rotem Hintergrund." src="ntp-background.png" />
        </p>
      </td>
    </tr>
    <tr>
      <td><code>ntp_card_background</code></td>
      <td>
        <p>Die Hintergrundfarbe der Karten auf der Neuer-Tab-Seite.</p>
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
        <p>
          Firefox 157 und neuer (Nova):
          <img
            alt="Firefox zeigt eine Neuer-Tab-Seite. Die Hintergründe des Suchfelds und der Verknüpfungsschaltflächen sind rot."
            src="ntp-card-background-nova.png"
          />
        </p>
        <p>
          Firefox 156 und älter:
          <img alt="Firefox zeigt eine Neuer-Tab-Seite. Die Hintergründe des Suchfelds und der Verknüpfungsschaltflächen sind rot." src="ntp-card-background.png" />
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
          <summary>Beispiel anzeigen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "ntp_text": "red"
  }
}</pre
          >
        </details>
        <p>
          Firefox 157 und neuer (Nova):
          <img
            alt="Firefox zeigt eine Neuer-Tab-Seite mit rotem Text."
            src="ntp-text-nova.png"
          />
        </p>
        <p>
          Firefox 156 und älter:
          <img alt="Firefox zeigt eine Neuer-Tab-Seite mit rotem Text." src="ntp-text.png" />
        </p>
      </td>
    </tr>
    <tr>
      <td><code>popup</code></td>
      <td>
        <p>
          Die Hintergrundfarbe von Popups, beispielsweise des Dropdown-Menüs
          der Adressleiste und der Pfeil-Panels.
        </p>
        <p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> In Firefox 157 und neuer (Nova) verwendet
            das Dropdown-Menü der Adressleiste weder <code>popup</code> noch
            <code>popup_text</code>, sondern behält die Standardfarben des
            Browsers bei.
          </p>
        </div>
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
        <p>
          Firefox 157 und neuer (Nova):
          <img
            alt="Firefox ist schwarz. Die Tabs und die Adressleiste sind heller grau und haben weiße Symbole und weißen Text. Das blaue Symbol zum Setzen eines Lesezeichens ist gedrückt. Das geöffnete Popup zum Bearbeiten des Lesezeichens hat einen roten Hintergrund."
            src="theme-popup-nova.png"
          />
        </p>
        <p>
          Firefox 156 und älter:
          <img alt="Firefox ist schwarz. Die Tabs und die Adressleiste sind heller grau und haben weiße Symbole und weißen Text. Das blaue Symbol zum Setzen eines Lesezeichens ist gedrückt. Das geöffnete Popup zum Bearbeiten des Lesezeichens hat einen roten Hintergrund." src="theme-popup.png" />
        </p>
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
        <p>
          Firefox 157 und neuer (Nova):
          <img
            alt="Firefox ist schwarz. Die Tabs und die Adressleiste sind heller grau und haben weiße Symbole und weißen Text. Das blaue Symbol zum Setzen eines Lesezeichens ist gedrückt. Das geöffnete Popup zum Bearbeiten des Lesezeichens hat einen schwarzen Hintergrund und einen roten Rahmen."
            src="theme-popup_border-nova.png"
          />
        </p>
        <p>
          Firefox 156 und älter:
          <img alt="Firefox ist schwarz. Die Tabs und die Adressleiste sind heller grau und haben weiße Symbole und weißen Text. Das blaue Symbol zum Setzen eines Lesezeichens ist gedrückt. Das geöffnete Popup zum Bearbeiten des Lesezeichens hat einen schwarzen Hintergrund und einen roten Rahmen." src="theme-popup_border.png" />
        </p>
      </td>
    </tr>
    <tr>
      <td><code>popup_highlight</code></td>
      <td>
        <p>
          Die Hintergrundfarbe von Einträgen, die innerhalb von Popups per
          Tastatur hervorgehoben werden, beispielsweise eines ausgewählten
          Eintrags im Dropdown-Menü der Adressleiste.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Es wird empfohlen,
            <code>popup_highlight_text</code> festzulegen, um die
            Standardtextfarbe des Browsers auf verschiedenen Plattformen
            zu überschreiben.
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
        <p>
          Firefox 157 und neuer (Nova):
          <img
            alt="Screenshot von Firefox mit schwarzem Hintergrund. Die Tabs und die Adressleiste sind heller grau und haben weiße Symbole und weißen Text. Ein Popup mit Suchergebnissen ist geöffnet; der Hintergrund eines hervorgehobenen Eintrags ist rot."
            src="theme-popup_highlight-nova.png"
          />
        </p>
        <p>
          Firefox 156 und älter:
          <img alt="Screenshot von Firefox mit schwarzem Hintergrund. Die Tabs und die Adressleiste sind heller grau und haben weiße Symbole und weißen Text. Ein Popup mit Suchergebnissen ist geöffnet; der Hintergrund eines hervorgehobenen Eintrags ist rot." src="theme-popup_highlight.png" />
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
        <p>
          Firefox 157 und neuer (Nova):
          <img
            alt="Firefox ist schwarz. Die Tabs und die Adressleiste sind heller grau und haben weiße Symbole und weißen Text. In einem Popup mit Suchergebnissen hat ein hervorgehobener Eintrag roten Text auf schwarzem Hintergrund. Der Text hebt sich gut vom Hintergrund ab."
            src="theme-popup_highlight_text-nova.png"
          />
        </p>
        <p>
          Firefox 156 und älter:
          <img alt="Firefox ist schwarz. Die Tabs und die Adressleiste sind heller grau und haben weiße Symbole und weißen Text. In einem Popup mit Suchergebnissen hat ein hervorgehobener Eintrag roten Text auf schwarzem Hintergrund. Der Text hebt sich gut vom Hintergrund ab." src="theme-popup_highlight_text.png" />
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
            <strong>Hinweis:</strong> In Firefox 157 und neuer (Nova) verwendet
            das Dropdown-Menü der Adressleiste weder <code>popup</code> noch
            <code>popup_text</code>, sondern behält die Standardfarben des
            Browsers bei.
          </p>
        </div>
        </p>
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
        <p>
          Firefox 157 und neuer (Nova):
          <img
            alt="Firefox mit schwarzem Kopfbereich und weißem Tab-Text. Das Panel zum Hinzufügen eines Lesezeichens ist geöffnet. Es hat einen schwarzen Hintergrund sowie rote Beschriftungen, Felder und Schaltflächen."
            src="popup_text-nova.png"
          />
        </p>
        <p>
          Firefox 156 und älter:
          <img alt="Firefox ist schwarz. Die Tabs und die Adressleiste sind heller grau und haben weiße Symbole und weißen Text. Ein Popup mit Suchergebnissen zeigt rote Eintragstexte, die sich gut vom schwarzen Hintergrund des Popups abheben." src="popup_text.png" />
        </p>
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
        <p>
          Firefox 157 und neuer (Nova):
          <img
            alt="Nahaufnahme der geöffneten Sidebar eines Browserfensters. Der Hintergrund der Sidebar ist rot."
            src="sidebar-colors-nova.png"
          />
        </p>
        <p>
          Firefox 156 und älter:
          <img alt="Nahaufnahme der geöffneten Sidebar eines Browserfensters. Der Hintergrund der Sidebar ist rot." src="sidebar-colors.png" />
        </p>
      </td>
    </tr>
    <tr>
      <td><code>sidebar_border</code></td>
      <td>
        <p>Die Farbe des Rahmens und der Trennlinie der Browser-Sidebar.</p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> In Firefox 157 und neuer (Nova) enthält
            die neu gestaltete Sidebar keine Trennlinie mehr.
          </p>
        </div>
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
        <p>
          Firefox 157 und neuer (Nova):
          <img
            alt="Nahaufnahme der Lesezeichen-Sidebar in Firefox mit einer roten horizontalen Trennlinie zwischen dem Titel und dem Menü der Sidebar. Die Rahmen- und Trennlinienfarbe der Sidebar ist rot."
            src="sidebar-border-nova.png"
          />
        </p>
        <p>
          Firefox 156 und älter:
          <img alt="Nahaufnahme der Lesezeichen-Sidebar in Firefox mit einer roten horizontalen Trennlinie zwischen dem Titel und dem Menü der Sidebar. Die Rahmen- und Trennlinienfarbe der Sidebar ist rot." src="sidebar-border.png" />
        </p>
      </td>
    </tr>
    <tr>
      <td><code>sidebar_highlight</code></td>
      <td>
        <p>Die Hintergrundfarbe hervorgehobener Zeilen in integrierten Sidebars.</p>
        <p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> In Firefox 157 und neuer (Nova) behält
            eine hervorgehobene Zeile in der neu gestalteten Sidebar die
            Standardfarbe des Browsers bei. Diese Eigenschaft hat daher
            keine sichtbare Wirkung.
          </p>
        </div>
        </p>
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
        <p>
          Firefox 157 und neuer (Nova):
          <img
            alt="Die Lesezeichen-Sidebar mit einer hervorgehobenen Zeile. Statt des durch das Theme festgelegten Rots behält die Zeile den standardmäßigen lavendelfarbenen Hintergrund des Browsers."
            src="sidebar-highlight-nova.png"
          />
        </p>
        <p>
          Firefox 156 und älter:
          <img alt="Nahaufnahme der Lesezeichen-Sidebar in Firefox mit einem hervorgehobenen Eintrag. Die hervorgehobene Zeile hat einen roten Hintergrund und weißen Text." src="sidebar-highlight.png" />
        </p>
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
        <p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> In Firefox 157 und neuer (Nova) behält
            eine hervorgehobene Zeile in der neu gestalteten Sidebar die
            Standardtextfarbe des Browsers bei. Diese Eigenschaft hat daher
            keine sichtbare Wirkung.
          </p>
        </div>
        </p>
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
        <p>
          Firefox 157 und neuer (Nova):
          <img
            alt="Die Lesezeichen-Sidebar mit einer hervorgehobenen Zeile. Statt des durch das Theme festgelegten Rots behält die Beschriftung der Zeile die Standardfarbe des Browsers."
            src="sidebar-highlight-text-nova.png"
          />
        </p>
        <p>
          Firefox 156 und älter:
          <img alt="Nahaufnahme der Lesezeichen-Sidebar in Firefox mit einem hervorgehobenen Eintrag. Der Text der hervorgehobenen Zeile ist rot und hebt sich gut vom rosa Hintergrund ab." src="sidebar-highlight-text.png" />
        </p>
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
        <p>
          Firefox 157 und neuer (Nova):
          <img
            alt="Nahaufnahme der geöffneten Sidebar eines Browserfensters. Der Text in der Sidebar ist weiß und hebt sich gut vom roten Hintergrund ab."
            src="sidebar-colors-nova.png"
          />
        </p>
        <p>
          Firefox 156 und älter:
          <img alt="Nahaufnahme der geöffneten Sidebar eines Browserfensters. Der Text in der Sidebar ist weiß und hebt sich gut vom roten Hintergrund ab." src="sidebar-colors.png" />
        </p>
      </td>
    </tr>
    <tr>
      <td><code>tab_background_text</code></td>
      <td>
        <p>
          Die Farbe des Textes in inaktiven Tabs. Wenn weder
          <code>tab_text</code> noch <code>bookmark_text</code> angegeben ist,
          gilt sie auch für den Text des aktiven Tabs.
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
        <p>
          Firefox 157 und neuer (Nova):
          <img
            alt="Screenshot eines Browserfensters mit einem geöffneten Tab. Der Browser ist schwarz. Der Tab und die Adressleiste sind weiß und haben rote Symbole und roten Text. Der Text im geöffneten Tab ist rot und hebt sich gut vom schwarzen Hintergrund des Tabs ab."
            src="theme-tab_background_text-nova.png"
          />
        </p>
        <p>
          Firefox 156 und älter:
          <img alt="Screenshot eines Browserfensters mit einem geöffneten Tab. Der Browser ist schwarz. Der Tab und die Adressleiste sind weiß und haben rote Symbole und roten Text. Der Text im geöffneten Tab ist rot und hebt sich gut vom schwarzen Hintergrund des Tabs ab." src="theme-tab_background_text.png" />
        </p>
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
        <p>
          Firefox 157 und neuer (Nova):
          <img
            alt="Firefox ist schwarz. Die Tabs und die Adressleiste sind dunkelgrau und haben hellgraue Symbole und weißen Text. Der ausgewählte Tab hat eine rote Umrandung."
            src="theme-tab_line-nova.png"
          />
        </p>
        <p>
          Firefox 156 und älter:
          <img alt="Firefox ist schwarz. Die Tabs und die Adressleiste sind dunkelgrau und haben hellgraue Symbole und weißen Text. Der ausgewählte Tab hat eine rote Umrandung." src="theme-tab_line.png" />
        </p>
      </td>
    </tr>
    <tr>
      <td><code>tab_loading</code></td>
      <td>
        <p>Die Farbe der Ladeanzeige im Tab und der Animation beim Laden des Tabs.</p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> In Firefox 157 und neuer (Nova) behält
            die Ladeanzeige im Tab ihre Standardfarbe bei. Diese Eigenschaft
            hat daher keine sichtbare Wirkung.
          </p>
        </div>
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
        <p>
          Firefox 157 und neuer (Nova):
          <img
            alt="Firefox mit schwarzem Kopfbereich und weißem Tab-Text lädt eine Seite. Die Ladeanzeige im Tab ist standardmäßig grau statt des durch das Theme festgelegten Rots."
            src="theme-tab_loading-nova.png"
          />
        </p>
        <p>
          Firefox 156 und älter:
          <img alt="Screenshot eines Browserfensters mit einem geöffneten Tab. Der Browser ist schwarz. Der Tab und die Adressleiste sind dunkelgrau und haben weiße Symbole und weißen Text. Im ausgewählten Tab ist eine animierte rote Ladeanzeige zu sehen." src="theme-tab_loading.gif" />
        </p>
      </td>
    </tr>
    <tr>
      <td><code>tab_selected</code></td>
      <td>
        <p>
          Die Hintergrundfarbe des ausgewählten Tabs. Wenn diese Eigenschaft
          nicht verwendet wird, bestimmen <code>frame</code> und
          <code>frame_inactive</code> die Farbe des ausgewählten Tabs.
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> In Nova wurde der Schlagschatten des
            ausgewählten Tabs entfernt. Damit ausgewählte Tabs gut erkennbar
            bleiben, legen Sie für diese Eigenschaft eine Farbe fest, die
            einen Kontrast zu <code>frame</code> und
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
     "tab_selected": "red"
  }
}</pre
          >
        </details>
        <p>
          Firefox 157 und neuer (Nova):
          <img
            alt="Screenshot eines Browserfensters mit einem geöffneten Tab. Der Browser ist schwarz. Der Tab und die Adressleiste sind dunkelgrau und haben weiße Symbole und weißen Text. Der ausgewählte Tab hat einen roten Hintergrund und weißen Text."
            src="theme-tab_selected-nova.png"
          />
        </p>
        <p>
          Firefox 156 und älter:
          <img alt="Screenshot eines Browserfensters mit einem geöffneten Tab. Der Browser ist schwarz. Der Tab und die Adressleiste sind dunkelgrau und haben weiße Symbole und weißen Text. Der ausgewählte Tab hat einen roten Hintergrund und weißen Text." src="theme-tab_selected.png" />
        </p>
      </td>
    </tr>
    <tr>
      <td><code>tab_text</code></td>
      <td>
        <p>
          Ab Firefox 59 legt diese Eigenschaft die Textfarbe des ausgewählten
          Tabs fest. Wenn <code>tab_line</code> nicht angegeben ist, bestimmt
          sie außerdem die Farbe der Linie des ausgewählten Tabs.
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
        <p>
          Firefox 157 und neuer (Nova):
          <img
            alt="Firefox verwendet ein Theme mit einem Insektenbild. Die Adressleiste ist heller grau und hat weiße Symbole. Der Text des ausgewählten Tabs ist rot auf weißem Hintergrund."
            src="theme-tab_text-nova.png"
          />
        </p>
        <p>
          Firefox 156 und älter:
          <img alt="Firefox verwendet ein Theme mit einem Insektenbild. Die Adressleiste ist heller grau und hat weiße Symbole. Der Text des ausgewählten Tabs ist rot auf weißem Hintergrund." src="theme-tab_text.png" />
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
        <p>Sie legt außerdem die Hintergrundfarbe der Suchleiste fest.</p>
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
        <p>
          Firefox 157 und neuer (Nova):
          <img
            alt="Firefox ist schwarz. Der Tab, die Seiten-Suchleiste und die Adressleiste sind rot und haben weiße Texte und Symbole. In der Seiten-Suchleiste sind Text und Symbole jedoch schwarz."
            src="toolbar-nova.png"
          />
        </p>
        <p>
          Firefox 156 und älter:
          <img alt="Firefox ist schwarz. Der Tab, die Seiten-Suchleiste und die Adressleiste sind rot und haben weiße Texte und Symbole. In der Seiten-Suchleiste sind Text und Symbole jedoch schwarz." src="toolbar.png" />
        </p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_bottom_separator</code></td>
      <td>
        <p>
          Die Farbe der Linie am oberen und linken Rand des Bereichs, der die
          Webseite enthält. Sie trennt damit den Seiteninhalt von der
          darüberliegenden Symbolleiste und, falls die Sidebar angezeigt
          wird, von der links daneben befindlichen Sidebar.
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
        <p>
          Firefox 157 und neuer (Nova):
          <img
            alt="Firefox ist schwarz, hat weißen Tab-Text und zeigt die Symbole der Sidebar an. Eine rote Linie verläuft am oberen und linken Rand des Webseitenbereichs und trennt ihn von der darüberliegenden Symbolleiste sowie der Sidebar links daneben."
            src="theme-toolbar_bottom_separator-nova.png"
          />
        </p>
        <p>
          Firefox 156 und älter:
          <img alt="Firefox ist schwarz. Der Tab und die Adressleiste sind heller grau und haben weiße Texte und Symbole. Eine horizontale rote Linie trennt die Symbolleiste vom darunter angezeigten Webseitenbereich." src="theme-toolbar_bottom_separator.png" />
        </p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field</code></td>
      <td>
        <p>
          Die Hintergrundfarbe von Feldern in der Symbolleiste, beispielsweise
          der Adressleiste.
        </p>
        <p>
          Sie legt außerdem die Hintergrundfarbe des Feldes
          <strong>Auf Seite suchen</strong> fest.
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
        <p>
          Firefox 157 und neuer (Nova):
          <img
            alt="Firefox ist schwarz. Der Tab, die Seiten-Suchleiste und die Adressleiste sind heller grau und haben weiße Texte und Symbole. Der Hintergrund der Adressleiste ist rot. Die Seiten-Suchleiste ist weiß und hat schwarzen Text; ihr Suchfeld ist rot und hat schwarzen Text."
            src="toolbar-field-nova.png"
          />
        </p>
        <p>
          Firefox 156 und älter:
          <img alt="Firefox ist schwarz. Der Tab, die Seiten-Suchleiste und die Adressleiste sind heller grau und haben weiße Texte und Symbole. Der Hintergrund der Adressleiste ist rot. Die Seiten-Suchleiste ist weiß und hat schwarzen Text; ihr Suchfeld ist rot und hat schwarzen Text." src="toolbar-field.png" />
        </p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_border</code></td>
      <td>
        <p>Die Rahmenfarbe von Feldern in der Symbolleiste.</p>
        <p>
          Sie legt außerdem die Rahmenfarbe des Feldes
          <strong>Auf Seite suchen</strong> fest.
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
        <p>
          Firefox 157 und neuer (Nova):
          <img
            alt="Firefox ist schwarz. Der Tab, die Seiten-Suchleiste und die Adressleiste sind schwarz und haben weiße Texte und Symbole. Die Adressleiste und das Suchfeld der Seiten-Suchleiste sind rot umrandet."
            src="toolbar-field-border-nova.png"
          />
        </p>
        <p>
          Firefox 156 und älter:
          <img alt="Firefox ist schwarz. Der Tab, die Seiten-Suchleiste und die Adressleiste sind schwarz und haben weiße Texte und Symbole. Die Adressleiste und das Suchfeld der Seiten-Suchleiste sind rot umrandet." src="toolbar-field-border.png" />
        </p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_border_focus</code></td>
      <td>
        <p>Die Rahmenfarbe von Feldern in der Symbolleiste, wenn sie den Fokus haben.</p>
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
        <p>
          Firefox 157 und neuer (Nova):
          <img
            alt="Firefox ist schwarz. Der Tab und die Adressleiste sind schwarz und haben weiße Texte und Symbole. Die Adressleiste hat den Fokus und ist rot umrandet."
            src="theme-toolbar_field_border_focus-nova.png"
          />
        </p>
        <p>
          Firefox 156 und älter:
          <img alt="Firefox ist schwarz. Der Tab und die Adressleiste sind schwarz und haben weiße Texte und Symbole. Die Adressleiste hat den Fokus und ist rot umrandet." src="theme-toolbar_field_border_focus.png" />
        </p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_focus</code></td>
      <td>
        <p>
          Die Hintergrundfarbe von Feldern in der Symbolleiste, beispielsweise
          der Adressleiste, wenn sie den Fokus haben.
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
        <p>
          Firefox 157 und neuer (Nova):
          <img
            alt="Firefox ist schwarz. Der Tab, die Seiten-Suchleiste und die Adressleiste sind schwarz und haben weiße Texte und Symbole. Die fokussierte Adressleiste hat einen roten Hintergrund und weißen Text."
            src="theme-toolbar_field_focus-nova.png"
          />
        </p>
        <p>
          Firefox 156 und älter:
          <img alt="Firefox ist schwarz. Der Tab, die Seiten-Suchleiste und die Adressleiste sind schwarz und haben weiße Texte und Symbole. Die fokussierte Adressleiste hat einen roten Hintergrund und weißen Text." src="theme-toolbar_field_focus.png" />
        </p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_highlight</code></td>
      <td>
        Die Hintergrundfarbe zur Kennzeichnung der aktuellen Textauswahl in
        der Adressleiste und, falls separat konfiguriert, in der Suchleiste.
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
          Firefox 157 und neuer (Nova):
          <img
            alt="Firefox ist weiß. Der Tab und die Adressleiste sind weiß und haben schwarzen Text und schwarze Symbole. Die Adressleiste hat den Fokus, ist blau umrandet und ihr Text ist ausgewählt."
            src="toolbar_field_highlight-nova.png"
          />
        </p>
        <p>
          Firefox 156 und älter:
          <img
            alt="Firefox ist weiß. Der Tab und die Adressleiste sind weiß und haben schwarzen Text und schwarze Symbole. Die Adressleiste hat den Fokus, ist blau umrandet und ihr Text ist ausgewählt."
            src="toolbar_field_highlight.png"
          />
        </p>
        <p>
          Hier legt <code>toolbar_field_highlight</code> ein helles Grün als
          Hervorhebungsfarbe fest, während
          <code>toolbar_field_highlight_text</code> den Text auf ein
          mittleres bis dunkles Grün setzt.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_highlight_text</code></td>
      <td>
        <p>
          Die Farbe von ausgewähltem Text in der Adressleiste und, falls
          separat konfiguriert, in der Suchleiste.
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
          Firefox 157 und neuer (Nova):
          <img
            alt="Firefox ist weiß. Der Tab und die Adressleiste sind weiß und haben schwarzen Text und schwarze Symbole. Die Adressleiste hat den Fokus, ist blau umrandet und ihr Text ist ausgewählt."
            src="toolbar_field_highlight-nova.png"
          />
        </p>
        <p>
          Firefox 156 und älter:
          <img
            alt="Firefox ist weiß. Der Tab und die Adressleiste sind weiß und haben schwarzen Text und schwarze Symbole. Die Adressleiste hat den Fokus, ist blau umrandet und ihr Text ist ausgewählt."
            src="toolbar_field_highlight.png"
          />
        </p>
        <p>
          Hier legt <code>toolbar_field_highlight_text</code> ein mittleres
          bis dunkles Grün als Textfarbe fest, während die
          Hervorhebungsfarbe hellgrün ist.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_text</code></td>
      <td>
        <p>
          Die Textfarbe von Feldern in der Symbolleiste, beispielsweise der
          Adressleiste. Sie legt außerdem die Textfarbe des Feldes
          <strong>Auf Seite suchen</strong> fest.
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
        <p>
          Firefox 157 und neuer (Nova):
          <img
            alt="Screenshot eines Browserfensters mit einem geöffneten Tab. Der Browser ist schwarz. Der Tab und die Adressleiste sind schwarz und haben weiße Texte und Symbole. Der Text in der Adressleiste ist rot. Die Symbole und das Suchfeld der Seiten-Suchleiste haben roten Text auf schwarzem Hintergrund."
            src="toolbar-field-text-nova.png"
          />
        </p>
        <p>
          Firefox 156 und älter:
          <img alt="Screenshot eines Browserfensters mit einem geöffneten Tab. Der Browser ist schwarz. Der Tab und die Adressleiste sind schwarz und haben weiße Texte und Symbole. Der Text in der Adressleiste ist rot. Die Symbole und das Suchfeld der Seiten-Suchleiste haben roten Text auf schwarzem Hintergrund." src="toolbar-field-text.png" />
        </p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_text_focus</code></td>
      <td>
        <p>
          Die Textfarbe von Feldern in der Symbolleiste, beispielsweise der
          Adressleiste, wenn sie den Fokus haben.
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
        <p>
          Firefox 157 und neuer (Nova):
          <img
            alt="Screenshot eines Browserfensters mit zwei geöffneten Tabs. Der Browser ist schwarz. Der Tab und die Adressleiste sind schwarz und haben weiße Texte und Symbole. Die Adressleiste hat den Fokus; ihre Texte und Symbole sind rot auf schwarzem Hintergrund."
            src="theme-toolbar_field_text_focus-nova.png"
          />
        </p>
        <p>
          Firefox 156 und älter:
          <img alt="Screenshot eines Browserfensters mit zwei geöffneten Tabs. Der Browser ist schwarz. Der Tab und die Adressleiste sind schwarz und haben weiße Texte und Symbole. Die Adressleiste hat den Fokus; ihre Texte und Symbole sind rot auf schwarzem Hintergrund." src="theme-toolbar_field_text_focus.png" />
        </p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_text</code></td>
      <td>
        <p>
          Die Textfarbe der Symbolleiste. Sie legt außerdem die Textfarbe
          der Suchleiste fest.
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
        <p>
          Firefox 157 und neuer (Nova):
          <img
            alt="Screenshot eines Browserfensters mit einem geöffneten Tab. Der Browser ist schwarz. Der Tab, die Seiten-Suchleiste und die Adressleiste sind schwarz und haben rote Texte und Symbole. Der Text im aktiven Tab, in der Navigationsleiste und in der Suchleiste ist rot."
            src="toolbar-text-nova.png"
          />
        </p>
        <p>
          Firefox 156 und älter:
          <img alt="Screenshot eines Browserfensters mit einem geöffneten Tab. Der Browser ist schwarz. Der Tab, die Seiten-Suchleiste und die Adressleiste sind schwarz und haben rote Texte und Symbole. Der Text im aktiven Tab, in der Navigationsleiste und in der Suchleiste ist rot." src="toolbar-text.png" />
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
        <p>
          Firefox 157 und neuer (Nova):
          <img
            alt="Screenshot eines Browserfensters mit einem geöffneten Tab. Der Browser ist schwarz. Der Tab und die Adressleiste sind schwarz und haben weiße Texte und Symbole. Eine rote Linie trennt den oberen Rand der Adressleiste vom darüberliegenden Browserbereich."
            src="theme-toolbar_top_separator-nova.png"
          />
        </p>
        <p>
          Firefox 156 und älter:
          <img alt="Screenshot eines Browserfensters mit einem geöffneten Tab. Der Browser ist schwarz. Der Tab und die Adressleiste sind schwarz und haben weiße Texte und Symbole. Eine rote Linie trennt den oberen Rand der Adressleiste vom darüberliegenden Browserbereich." src="theme-toolbar_top_separator.png" />
        </p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_vertical_separator</code></td>
      <td>
        <p>
          Die Farbe der Trennlinie in der Lesezeichen-Symbolleiste. In
          Firefox 58 entspricht sie der Farbe der Trennlinien innerhalb
          der Adressleiste.
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
        <p>
          Firefox 157 und neuer (Nova):
          <img
            alt="Screenshot eines Browserfensters mit einem geöffneten Tab. Der Browser ist schwarz. Der Tab und die Adressleiste sind schwarz und haben weiße Texte und Symbole. Die vertikale Linie zwischen der Lesezeichen-Symbolleiste und dem rechts davon befindlichen Inhalt ist rot."
            src="theme-toolbar_vertical_separator-nova.png"
          />
        </p>
        <p>
          Firefox 156 und älter:
          <img alt="Screenshot eines Browserfensters mit einem geöffneten Tab. Der Browser ist schwarz. Der Tab und die Adressleiste sind schwarz und haben weiße Texte und Symbole. Die vertikale Linie zwischen der Lesezeichen-Symbolleiste und dem rechts davon befindlichen Inhalt ist rot." src="theme-toolbar_vertical_separator.png" />
        </p>
      </td>
    </tr>
  </tbody>
</table>

#### Aliasse

Dieser Schlüssel akzeptiert außerdem verschiedene Eigenschaften als Aliasse für die oben aufgeführten Eigenschaften. Sie dienen der Kompatibilität mit Chrome. Wenn sowohl ein Alias als auch die entsprechende Eigenschaft ohne Alias angegeben sind, wird der Wert der Eigenschaft ohne Alias verwendet.

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
          Ein Array von Aufzählungswerten, die die Ausrichtung des jeweiligen
          Array-Eintrags unter <code>"additional_backgrounds":</code>
          festlegen.<br />Mögliche Ausrichtungen sind:
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
          Enthält das Array weniger Einträge als das Array
          <code>additional_backgrounds</code>, werden seine Werte für die
          fehlenden Einträge erneut verwendet. Enthält
          <code>additional_backgrounds</code> beispielsweise 5 Werte und
          <code>additional_backgrounds_alignment</code> die Werte
          <code>["left", "top"]</code>, wird der dritte Hintergrund mit
          <code>"left"</code>, der vierte mit <code>"top"</code> und der
          fünfte wieder mit <code>"left"</code> ausgerichtet.
        </p>
        <p>Wenn nichts angegeben ist, wird standardmäßig <code>"right top"</code> verwendet.</p>
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
          Ein Array von Aufzählungswerten, die festlegen, wie der jeweilige
          Array-Eintrag unter <code>"additional_backgrounds":</code>
          wiederholt wird. Mögliche Werte sind:
        </p>
        <ul>
          <li><code>"no-repeat"</code></li>
          <li><code>"repeat"</code></li>
          <li><code>"repeat-x"</code></li>
          <li><code>"repeat-y"</code></li>
        </ul>
        <p>
          Enthält das Array weniger Einträge als das Array
          <code>additional_backgrounds</code>, werden seine Werte für die
          fehlenden Einträge erneut verwendet. Enthält
          <code>additional_backgrounds</code> beispielsweise 5 Werte und
          <code>additional_backgrounds_tiling</code> die Werte
          <code>["no-repeat", "repeat-x"]</code>, wird der dritte
          Hintergrund mit <code>"no-repeat"</code>, der vierte mit
          <code>"repeat-x"</code> und der fünfte wieder mit
          <code>"no-repeat"</code> dargestellt.
        </p>
        <p>Wenn nichts angegeben ist, wird standardmäßig <code>"no-repeat"</code> verwendet.</p>
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
          Ein Array von Werten, die die Größe des jeweiligen Array-Eintrags
          unter <code>"additional_backgrounds":</code> festlegen. Akzeptiert
          dieselben Werte wie die CSS-Eigenschaft
          <a href="/de/docs/Web/CSS/Reference/Properties/background-size"><code>background-size</code></a>,
          beispielsweise <code>"auto"</code>, <code>"cover"</code>,
          <code>"contain"</code> oder explizite Breiten- und Höhenangaben
          wie <code>"100px 200px"</code>.
        </p>
        <p>
          Enthält das Array weniger Einträge als das Array
          <code>additional_backgrounds</code>, werden seine Werte für die
          fehlenden Einträge erneut verwendet. Enthält
          <code>additional_backgrounds</code> beispielsweise 5 Werte und
          <code>additional_backgrounds_size</code> die Werte
          <code>["auto", "100px 100px"]</code>, wird für den dritten
          Hintergrund <code>"auto"</code>, für den vierten
          <code>"100px 100px"</code> und für den fünften wieder
          <code>"auto"</code> verwendet.
        </p>
        <p>Wenn nichts angegeben ist, wird standardmäßig <code>"auto"</code> verwendet.</p>
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
          Hintergrundbilder und Farbverläufe des Themes gezeichnet werden.
          Mögliche Werte sind:
        </p>
        <ul>
          <li>
            <code>"auto"</code> – Firefox wählt den Bereich anhand von
            <code>additional_backgrounds_alignment</code> aus. Wenn ein
            Ausrichtungswert einen Hintergrund vertikal in der Mitte oder
            unten im Kopfbereich positioniert, werden die Hintergründe in
            den oberen Symbolleisten gezeichnet. Andernfalls werden sie im
            Fenster gezeichnet.
          </li>
          <li>
            <code>"window"</code> – die Hintergründe werden im gesamten
            Browserfenster gezeichnet und erstrecken sich damit auch hinter
            vertikale Elemente der Benutzeroberfläche, beispielsweise die
            Sidebar und vertikale Tabs.
          </li>
          <li>
            <code>"top_toolbars"</code> – die Hintergründe werden nur in den
            horizontalen Symbolleisten am oberen Fensterrand gezeichnet:
            der Menüleiste, der Tableiste, der Navigations-Symbolleiste
            und der Lesezeichen-Symbolleiste. Vertikale Elemente der
            Benutzeroberfläche wie die Sidebar verwenden stattdessen
            die Farbe <code>frame</code>.
          </li>
        </ul>
        <p>Wenn nichts angegeben ist, wird standardmäßig <code>"auto"</code> verwendet.</p>
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
          (beispielsweise Kontextmenüs) und auf Inhalte
          (beispielsweise integrierte Seiten und das bevorzugte Farbschema
          für Webseiten) angewendet wird. Mögliche Werte sind:
        </p>
        <ul>
          <li><code>"auto"</code> – je nach Theme automatisch ein helles oder dunkles Farbschema.</li>
          <li><code>"light"</code> – ein helles Farbschema.</li>
          <li><code>"dark"</code> – ein dunkles Farbschema.</li>
          <li><code>"system"</code> – verwendet das Farbschema des Systems.</li>
        </ul>
        <p>Wenn nichts angegeben ist, wird standardmäßig <code>"auto"</code> verwendet.</p>
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
          beispielsweise auf integrierte Seiten und das bevorzugte
          Farbschema für Webseiten. Überschreibt <code>color_scheme</code>.
          Mögliche Werte sind:
        </p>
        <ul>
          <li><code>"auto"</code> – je nach Theme automatisch ein helles oder dunkles Farbschema.</li>
          <li><code>"light"</code> – ein helles Farbschema.</li>
          <li><code>"dark"</code> – ein dunkles Farbschema.</li>
          <li><code>"system"</code> – das Farbschema des Systems.</li>
        </ul>
        <p>Wenn nichts angegeben ist, wird standardmäßig <code>"auto"</code> verwendet.</p>
      </td>
    </tr>
  </tbody>
</table>

## Beispiele

Ein einfaches Theme muss ein Bild für den Kopfbereich, die dort verwendete Akzentfarbe und die Textfarbe des Kopfbereichs festlegen:

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

Mehrere Einträge können den Kopfbereich ausfüllen. Verwenden Sie vor Firefox 60 ein leeres oder transparentes Bild für den Kopfbereich, um die Platzierung der zusätzlichen Einträge steuern zu können:

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

Sie können den Kopfbereich auch mit einem oder mehreren wiederholten Bildern ausfüllen. Im folgenden Fall wird ein einzelnes Bild oben mittig im Kopfbereich verankert und über den restlichen Kopfbereich hinweg wiederholt:

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

Das folgende Beispiel verwendet die meisten verschiedenen Werte für `theme.colors`:

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

Firefox 157 und neuer (Nova):

![Ein Browserfenster mit zwei geöffneten Tabs und dunkelgrünem Hintergrund im Kopfbereich. Der inaktive Tab hat weißen Text. Der aktive Tab und die Symbolleiste haben einen blauen Hintergrund und cyanfarbenen Text. Die Adressleiste hat einen orangefarbenen Hintergrund, weiße Rahmen, grünen Text und eine weiße vertikale Trennlinie. Eine rote Linie trennt die Tabs oben, und eine weiße Linie trennt sie vom darunterliegenden Inhalt.](theme-nova.png)

Firefox 156 und älter:

![Ein Browserfenster mit zwei geöffneten Tabs und dunkelgrünem Hintergrund im Kopfbereich. Der inaktive Tab hat weißen Text. Der aktive Tab und die Symbolleiste haben einen blauen Hintergrund und cyanfarbenen Text. Die Adressleiste hat einen orangefarbenen Hintergrund, weiße Rahmen, grünen Text und eine weiße vertikale Trennlinie. Eine rote Linie trennt die Tabs oben, und eine weiße Linie trennt sie vom darunterliegenden Inhalt.](theme.png)

In diesem Screenshot ist `"toolbar_vertical_separator"` die weiße vertikale Linie in der Adressleiste, die das Symbol für den Lesemodus von den anderen Symbolen trennt.

Dieses Beispiel (Firefox 153 und neuer) kombiniert Bildhintergründe mit einem linearen CSS-Farbverlauf:

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
- Der `linear-gradient` beginnt oben rechts, wird horizontal über den Kopfbereich wiederholt (`repeat-x`) und ist 144px hoch (die Breite wird automatisch bestimmt). Der Farbverlauf geht von Rosa (`#FF6BBA`) oben zu Pfirsichfarben (`#FFC999`) unten über.

Dieses Beispiel (Firefox 156 und neuer) beschränkt den Hintergrund-Farbverlauf auf die horizontalen Symbolleisten am oberen Fensterrand, damit er sich nicht hinter die Sidebar oder vertikale Tabs erstreckt. Ohne `backgrounds_area` führt die Ausrichtung `"right top"` dazu, dass Firefox den Farbverlauf im gesamten Fenster zeichnet:

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

Wenn `backgrounds_area` auf `"top_toolbars"` gesetzt ist, verwendet die Sidebar die Farbe `frame`. Wird `backgrounds_area` stattdessen auf `"window"` gesetzt, erstreckt sich der Farbverlauf über das gesamte Fenster, einschließlich des Bereichs hinter der Sidebar.

## Browser-Kompatibilität

{{Compat}}

### Chrome-Kompatibilität

In Chrome gilt:

- `colors/toolbar_text` wird nicht verwendet. Verwenden Sie stattdessen `colors/bookmark_text`.
- `images/theme_frame` verankert das Bild oben links im Kopfbereich und wiederholt es kachelartig, wenn es den Kopfbereich nicht vollständig ausfüllt.
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

Ab Firefox 59 werden für alle Eigenschaften sowohl die Array-Form als auch die CSS-Farbform akzeptiert. Zuvor erforderten `colors/frame` und `colors/tab_background_text` die Array-Form, während die anderen Eigenschaften die CSS-Farbform erforderten.
