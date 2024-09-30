---
title: theme
slug: Mozilla/Add-ons/WebExtensions/manifest.json/theme
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

Verwenden Sie den `theme`-Schlüssel, um ein statisches Theme für Firefox zu definieren.

> [!NOTE]
> Wenn Sie ein Theme mit einer Erweiterung einbeziehen möchten, sehen Sie sich bitte die {{WebExtAPIRef("theme")}} API an.

> [!NOTE]
> Seit Mai 2019 müssen Themes signiert sein, um installiert werden zu können ([Firefox-Bug 1545109](https://bugzil.la/1545109)). Weitere Details finden Sie unter [Ihre Erweiterung signieren und verteilen](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/#distributing-your-addon).

> [!NOTE]
> Eine neue Version von Firefox für Android, die auf GeckoView basiert, ist in Entwicklung. Eine [Vorabversion](https://play.google.com/store/apps/details?id=org.mozilla.fenix) ist verfügbar. Die Vorabversion unterstützt keine Themes.

## Bildformate

Die folgenden Bildformate werden in allen Theme-Bild-Eigenschaften unterstützt:

- JPEG
- PNG
- APNG
- SVG (animiertes SVG wird ab Firefox 59 unterstützt)
- GIF (animiertes GIF wird nicht unterstützt)

## Syntax

Der `theme`-Schlüssel ist ein Objekt, das die folgenden Eigenschaften akzeptiert:

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
          verschiedenen Teilen des Browsers angezeigt werden sollen. Siehe
          <code><a href="#images">images</a></code> für Details zu den
          Eigenschaften, die dieses Objekt enthalten kann.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>colors</code></td>
      <td><code>Object</code></td>
      <td>
        <p>Erforderlich.</p>
        <p>
          Ein JSON-Objekt, dessen Eigenschaften die Farben verschiedener Teile
          des Browsers darstellen. Siehe <code><a href="#colors">colors</a></code> für
          Details zu den Eigenschaften, die dieses Objekt enthalten kann.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>properties</code></td>
      <td><code>Object</code></td>
      <td>
        <p>Optional</p>
        <p>
          Dieses Objekt hat Eigenschaften, die beeinflussen, wie die
          <code>"additional_backgrounds"</code> Bilder angezeigt werden und Farbschemata angewendet werden. Siehe
          <code><a href="#properties">properties</a></code> für Details zu den Eigenschaften, die dieses Objekt enthalten kann.
        </p>
      </td>
    </tr>
  </tbody>
</table>

### images

Alle URLs sind relativ zur `manifest.json`-Datei und können keine externe URL referenzieren.

Bilder sollten 200 Pixel hoch sein, um sicherzustellen, dass sie den Kopfleistenbereich immer vertikal ausfüllen.

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
          Die URL eines Vordergrundbildes, das dem Kopfbereich hinzugefügt und
          an der oberen rechten Ecke des Kopfbereichs verankert wird.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Chrome verankert das Bild an der oberen linken Ecke
            des Kopfbereichs und wenn das Bild den Kopfbereich nicht ausfüllt, wird das
            Bild gekachelt.
          </p>
        </div>
        <p>
          Optional in Desktop Firefox Version 60 und höher. Erforderlich in Firefox für Android.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>additional_backgrounds</code></td>
      <td><code>Array</code> von <code>String</code></td>
      <td>
        <div class="warning">
          <p>
            <strong>Warnung:</strong> Die
            <code>additional_backgrounds</code>-Eigenschaft ist experimentell. Sie wird
            derzeit in den Release-Versionen von Firefox akzeptiert, aber ihr Verhalten
            kann sich ändern. Sie wird in Firefox für Android nicht unterstützt.
          </p>
        </div>
        <p>
          Ein Array von URLs für zusätzliche Hintergrundbilder, die dem
          Kopfbereich hinzugefügt und hinter dem
          <code>"theme_frame":</code>-Bild angezeigt werden. Diese Bilder schichten das erste Bild
          im Array oben und das letzte Bild im Array unten.
        </p>
        <p>Optional.</p>
        <p>
          Standardmäßig sind alle Bilder an der oberen rechten Ecke des
          Kopfbereichs verankert, aber ihre Ausrichtung und Wiederholungsverhalten können durch
          Eigenschaften von <code>"properties":</code> gesteuert werden.
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
            alt="Übersicht der Farbeigenschaften und wie sie auf Firefox-UI-Komponenten angewendet werden"
            src="themes_components_annotations.png"
          />
        </p>
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Wenn ein Element von mehreren Farbeigenschaften betroffen ist, sind die Eigenschaften in der Reihenfolge der Priorität aufgeführt.

Alle diese Eigenschaften können entweder als Zeichenfolge angegeben werden, die ein gültiges [CSS-Farbwert](/de/docs/Web/CSS/color_value) (einschließlich Hexadezimal) enthält, oder als RGB-Array, wie z.B. `"tab_background_text": [ 107 , 99 , 23 ]`.

> **Hinweis:** [In Chrome können Farben nur als RGB-Arrays angegeben werden](#chrome-kompatibilität).
>
> In Firefox für Android können Farben angegeben werden mit:
>
> - vollständiger Hexadezimalschreibweise, also nur #RRGGBB. _Alpha_ und verkürzte Syntax wie #RGB\[A] werden nicht unterstützt.
> - [funktionale Notation](/de/docs/Web/CSS/color_value#rgb_syntax_variations) (RGB-Arrays) für Themes, die Firefox 68.2 oder später anvisieren.
>
> Farben für Firefox für Android-Themes können nicht mit Farbnamen angegeben werden.

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
          Die Farbe von Text und Symbolen in den Lesezeichen- und Suchleisten. Auch, wenn
          <code>tab_text</code> nicht definiert ist, setzt es die Farbe des aktiven
          Tab-Textes und wenn <code>icons</code> nicht definiert ist, die Farbe der
          Symbolleisten-Symbole. Als Chrome-kompatibler Alias für
          <code>toolbar_text</code> bereitgestellt.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass jede verwendete Farbe gut mit
            den in <code>frame</code> und <code>frame_inactive</code> oder
            <code>toolbar</code>, wenn Sie diese Eigenschaft verwenden, kontrastiert.
          </p>
          <p>
            Wo <code>icons</code> nicht definiert ist, stellen Sie auch sicher, dass guter
            Kontrast zu <code>button_background_active</code> und
            <code>button_background_hover</code> gegeben ist.
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
            alt="Browser Firefox ist schwarz. Der Tab des Browsers ist schwarz mit weißem Text. Die URL-Leiste und die Suchleisten sind weiß mit schwarzem Text, aber alle Browser- und Suchleistensymbole sind rot."
            src="theme-bookmark_text.png"
          />
        </p>
      </td>
    </tr>
    <tr>
      <td><code>button_background_active</code></td>
      <td>
        <p>Die Farbe des Hintergrunds der gedrückten Symbolleistenschaltflächen.</p>
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
        <p><img alt="Browser Firefox ist schwarz. Die Tabs und die URL-Leiste des Browsers sind grau mit weißem Text. Das Symbol der Werkzeugleiste in der URL-Leiste ist weiß mit einem roten Hintergrund und gedrückt, und ein Popup wird geöffnet, das eine kurze Liste von Werkzeugen zum Hinzufügen zur Symbolleiste wie die Browser-Bibliothek und die Seitenleisten anzeigt." src="theme-button_background_active.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>button_background_hover</code></td>
      <td>
        <p>Die Farbe des Hintergrunds der Symbolleistenschaltflächen bei Hover.</p>
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
        <p><img alt="Browser Firefox ist schwarz. Die Tabs und die URL-Leiste des Browsers sind grau mit weißem Text. Das 'eine Seite zurück'-Icon ist weiß mit einem roten Kreishintergrund." src="theme-button_background_hover.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>icons</code></td>
      <td>
        <p>Die Farbe der Symbolleistensymbole, ohne diejenigen in der Suchleiste.</p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut mit
            denjenigen in <code>frame</code>, <code>frame_inactive</code>,
            <code>button_background_active</code> und
            <code>button_background_hover</code> kontrastiert.
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
        <p><img alt="Browser Firefox ist schwarz. Die Tabs und die URL-Leiste des Browsers sind grau mit weißem Text. Die URL-Leiste und das Symbol zum Öffnen eines neuen Tabs sind rot. Die roten Icons kontrastieren gut mit der schwarzen Hintergrundfarbe des Kopfbereichs." src="theme-icons.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>icons_attention</code></td>
      <td>
        <p>
          Die Farbe von Symbolleistensymbolen im Aufmerksamkeit-Zustand, wie das
          'Seite zu Lesezeichen hinzufügen'-Icon oder das 'Download abgeschlossen'-Icon.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut mit
            denjenigen in <code>frame</code>, <code>frame_inactive</code>,
            <code>button_background_active</code> und
            <code>button_background_hover</code> kontrastiert.
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
        <p><img alt="Browser Firefox ist schwarz. Die Tabs und die URL-Leiste des Browsers sind grau mit weißem Text. Das 'Seite zu Lesezeichen hinzufügen'-Icon ist rot und gedrückt, ein geöffnetes Popup namens 'dieses Lesezeichen bearbeiten' wird angezeigt. Im Aufmerksamkeit-Zustand kontrastieren die Symbolleistensymbole gut mit dem schwarzen Hintergrund des Kopfbereichs." src="theme-icons_attention.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>frame</code></td>
      <td>
        <p>
          Die Farbe des Hintergrunds des Kopfbereichs, der in dem Teil des
          Kopfbereichs angezeigt wird, der nicht durch die in
          <code>"theme_frame"</code> und <code>"additional_backgrounds"</code>
          angegebenen Bilder verdeckt oder sichtbar ist.
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
        <p><img alt="Browser Firefox ist rot mit weißem Text. Die Tabs des Browsers sind heller rot, auch mit weißem Text. Die URL-Leiste ist sehr hellrot mit schwarzem Text" src="theme-frame.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>frame_inactive</code></td>
      <td>
        <p>
          Die Farbe des Hintergrunds des Kopfleistenbereichs, wenn das
          Browserfenster inaktiv ist, angezeigt in dem Teil der Kopfzeile, der nicht
          durch die in <code>"theme_frame"</code> und
          <code>"additional_backgrounds"</code> angegebenen Bilder verdeckt oder
          sichtbar ist.
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
            alt="Browser Firefox ist grau. Die Tabs und die URL-Leiste des Browsers sind heller grau. Der Tab-Text ist weiß und die Icons in der URL-Leiste sind dunkler grau."
            src="theme-frame_inactive.png"
          />
        </p>
      </td>
    </tr>
    <tr>
      <td><code>ntp_background</code></td>
      <td>
        <p>Die Hintergrundfarbe der neuen Tab-Seite.</p>
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
        <p><img alt="Firefox zeigt eine neue Tab-Seite. Der Hintergrund der Seite ist rot." src="ntp-background.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>ntp_card_background</code></td>
      <td>
        <p>Die Hintergrundfarbe der neuen Tab-Seiten-Karten.</p>
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
        <p><img alt="Firefox zeigt eine neue Tab-Seite. Auf der Seite ist der Hintergrund des Suchfelds und der Schnellzugriffsschaltflächen rot." src="ntp-card-background.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>ntp_text</code></td>
      <td>
        <p>Die Textfarbe der neuen Tab-Seite.</p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut mit
            den in <code>ntp_background</code> und <code>ntp_card_background</code>
            verwendeten Farben kontrastiert.
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
        <p><img alt="Firefox zeigt eine neue Tab-Seite. Auf der Seite ist der Text rot." src="ntp-text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>popup</code></td>
      <td>
        <p>
          Die Hintergrundfarbe von Popups (wie das Dropdown der URL-Leiste und die
          Pfeilbereiche).
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
        <p><img alt="Browser Firefox ist schwarz. Die Tabs und die URL-Leiste des Browsers sind heller grau mit Symbolen und Text in weiß. Das 'Seite zu Lesezeichen hinzufügen'-Icon ist blau und gedrückt, ein geöffnetes Popup namens 'dieses Lesezeichen bearbeiten' wird mit einem roten Hintergrund angezeigt. Die Hintergrundfarbe des Popups ist rot." src="theme-popup.png" /></p>
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
        <p><img alt="Browser Firefox ist schwarz. Die Tabs und die URL-Leiste des Browsers sind heller grau mit Symbolen und Text in weiß. Das 'Seite zu Lesezeichen hinzufügen'-Icon ist blau und gedrückt, ein geöffnetes Popup namens 'dieses Lesezeichen bearbeiten' wird mit einer roten Umrandung und schwarzem Hintergrund angezeigt. Der Rahmen des Popups ist rot." src="theme-popup_border.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>popup_highlight</code></td>
      <td>
        <p>
          Die Hintergrundfarbe von Elementen, die mithilfe der Tastatur innerhalb
          von Popups markiert sind (wie das ausgewählte URL-Leisten-Dropdown-Element).
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Es wird empfohlen,
            <code>popup_highlight_text</code> zu definieren, um die Standard-Textfarbe des
            Browsers auf verschiedenen Plattformen zu überschreiben.
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
        <p><img alt="Screenshot von Firefox ist schwarz. Die Tabs und die URL-Leiste des Browsers sind heller grau mit Symbolen und Text in weiß. Ein Suchergebnis-Popup wird mit einem markierten Element Hintergrund in Rot angezeigt. Die Hintergrundfarbe des markierten Elements im Popup ist rot." src="theme-popup_highlight.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>popup_highlight_text</code></td>
      <td>
        <p>Die Textfarbe von hervorgehobenen Elementen innerhalb von Popups.</p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut mit
            der in <code>popup_highlight</code> verwendeten Farbe kontrastiert.
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
        <p><img alt="Browser Firefox ist schwarz. Die Tabs und die URL-Leiste des Browsers sind heller grau mit Symbolen und Text in weiß. Ein Suchergebnis-Popup wird mit einem markierten Element Text in Rot mit schwarzem Hintergrund angezeigt. Die Textfarbe des markierten Elements kontrastiert gut mit der schwarzen Hintergrundfarbe dieses Elements." src="theme-popup_highlight_text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>popup_text</code></td>
      <td>
        <p>Die Textfarbe von Popups.</p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut mit
            der in <code>popup</code> verwendeten Farbe kontrastiert.
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
        <p><img alt="Browser Firefox ist schwarz. Die Tabs und die URL-Leiste des Browsers sind heller grau mit Symbolen und Text in weiß. Ein Suchergebnis-Popup wird mit Elementtexten in Rot angezeigt. Die Textfarbe kontrastiert gut mit der schwarzen Hintergrundfarbe des Popups." src="popup_text.png" /></p>
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
        <p><img alt="Ein Nahaufnahmescreenshot vom offenen Seitenleistenfenster eines Browsers. Die Hintergrundfarbe der Seitenleiste ist rot." src="sidebar-colors.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>sidebar_border</code></td>
      <td>
        <p>Die Rahmen- und Trennfarbe der Browser-Seitenleiste</p>
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
        <p><img alt="Eine Nahaufnahme der Lesezeichenseitenleiste des Firefox-Browsers mit einem roten horizontalen Separator zwischen dem Titel der Seitenleiste und dem Seitenleistenmenü. Die Farbgrenze und Trennfarbe der Seitenleiste ist rot." src="sidebar-border.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>sidebar_highlight</code></td>
      <td>
        <p>Die Hintergrundfarbe von hervorgehobenen Zeilen in eingebauten Seitenleisten</p>
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
        <p><img alt="Eine Nahaufnahme der Lesezeichenseitenleiste des Firefox-Browsers mit einem hervorgehobenen Element. Die Hintergrundfarbe einer hervorgehobenen Zeile in der Seitenleiste ist rot mit weißem Text." src="sidebar-highlight.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>sidebar_highlight_text</code></td>
      <td>
        <p>Die Textfarbe von hervorgehobenen Zeilen in den Seitenleisten.</p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut mit
            der in <code>sidebar_highlight</code> verwendeten Farbe kontrastiert.
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
        <p><img alt="Eine Nahaufnahme der Lesezeichenseitenleiste des Firefox-Browsers mit einem hervorgehobenen Element. Die Farbe des Textes einer hervorgehobenen Zeile in der Seitenleiste ist rot. Die Textfarbe kontrastiert gut mit der pinken Hintergrundfarbe der hervorgehobenen Zeile." src="sidebar-highlight-text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>sidebar_text</code></td>
      <td>
        <p>Die Textfarbe der Seitenleisten.</p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut mit
            der in <code>sidebar</code> verwendeten Farbe kontrastiert.
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
        <p><img alt="Ein Nahaufnahmescreenshot vom offenen Seitenleistenfenster eines Browsers. Die Farbe des Textes in der Seitenleiste ist weiß. Die Textfarbe kontrastiert gut mit dem roten Hintergrund der Seitenleiste." src="sidebar-colors.png" /></p>
      </td>
    </tr>
    <tr>
      <td>
        <code>tab_background_separator</code> {{Deprecated_Inline}}
      </td>
      <td>
        <div class="notecard warning">
          <p>
            <strong>Warnung:</strong> <code>tab_background_separator</code> wird
            ab Firefox 89 nicht unterstützt.
          </p>
        </div>
        <p>Die Farbe des vertikalen Trennzeichens der Hintergrund-Tabs.</p>
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
            alt="Eine Nahaufnahme der Browser-Tabs, um den Separator hervorzuheben."
            src="theme-tab-background-separator.png"
          />
        </p>
      </td>
    </tr>
    <tr>
      <td><code>tab_background_text</code></td>
      <td>
        <p>
          Die Farbe des Textes, der in den inaktiven Seitentabs angezeigt wird. Wenn
          <code>tab_text</code> oder <code>bookmark_text</code> nicht angegeben ist,
          gilt für den aktiven Tab-Text.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut mit
            denjenigen in <code>tab_selected</code> oder <code>frame</code> und
            <code>frame_inactive</code> kontrastiert.
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
        <p><img alt="Ein Screenshot eines Browserfensters mit einem offenen Tab. Der Browser ist schwarz. Die Tabs und die URL-Leiste des Browsers sind weiß mit roten Symbolen und rotem Text. Die Farbe des Textes im offenen Tab ist rot. Die Textfarbe kontrastiert gut mit der schwarzen Hintergrundfarbe des Tabs." src="theme-tab_background_text.png" /></p>
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
        <p><img alt="Browser Firefox ist schwarz. Die Tabs und die URL-Leiste des Browsers sind dunkler grau mit hellgrauen Symbolen und weißem Text. Der ausgewählte Tab hat eine rote Umrandung." src="theme-tab_line.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>tab_loading</code></td>
      <td>
        <p>Die Farbe des Ladeindikators des Tabs und des Ladebursts des Tabs.</p>
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
        <p><img alt="Ein Screenshot eines Browserfensters mit einem offenen Tab. Der Browser ist schwarz. Die Tabs und die URL-Leiste des Browsers sind dunkler grau mit Symbolen und Text in weiß. Im ausgewählten Tab ist ein animierter Ladeindikator rot." src="theme-tab_loading.gif" /></p>
      </td>
    </tr>
    <tr>
      <td><code>tab_selected</code></td>
      <td>
        <p>
          Die Hintergrundfarbe des ausgewählten Tabs. Wenn nicht verwendet, wird die
          Farbe des ausgewählten Tabs durch <code>frame</code> und
          <code>frame_inactive</code> definiert.
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
        <p><img alt="Ein Screenshot eines Browserfensters mit einem offenen Tab. Der Browser ist schwarz. Die Tabs und die URL-Leiste des Browsers sind dunkler grau mit Symbolen und Text in weiß. Der ausgewählte Tab hat einen roten Hintergrund und weißen Text." src="theme-tab_selected.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>tab_text</code></td>
      <td>
        <p>
          Ab Firefox 59 repräsentiert es die Textfarbe für den ausgewählten Tab. Wenn
          <code>tab_line</code> nicht angegeben ist, definiert es auch die Farbe der
          ausgewählten Tab-Linie.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut mit
            denjenigen in <code>tab_selected</code> oder <code>frame</code> und
            <code>frame_inactive</code> kontrastiert.
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
        <p><img alt="Browser Firefox hat ein Bild eines Insektenthemas. Die URL-Leiste ist heller grau mit weißen Symbolen. Der Text des ausgewählten Tabs ist rot mit weißem Hintergrund." src="theme-tab_text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar</code></td>
      <td>
        <p>
          Die Hintergrundfarbe für die Navigationsleiste, die Lesezeichenleiste und
          den ausgewählten Tab.
        </p>
        <p>Dies setzt auch die Hintergrundfarbe der "Suchen"-Leiste.</p>
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
        <p><img alt="Browser Firefox ist schwarz. Die Tabs, Suchleisten und die URL-Leiste des Browsers sind rot mit weißem Text und Symbolen, außer für die Suchleisten, wo der Text und das Symbol schwarz sind." src="toolbar.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_bottom_separator</code></td>
      <td>
        <p>
          Die Farbe der Linie, die den unteren Rand der Symbolleiste vom
          Bereich darunter trennt.
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
        <p><img alt="Browser Firefox ist schwarz. Die Tabs und die URL-Leiste des Browsers sind heller grau mit weißem Text und Symbolen. Eine horizontale rote Linie trennt den unteren Rand der Symbolleiste und den Beginn der Anzeige der Webseite." src="theme-toolbar_bottom_separator.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field</code></td>
      <td>
        <p>
          Die Hintergrundfarbe für Felder in der Symbolleiste, zum Beispiel die URL-Leiste.
        </p>
        <p>
          Dies setzt auch die Hintergrundfarbe des
          <strong>Suchen in Seite</strong>-Feldes.
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
        <p><img alt="Browser Firefox ist schwarz. Die Tabs, Suchleisten und URL-Leiste des Browsers sind heller grau mit weißen Symbolen und Text. Die Hintergrundfarbe der URL-Leiste ist rot. Die Suchleiste ist weiß mit schwarzem Text. Das Suchfeld ist rot mit schwarzem Text." src="toolbar-field.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_border</code></td>
      <td>
        <p>Die Rahmenfarbe für Felder in der Symbolleiste.</p>
        <p>
          Dies setzt auch die Rahmenfarbe des
          <strong>Suchen in Seite</strong>-Feldes.
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
        <p><img alt="Browser Firefox ist schwarz. Die Tabs, Suchleisten und URL-Leiste des Browsers sind schwarz mit weißem Text und Symbolen. Die URL-Leiste und die Suchfelder sind rot umrandet." src="toolbar-field-border.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_border_focus</code></td>
      <td>
        <p>Die Rahmenfarbe bei Fokus für Felder in der Symbolleiste.</p>
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
        <p><img alt="Browser Firefox ist schwarz. Die Tabs und die URL-Leiste des Browsers sind schwarz mit weißem Text und Symbolen. Die URL-Leistenfelder sind fokussiert und rot umrandet." src="theme-toolbar_field_border_focus.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_focus</code></td>
      <td>
        <p>
          Die Hintergrundfarbe bei Fokus für Felder in der Symbolleiste, wie die
          URL-Leiste.
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
        <p><img alt="Browser Firefox ist schwarz. Die Tabs, Suchleisten und URL-Leiste des Browsers sind schwarz mit weißem Text und Symbolen. Die Hintergrundfarbe der fokussierten URL-Leiste ist rot und der Text ist weiß." src="theme-toolbar_field_focus.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_highlight</code></td>
      <td>
        Die Hintergrundfarbe, die verwendet wird, um die aktuelle Auswahl von Text
        in der URL-Leiste (und der Suchleiste, wenn sie separat konfiguriert ist) anzuzeigen.
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
            alt="Browser Firefox ist weiß. Die Tabs und die URL-Leiste des Browsers sind weiß mit Text und Symbolen in schwarz. Das URL-Leistenfeld ist fokussiert und blau umrandet und der Text in der URL-Leiste ist ausgewählt."
            src="toolbar_field_highlight.png"
          />
        </p>
        <p>
          Hierbei gibt das Feld <code>toolbar_field_highlight</code> an, dass
          die Hervorhebungsfarbe ein helles Grün ist, während der Text mit
          <code>toolbar_field_highlight_text</code> auf ein mittel- bis dunkelgrünes
          Grün gesetzt wird.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_highlight_text</code></td>
      <td>
        <p>
          Die Farbe, die verwendet wird, um den Text zu zeichnen, der aktuell in der
          URL-Leiste ausgewählt ist (und der Suchleiste, wenn sie als separates Feld
          konfiguriert ist).
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut mit
            denen, die in <code>toolbar_field_highlight</code> verwendet werden,
            kontrastiert.
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
            alt="Browser Firefox ist weiß. Die Tabs und die URL-Leiste des Browsers sind weiß mit Text und Symbolen in schwarz. Das URL-Leistenfeld ist fokussiert und blau umrandet und der Text in der URL-Leiste ist ausgewählt."
            src="toolbar_field_highlight.png"
          />
        </p>
        <p>
          Hierbei wird das Feld <code>toolbar_field_highlight_text</code> verwendet,
          um die Textfarbe auf ein mitteldunkles Grün zu setzen, während die
          Hervorhebungsfarbe ein helles Grün ist.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_separator</code> {{Deprecated_Inline}}</td>
      <td>
        <div class="notecard warning">
          <p>
            <strong>Warnung:</strong> <code>toolbar_field_separator</code> wird
            ab Firefox 89 nicht unterstützt.
          </p>
        </div>
        <p>
          Die Farbe der Trennlinien im Inneren der URL-Leiste. In Firefox 58 war
          dies als <code>toolbar_vertical_separator</code> implementiert.
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
        <p><img alt="Ein Screenshot eines Browserfensters mit einem offenen Tab. Browser Firefox ist schwarz. Die Tabs und die URL-Leiste des Browsers sind schwarz mit Text und Symbolen in weiß. Innerhalb des weißen URL-Leistenfeldes, nach dem Leseansichtsmodus-Symbol, eine rote vertikale Linie, die den Rest der URL-Leisten-Symbole trennt. Die Farbe der vertikalen Trennlinie innerhalb der URL-Leiste ist rot." src="theme-toolbar_field_separator.png" /></p>
        <p>
          In diesem Screenshot ist <code>"toolbar_vertical_separator"</code> die
          rote vertikale Linie in der URL-Leiste, die das Leseansichtsmodus-Symbol
          von den anderen Symbolen trennt.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_text</code></td>
      <td>
        <p>
          Die Farbe des Textes in Feldern in der Symbolleiste, wie die URL-Leiste. Dies
          setzt auch die Farbe des Textes im
          <strong>Suchen in Seite</strong> Feld.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut mit
            denen, die in <code>toolbar_field</code> verwendet werden, kontrastiert.
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
        <p><img alt="Ein Screenshot eines Browserfensters mit einem offenen Tab. Der Browser ist schwarz. Die Tabs und die URL-Leiste des Browsers sind schwarz mit weißem Text und Symbolen. Der Text in der URL-Leiste ist rot. Die Symbole und das Suchfeld haben roten Text mit schwarzem Hintergrund." src="toolbar-field-text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_text_focus</code></td>
      <td>
        <p>
          Die Farbe des Textes in fokussierten Feldern in der Symbolleiste, wie die URL-Leiste.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut mit
            denen, die in <code>toolbar_field_focus</code> verwendet werden, kontrastiert.
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
        <p><img alt="Ein Screenshot eines Browserfensters mit zwei offenen Tabs. Der Browser ist schwarz. Die Tabs und die URL-Leiste des Browsers sind schwarz mit Text und Symbolen in weiß. Die URL-Leiste hat den Fokus; der Text und die Symbole der Leiste sind rot mit schwarzem Hintergrund." src="theme-toolbar_field_text_focus.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_text</code></td>
      <td>
        <p>
          Die Farbe des Symbolleisten-Textes. Dies setzt auch die Textfarbe in der
          "Suchen"-Leiste.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Zur Kompatibilität mit Chrome verwenden Sie den
            Alias <code>bookmark_text</code>.
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
        <p><img alt="Ein Screenshot eines Browserfensters mit einem offenen Tab. Der Browser ist schwarz. Die Tabs, Suchleisten und die URL-Leiste des Browsers sind schwarz mit rotem Text und Symbolen. Der Text innerhalb des aktiven Tabs, der Navigationsleiste und der Suchleiste ist rot." src="toolbar-text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_top_separator</code></td>
      <td>
        <p>
          Die Farbe der Linie, die die Oberseite der Symbolleiste vom
          Bereich darüber trennt.
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
        <p><img alt="Ein Screenshot eines Browserfensters mit einem offenen Tab. Der Browser ist schwarz. Die Tabs und die URL-Leiste des Browsers sind schwarz mit weißem Text und Symbolen. Eine rote Linie trennt die Oberseite der URL-Leiste vom Browser." src="theme-toolbar_top_separator.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_vertical_separator</code></td>
      <td>
        <p>
          Die Farbe des Trennzeichens in der Lesezeichenleiste. In Firefox 58,
          entspricht es der Farbe der Trennlinien in der URL-Leiste.
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
        <p><img alt="Ein Screenshot eines Browserfensters mit einem offenen Tab. Der Browser ist schwarz. Die Tabs und die URL-Leiste des Browsers sind schwarz mit Text und Symbolen in weiß. Die Farbe der vertikalen Linie, die die Lesezeichenleiste vom Inhalt rechts trennt, ist rot." src="theme-toolbar_vertical_separator.png" /></p>
      </td>
    </tr>
  </tbody>
</table>

#### Aliase

Zusätzlich akzeptiert dieser Schlüssel verschiedene Eigenschaften, die Aliase für eine der oben genannten Eigenschaften sind. Diese werden zur Kompatibilität mit Chrome bereitgestellt. Wenn ein Alias angegeben wird und die nicht-alias Version ebenfalls angegeben wird, dann wird der Wert von der nicht-alias Version genommen.

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
          Ein Array von Aufzählungswerten, das die Ausrichtung des
          entsprechenden <code>"additional_backgrounds":</code>-Array-Elements definiert.<br />Die
          Ausrichtungsoptionen umfassen:
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
        <p>Falls nicht angegeben, ist der Standard <code>"right top"</code>.</p>
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
          Ein Array von Aufzählungswerten, das definiert, wie das entsprechende
          <code>"additional_backgrounds":</code>-Array-Element wiederholt wird. Optionen
          umfassen:
        </p>
        <ul>
          <li><code>"no-repeat"</code></li>
          <li><code>"repeat"</code></li>
          <li><code>"repeat-x"</code></li>
          <li><code>"repeat-y"</code></li>
        </ul>
        <p>Falls nicht angegeben, ist der Standard <code>"no-repeat"</code>.</p>
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
          Bestimmt, welches Farbschema auf das Chrome (z. B. Kontextmenüs) und die Inhalte (z. B. eingebaute Seiten und das bevorzugte Farbschema für Webseiten) angewendet wird.
          Optionen umfassen:
        </p>
        <ul>
          <li><code>"auto"</code> – ein helles oder dunkles Schema, das automatisch auf der Basis des Themes basiert.</li>
          <li><code>"light"</code> – ein helles Schema.</li>
          <li><code>"dark"</code> – ein dunkles Schema.</li>
          <li><code>"system"</code> – verwendet das Systemschema.</li>
        </ul>
        <p>Falls nicht angegeben, ist der Standard <code>"auto"</code>.</p>
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
          Bestimmt, welches Farbschema auf den Inhalt angewendet wird (z. B. auf eingebaute Seiten und
          das bevorzugte Farbschema für Webseiten). Überschreibt <code>color_scheme</code>. Optionen
          umfassen:
        </p>
        <ul>
          <li><code>"auto"</code> – ein helles oder dunkles Schema, das automatisch auf der Basis des Themes basiert.</li>
          <li><code>"light"</code> – ein helles Schema.</li>
          <li><code>"dark"</code> – ein dunkles Schema.</li>
          <li><code>"system"</code> – das Systemschema.</li>
        </ul>
        <p>Falls nicht angegeben, ist der Standard <code>"auto"</code>.</p>
      </td>
    </tr>
  </tbody>
</table>

## Beispiele

Ein einfaches Theme muss ein Bild definieren, das der Kopfzeile hinzugefügt wird, die Akzentfarbe, die in der Kopfzeile verwendet werden soll, und die Farbe des Textes, der in der Kopfzeile verwendet wird:

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

Mehrere Bilder können verwendet werden, um die Kopfzeile zu füllen. Vor Firefox Version 60 verwenden Sie ein leeres oder transparentes Kopfzeilenbild, um die Positionierung jedes zusätzlichen Bildes zu kontrollieren:

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

Sie können die Kopfzeile auch mit einem wiederholten Bild oder Bildern füllen. In diesem Fall ist ein einzelnes Bild in der Mitte oben in der Kopfzeile verankert und über den Rest der Kopfzeile verteilt:

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

Es gibt Ihnen einen Browser, der folgendermaßen aussieht:

![Ein Browserfenster mit zwei geöffneten Tabs und dunklem grünen Hintergrund im Kopfbereich. Der inaktive Tab hat eine weiße Textfarbe. Der aktive Tab und die Symbolleiste haben eine blaue Hintergrundfarbe mit zyanfarbigem Text. Die URL-Leiste hat einen orangefarbenen Hintergrund mit weißen Rändern, eine grüne Textfarbe und einen weißen vertikalen Linienseparator. Eine rote Linie wird verwendet, um die Tabs oben zu trennen und eine weiße Linie, um die Tabs vom darunterliegenden Inhalt zu trennen.](theme.png)

In diesem Screenshot ist `"toolbar_vertical_separator"` die weiße vertikale Linie in der URL-Leiste, die das Leseansichtsmodus-Symbol von den anderen Symbolen trennt.

## Browser-Kompatibilität

{{Compat}}

### Chrome-Kompatibilität

In Chrome:

- `colors/toolbar_text` wird nicht verwendet, verwenden Sie stattdessen `colors/bookmark_text`.
- `images/theme_frame` verankert das Bild an der oberen linken Ecke des Kopfbereichs und wenn das Bild den Kopfbereich nicht ausfüllt, wird es gekachelt.
- alle Farben müssen als ein Array von RGB-Werten angegeben werden, wie folgt:

  ```json
  "theme": {
    "colors": {
       "frame": [255, 0, 0],
       "tab_background_text": [0, 255, 0],
       "bookmark_text": [0, 0, 255]
    }
  }
  ```

  Ab Firefox 59 werden sowohl die Array-Form als auch die CSS-Farbform für alle Eigenschaften akzeptiert. Davor erforderten `colors/frame` und `colors/tab_background_text` die Array-Form, während andere Eigenschaften die CSS-Farbform erforderten.
