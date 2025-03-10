---
title: theme
slug: Mozilla/Add-ons/WebExtensions/manifest.json/theme
l10n:
  sourceCommit: 9c9be5239fe7fb2907784e8cace339d4910eb103
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

Verwenden Sie den Schlüssel `theme`, um ein statisches Thema zu definieren, das auf Firefox angewendet wird.

> [!NOTE]
> Wenn Sie ein Thema mit einer Erweiterung einbinden möchten, sehen Sie bitte die {{WebExtAPIRef("theme")}} API.

> [!NOTE]
> Seit Mai 2019 müssen Themen signiert sein, um installiert werden zu können ([Firefox-Bug 1545109](https://bugzil.la/1545109)). Weitere Informationen finden Sie unter [Signieren und Verteilen Ihres Add-ons](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/#distributing-your-addon).

> [!NOTE]
> Eine neue Version von Firefox für Android, basierend auf GeckoView, befindet sich in der Entwicklung. Eine [Vorabversion](https://play.google.com/store/apps/details?id=org.mozilla.fenix) ist verfügbar. Die Vorabversion unterstützt keine Themen.

## Bildformate

Die folgenden Bildformate werden in allen Theme-Bildeigenschaften unterstützt:

- JPEG
- PNG
- APNG
- SVG (animiertes SVG wird ab Firefox 59 unterstützt)
- GIF (animierte GIFs werden nicht unterstützt)

## Syntax

Der `theme`-Schlüssel ist ein Objekt, das die folgenden Eigenschaften annimmt:

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
        <p>Optional ab Firefox 60. Verpflichtend vor Firefox 60.</p>
        <p>
          Ein JSON-Objekt, dessen Eigenschaften die anzuzeigenden Bilder in
          verschiedenen Teilen des Browsers darstellen. Siehe
          <code><a href="#images">images</a></code> für Details zu den
          Eigenschaften, die dieses Objekt enthalten kann.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>colors</code></td>
      <td><code>Object</code></td>
      <td>
        <p>Verpflichtend.</p>
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
          <code>"additional_backgrounds"</code>-Bilder angezeigt werden und Farbschemata angewendet werden. Siehe
          <code><a href="#properties">properties</a></code> für Details zu den Eigenschaften, die dieses Objekt enthalten kann.
        </p>
      </td>
    </tr>
  </tbody>
</table>

### images

Alle URLs sind relativ zur `manifest.json`-Datei und können nicht auf eine externe URL verweisen.

Bilder sollten 200 Pixel hoch sein, um sicherzustellen, dass sie den Header-Bereich immer vertikal ausfüllen.

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
          Die URL eines Vordergrundbildes, das dem Header-Bereich hinzugefügt und
          an der oberen rechten Ecke des Headers verankert wird.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Chrome verankert das Bild am oberen linken Rand
            des Headers und plattiert das Bild, wenn es den Header-Bereich nicht vollständig ausfüllt.
          </p>
        </div>
        <p>
          Optional in Desktop Firefox ab Version 60. Erforderlich in Firefox für Android.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>additional_backgrounds</code></td>
      <td><code>Array</code> von <code>String</code></td>
      <td>
        <div class="warning">
          <p>
            <strong>Warnung:</strong> Die Eigenschaft
            <code>additional_backgrounds</code> ist experimentell. Sie wird
            derzeit in Freigabeversionen von Firefox akzeptiert, aber ihr Verhalten
            kann sich ändern. Es wird in Firefox für Android nicht unterstützt.
          </p>
        </div>
        <p>
          Ein Array von URLs für zusätzliche Hintergrundbilder, die dem
          Header-Bereich hinzugefügt und hinter dem
          <code>"theme_frame":</code>-Bild angezeigt werden. Diese Bilder legen das erste Bild
          im Array oben an, das letzte Bild im Array unten.
        </p>
        <p>Optional.</p>
        <p>
          Standardmäßig sind alle Bilder an der oberen rechten Ecke des
          Header-Bereichs verankert, aber ihre Ausrichtung und Wiederholung können durch Eigenschaften von
          <code>"properties":</code> gesteuert werden.
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
            alt="Übersicht der Farbeigenschaften und wie sie auf Firefox-Benutzeroberflächenkomponenten angewendet werden"
            src="themes_components_annotations.png"
          />
        </p>
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Wo ein Bauteil von mehreren Farbeigenschaften beeinflusst wird, sind die Eigenschaften in der Reihenfolge der Priorität aufgelistet.

Alle diese Eigenschaften können entweder als Zeichenfolge, die einen gültigen [CSS-Farbstring](/de/docs/Web/CSS/color_value) (einschließlich Hexadezimal) enthält, oder als RGB-Array angegeben werden, z.B. `"tab_background_text": [ 107 , 99 , 23 ]`.

> **Hinweis:** [In Chrome können Farben nur als RGB-Arrays angegeben werden](#chrome-kompatibilität).
>
> In Firefox für Android können Farben folgendermaßen angegeben werden:
>
> - vollständige hexadezimale Notation, also nur #RRGGBB. _Alpha_ und verkürzte Syntax, wie in #RGB\[A], werden nicht unterstützt.
> - [funktionale Notation](/de/docs/Web/CSS/color_value#rgb_syntax_variations) (RGB-Arrays) für Themen, die Firefox 68.2 oder später anvisieren.
>
> Farben für Firefox für Android-Themen können nicht mit Farbnamen angegeben werden.

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
          Die Farbe des Textes und der Symbole in den Lesezeichen- und Suchleisten. Außerdem, wenn
          <code>tab_text</code> nicht definiert ist, legt es die Farbe des aktiven
          Tab-Textes fest und wenn <code>icons</code> nicht definiert ist, die Farbe der
          Toolbar-Symbole. Bereitgestellt als Chrome-kompatibler Alias für
          <code>toolbar_text</code>.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass jede verwendete Farbe gut kontrastiert mit
            den Farben, die in <code>frame</code> und <code>frame_inactive</code> oder
            <code>toolbar</code> verwendet werden, wenn Sie diese Eigenschaft verwenden.
          </p>
          <p>
            Wo <code>icons</code> nicht definiert ist, stellen Sie auch sicher, dass es einen guten Kontrast gibt
            mit <code>button_background_active</code> und
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
          <img
            alt="Das Firefox-Browserfenster ist schwarz. Die Tabs des Browsers sind schwarz mit weißem Text. Die URL-Leiste und die 'Seite suchen'-Leiste sind weiß mit schwarzem Text, aber alle Browser- und 'Seite suchen'-Leistensymbole sind rot."
            src="theme-bookmark_text.png"
          />
        </p>
      </td>
    </tr>
    <tr>
      <td><code>button_background_active</code></td>
      <td>
        <p>Farbe des Hintergrunds der gedrückten Toolbar-Schaltflächen.</p>
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
        <p><img alt="Der Firefox-Browser ist schwarz. Die Tabs und die URL-Leiste des Browsers sind grau mit weißem Text. Das Anpassen der Toolbar-Symbole in der URL-Leiste in weiß mit einem roten Hintergrund ist gedrückt und ein Popup wird geöffnet, das eine kurze Liste von Elementen anzeigt, die zur Toolbar hinzugefügt werden können, wie die Bibliothek des Browsers und die Sidebars." src="theme-button_background_active.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>button_background_hover</code></td>
      <td>
        <p>Farbe des Hintergrunds der Toolbar-Schaltflächen beim Überfahren.</p>
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
        <p><img alt="Der Firefox-Browser ist schwarz. Die Tabs und die URL-Leiste des Browsers sind grau mit weißem Text. Das Gehe-zurück-eine-Seite-Symbol ist weiß mit einem roten Kreis als Hintergrund." src="theme-button_background_hover.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>icons</code></td>
      <td>
        <p>Farbe der Toolbar-Symbole, mit Ausnahme der Symbole in der Suchleiste.</p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut kontrastiert mit
            den Farben, die in <code>frame</code>, <code>frame_inactive</code>,
            <code>button_background_active</code> und
            <code>button_background_hover</code> verwendet werden.
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
        <p><img alt="Der Firefox-Browser ist schwarz. Die Tabs und die URL-Leiste des Browsers sind grau mit weißem Text. Die URL-Leiste und 'neuen Tab öffnen'-Symbole sind rot. Die roten Symbole kontrastieren gut mit der schwarzen Hintergrundfarbe des Header-Bereichs." src="theme-icons.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>icons_attention</code></td>
      <td>
        <p>
          Farbe der Toolbar-Symbole im Aufmerksamkeitszustand, wie das Sterne-Lesezeichen-Symbol oder das Symbol für das abgeschlossene Herunterladen.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut kontrastiert mit
            den Farben, die in <code>frame</code>, <code>frame_inactive</code>,
            <code>button_background_active</code> und
            <code>button_background_hover</code> verwendet werden.
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
        <p><img alt="Der Firefox-Browser ist schwarz. Die Tabs und die URL-Leiste des Browsers sind grau mit weißem Text. Das Dieses-Seite-Lesezeichen-Symbol ist rot und gedrückt, ein offenes Popup mit dem Namen 'Dieses Lesezeichen bearbeiten' wird angezeigt. Im Aufmerksamkeitszustand kontrastieren die Toolbar-Symbole gut mit dem schwarzen Hintergrund des Header-Bereichs." src="theme-icons_attention.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>frame</code></td>
      <td>
        <p>
          Farbe des Hintergrunds des Header-Bereichs, angezeigt im Teil des
          Headers, der nicht durch die in <code>"theme_frame"</code> und <code>"additional_backgrounds"</code>
          angegebenen Bilder abgedeckt oder sichtbar ist.
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
        <p><img alt="Der Firefox-Browser ist rot mit weißem Text. Die Tabs des Browsers sind heller rot, ebenfalls mit weißem Text. Die URL-Leiste ist sehr hell rot mit schwarzem Text" src="theme-frame.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>frame_inactive</code></td>
      <td>
        <p>
          Farbe des Hintergrunds des Header-Bereichs, wenn das Browser-Fenster
          inaktiv ist, angezeigt im Teil des Headers, der nicht durch die in <code>"theme_frame"</code> und
          <code>"additional_backgrounds"</code> angegebenen Bilder abgedeckt oder sichtbar ist.
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
            alt="Der Firefox-Browser ist grau. Die Tabs und die URL-Leiste des Browsers sind heller grau. Der Tab-Text ist weiß und die URL-Leisten-Symbole sind dunkler grau."
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
        <p><img alt="Firefox zeigt eine neue Tab-Seite an. Der Hintergrund der Seite ist rot." src="ntp-background.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>ntp_card_background</code></td>
      <td>
        <p>Die Hintergrundfarbe der neuen Tab-Seitenkarte.</p>
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
        <p><img alt="Firefox zeigt eine neue Tab-Seite an. Auf der Seite ist der Hintergrund der Suchleiste und der Schnellzugriff-Buttons rot." src="ntp-card-background.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>ntp_text</code></td>
      <td>
        <p>Die Textfarbe der neuen Tab-Seite.</p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut kontrastiert mit
            jener, die in <code>ntp_background</code> und <code>ntp_card_background</code> verwendet wird.
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
        <p><img alt="Firefox zeigt eine neue Tab-Seite an. Auf der Seite ist der Text in Rot dargestellt." src="ntp-text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>popup</code></td>
      <td>
        <p>
          Die Hintergrundfarbe von Popups (z.B. das Dropdown der URL-Leiste und die
          Pfeil-Panels).
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
        <p><img alt="Der Firefox-Browser ist schwarz. Die Tabs und die URL-Leiste des Browsers sind heller grau mit weißen Symbolen und Text. Das Symbol 'Diese Seite als Lesezeichen speichern' ist blau und gedrückt, ein offenes Popup mit dem Namen 'Dieses Lesezeichen bearbeiten' wird angezeigt, der Hintergrund ist rot. Die Hintergrundfarbe des Popups ist rot." src="theme-popup.png" /></p>
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
        <p><img alt="Der Firefox-Browser ist schwarz. Die Tabs und die URL-Leiste des Browsers sind heller grau mit weißen Symbolen und Text. Das Symbol 'Diese Seite als Lesezeichen speichern' ist blau und gedrückt, ein offenes Popup mit dem Namen 'Dieses Lesezeichen bearbeiten' wird angezeigt mit rotem Rand und schwarzem Hintergrund. Der Rahmen des Popups ist rot." src="theme-popup_border.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>popup_highlight</code></td>
      <td>
        <p>
          Die Hintergrundfarbe von Elementen, die innerhalb von Popups mit der
          Tastatur hervorgehoben werden (z.B. das ausgewählte Dropdown-Element in der URL-Leiste).
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Es wird empfohlen,
            <code>popup_highlight_text</code> zu definieren, um die Standard-Browser-Textfarbe auf verschiedenen Plattformen zu überschreiben.
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
        <p><img alt="screenshot von firefox ist schwarz. Die Tabs und die URL-Leiste des Browsers sind heller grau mit weißen Symbolen und Text. Ein Suchergebnis-Popup wird angezeigt mit einem hervorgehobenen Element in rotem Hintergrund. Der Hintergrund des hervorgehobenen Elements im Popup ist rot." src="theme-popup_highlight.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>popup_highlight_text</code></td>
      <td>
        <p>Die Textfarbe von hervorgehobenen Elementen innerhalb von Popups.</p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut kontrastiert mit
            jener, die in <code>popup_highlight</code> verwendet wird.
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
        <p><img alt="Der Firefox-Browser ist schwarz. Die Tabs und die URL-Leiste des Browsers sind heller grau mit weißen Symbolen und Text. Ein Suchergebnis-Popup wird angezeigt mit einem hervorgehobenen Element mit rotem Text auf schwarzem Hintergrund. Die Textfarbe des hervorgehobenen Elements kontrastiert gut mit dem schwarzen Hintergrund dieses Elements." src="theme-popup_highlight_text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>popup_text</code></td>
      <td>
        <p>Die Textfarbe von Popups.</p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut kontrastiert mit
            jener, die in <code>popup</code> verwendet wird.
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
        <p><img alt="Der Firefox-Browser ist schwarz. Die Tabs und die URL-Leiste des Browsers sind heller grau mit weißen Symbolen und Text. Ein Suchergebnis-Popup wird angezeigt mit Text in Rot. Die Textfarbe kontrastiert gut mit dem schwarzen Hintergrund des Popups." src="popup_text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>sidebar</code></td>
      <td>
        <p>Die Hintergrundfarbe der Sidebar.</p>
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
        <p><img alt="Ein Nahaufnahme-Screenshot des offenen Sidebars eines Browserfensters. Die Hintergrundfarbe des Sidebars ist rot." src="sidebar-colors.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>sidebar_border</code></td>
      <td>
        <p>Die Rahmen- und Trennerfarbe der Browersidebar</p>
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
        <p><img alt="Ein Nahaufnahme-Screenshot der Firefox-Browser-Lesezeichen-Sidebar mit einem roten horizontalen Trenner zwischen dem Sidebar-Titel und dem Sidebar-Menü. Die Rahmen- und Trennerfarbe der Sidebar ist rot." src="sidebar-border.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>sidebar_highlight</code></td>
      <td>
        <p>Die Hintergrundfarbe von hervorgehobenen Zeilen in eingebauten Sidebars</p>
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
        <p><img alt="Ein Nahaufnahme-Screenshot der Firefox-Browser-Lesezeichen-Sidebar mit einem hervorgehobenen Element. Die Hintergrundfarbe einer hervorgehobenen Zeile in der Sidebar ist rot mit weißem Text." src="sidebar-highlight.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>sidebar_highlight_text</code></td>
      <td>
        <p>Die Textfarbe von hervorgehobenen Zeilen in Sidebars.</p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut kontrastiert mit
            jener, die in <code>sidebar_highlight</code> verwendet wird.
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
        <p><img alt="Ein Nahaufnahme-Screenshot der Firefox-Browser-Lesezeichen-Sidebar mit einem hervorgehobenen Element. Die Farbe des Textes einer hervorgehobenen Zeile in der Sidebar ist rot. Die Textfarbe kontrastiert gut mit der pinken Hintergrundfarbe der hervorgehobenen Zeile." src="sidebar-highlight-text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>sidebar_text</code></td>
      <td>
        <p>Die Textfarbe von Sidebars.</p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut kontrastiert mit
            jener, die in <code>sidebar</code> verwendet wird.
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
        <p><img alt="Ein Nahaufnahme-Screenshot des offenen Sidebars eines Browserfensters. Die Farbe des Textes innerhalb des Sidebars ist weiß. Die Textfarbe kontrastiert gut mit dem roten Hintergrund des Sidebars." src="sidebar-colors.png" /></p>
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
            ab Firefox 89 nicht mehr unterstützt.
          </p>
        </div>
        <p>Die Farbe des vertikalen Trenners der Hintergrund-Tabs.</p>
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
            alt="Ein Nahaufnahme-Screenshot der Browser-Tabs, um den Separator hervorzuheben."
            src="theme-tab-background-separator.png"
          />
        </p>
      </td>
    </tr>
    <tr>
      <td><code>tab_background_text</code></td>
      <td>
        <p>
          Die Farbe des Textes, der in den inaktiven Pagetabs angezeigt wird. Wenn
          <code>tab_text</code> oder <code>bookmark_text</code> nicht spezifiziert ist,
          gilt dies für den aktiven Tab-Text.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut kontrastiert mit
            den Farben, die in <code>tab_selected</code> oder <code>frame</code> und
            <code>frame_inactive</code> verwendet werden.
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
        <p><img alt="Der Firefox-Browser ist schwarz. Die Tabs und die URL-Leiste des Browsers sind dunkler grau mit hellgrauen Symbolen und weißem Text. Der ausgewählte Tab hat eine rote Umrandung." src="theme-tab_line.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>tab_loading</code></td>
      <td>
        <p>Die Farbe des Tabs-Ladeindikators und des Lade-Bursts.</p>
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
        <p><img alt="Ein Screenshot eines Browserfensters mit einem offenen Tab. Der Browser ist schwarz. Die Tabs und die URL-Leiste des Browsers sind dunkler grau mit weißen Symbolen und Text. Im ausgewählten Tab ist ein animierter Ladeindikator rot." src="theme-tab_loading.gif" /></p>
      </td>
    </tr>
    <tr>
      <td><code>tab_selected</code></td>
      <td>
        <p>
          Die Hintergrundfarbe des ausgewählten Tabs. Wenn nicht verwendet, wird die ausgewählte Tab-Farbe durch <code>frame</code> und den
          <code>frame_inactive</code> festgelegt.
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
        <p><img alt="Ein Screenshot eines Browserfensters mit einem offenen Tab. Der Browser ist schwarz. Die Tabs und die URL-Leiste des Browsers sind dunkler grau mit weißen Symbolen und Text. Der ausgewählte Tab hat einen roten Hintergrund und weißen Text." src="theme-tab_selected.png" /></p>
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
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut kontrastiert mit
            den Farben, die in <code>tab_selected</code> oder <code>frame</code> und
            <code>frame_inactive</code> verwendet werden.
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
        <p><img alt="Der Firefox-Browser hat ein Insektenthema als Bild. Die URL-Leiste ist heller grau mit weißen Symbolen. Der Text des ausgewählten Tabs ist rot mit weißem Hintergrund." src="theme-tab_text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar</code></td>
      <td>
        <p>
          Die Hintergrundfarbe für die Navigationsleiste, die Lesezeichenleiste
          und den ausgewählten Tab.
        </p>
        <p>Dies legt auch die Hintergrundfarbe der "Suchleiste" fest.</p>
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
        <p><img alt="Der Firefox-Browser ist schwarz. Die Tabs, die Suchleiste und die URL-Leiste des Browsers sind rot mit weißen Symbolen und Text, mit Ausnahme der Suchleiste, bei der der Text und die Symbole schwarz sind." src="toolbar.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_bottom_separator</code></td>
      <td>
        <p>
          Die Farbe der Linie, die den unteren Rand der Toolbar von der
          darunterliegenden Region trennt.
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
        <p><img alt="Der Firefox-Browser ist schwarz. Die Tabs und die URL-Leiste des Browsers sind heller grau mit weißen Symbolen und Text. Eine horizontale rote Linie trennt den unteren Rand der Toolbar von der Anzeige der Webseite." src="theme-toolbar_bottom_separator.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field</code></td>
      <td>
        <p>
          Die Hintergrundfarbe für Felder in der Toolbar, wie die URL-Leiste.
        </p>
        <p>
          Dies legt auch die Hintergrundfarbe des <strong>Suchens auf der Seite</strong>-Feldes fest.
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
        <p><img alt="Der Firefox-Browser ist schwarz. Die Tabs, die Suchleiste und die URL-Leiste des Browsers sind heller grau mit weißen Symbolen und Text. Die Hintergrundfarbe der URL-Leiste ist rot. Die Suchleiste ist weiß mit schwarzem Text. Das Suchfeld hat roten Hintergrund mit schwarzem Text." src="toolbar-field.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_border</code></td>
      <td>
        <p>Die Rahmenfarbe für Felder in der Toolbar.</p>
        <p>
          Dies legt auch die Rahmenfarbe des
          <strong>Suchens auf der Seite</strong>-Feldes fest.
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
        <p><img alt="Der Firefox-Browser ist schwarz. Die Tabs, der Suchleiste und die URL-Leiste des Browsers sind schwarz mit weißen Symbolen und Text. Die URL-Leiste und das Suchfeld sind rot umrandet." src="toolbar-field-border.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_border_focus</code></td>
      <td>
        <p>Die Fokus-Rahmenfarbe für Felder in der Toolbar.</p>
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
        <p><img alt="Der Firefox-Browser ist schwarz. Die Tabs und die URL-Leiste des Browsers sind schwarz mit weißen Symbolen und Text. Das URL-Feld ist fokussiert und rot umrandet." src="theme-toolbar_field_border_focus.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_focus</code></td>
      <td>
        <p>
          Die fokussierte Hintergrundfarbe für Felder in der Toolbar, wie die
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
        <p><img alt="Der Firefox-Browser ist schwarz. Die Tabs, die Suchleiste und die URL-Leiste des Browsers sind schwarz mit weißen Symbolen und Text. Die Hintergrundfarbe der fokussierten URL-Leiste ist rot und der Text ist weiß." src="theme-toolbar_field_focus.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_highlight</code></td>
      <td>
        Die Hintergrundfarbe zur Anzeige der aktuellen Markierung von Text in
        der URL-Leiste (und der Suchleiste, falls sie als separate Box konfiguriert ist).
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
            alt="Der Firefox-Browser ist weiß. Die Tabs und die URL-Leiste des Browsers sind weiß mit schwarzen Symbolen und Text. Das URL-Feld ist fokussiert und blau umrandet und der URL-Leistentext ist ausgewählt."
            src="toolbar_field_highlight.png"
          />
        </p>
        <p>
          Hier gibt das <code>toolbar_field_highlight</code>-Feld an, dass
          die Hervorhebungsfarbe ein helles Grün ist, während der Text auf ein
          Dunkel- bis Mittelgrün mit <code>toolbar_field_highlight_text</code> gesetzt wird.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_highlight_text</code></td>
      <td>
        <p>
          Die Farbe, die verwendet wird, um Text zu zeichnen, der aktuell in der URL-Leiste
          (und der Suchleiste, falls sie als separate Box konfiguriert ist) ausgewählt ist.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut kontrastiert mit
            jener, die in <code>toolbar_field_highlight</code> verwendet wird.
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
            alt="Der Firefox-Browser ist weiß. Die Tabs und die URL-Leiste des Browsers sind weiß mit schwarzen Symbolen und Text. Das URL-Feld ist fokussiert und blau umrandet und der URL-Leistentext ist ausgewählt."
            src="toolbar_field_highlight.png"
          />
        </p>
        <p>
          Hier wird das <code>toolbar_field_highlight_text</code>-Feld verwendet, um
          den Text auf ein dunkelmittleres Grün zu setzen, während die Hervorhebungsfarbe
          ein helles Grün ist.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_separator</code> {{Deprecated_Inline}}</td>
      <td>
        <div class="notecard warning">
          <p>
            <strong>Warnung:</strong> <code>toolbar_field_separator</code> wird
            ab Firefox 89 nicht mehr unterstützt.
          </p>
        </div>
        <p>
          Die Farbe der Separatoren innerhalb der URL-Leiste. In Firefox 58 wurde dies
          als <code>toolbar_vertical_separator</code> implementiert.
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
        <p><img alt="Ein Screenshot eines Browserfensters mit einem offenen Tab. Der Firefox-Browser ist schwarz. Die Tabs und die URL-Leiste des Browsers sind schwarz mit weißen Symbolen und Text. Innerhalb der weißen URL-Leiste, nach dem Reader Mode-Symbol, eine rote vertikale Linie, die die anderen URL-Leisten-Symbole trennt. Die Farbe der vertikalen Trennlinie innerhalb der URL-Leiste ist rot." src="theme-toolbar_field_separator.png" /></p>
        <p>
          In diesem Screenshot ist <code>"toolbar_vertical_separator"</code> die
          rote vertikale Linie in der URL-Leiste, die das Reader Mode-Symbol von den
          anderen Symbolen trennt.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_text</code></td>
      <td>
        <p>
          Die Farbe des Textes in den Feldern der Toolbar, wie der URL-Leiste. Dies
          legt auch die Textfarbe im
          <strong>Suchens auf der Seite</strong>-Feld fest.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut kontrastiert mit
            den Farben, die in <code>toolbar_field</code> verwendet werden.
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
        <p><img alt="Ein Screenshot eines Browserfensters mit einem offenen Tab. Der Browser ist schwarz. Die Tabs und die URL-Leiste des Browsers sind schwarz mit weißen Symbolen und Text. Der Text in der URL-Leiste ist rot. Die Symbole und das Suchfeld haben roten Text mit schwarzem Hintergrund." src="toolbar-field-text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_text_focus</code></td>
      <td>
        <p>
          Die Farbe des Textes in fokussierten Feldern in der Toolbar, wie der URL-Leiste.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut kontrastiert mit
            den Farben, die in <code>toolbar_field_focus</code> verwendet werden.
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
        <p><img alt="Ein Screenshot eines Browserfensters mit zwei offenen Tabs. Der Browser ist schwarz. Die Tabs und die URL-Leiste des Browsers sind schwarz mit weißen Symbolen und Text. Die URL-Leiste hat Fokus; der Text und die Symbole sind rot mit schwarzem Hintergrund." src="theme-toolbar_field_text_focus.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_text</code></td>
      <td>
        <p>
          Die Farbe des Toolbar-Textes. Dies legt auch die Farbe des Textes in der
          "Suchleiste" fest.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Für Kompatibilität mit Chrome verwenden Sie den Alias
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
        <p><img alt="Ein Screenshot eines Browserfensters mit einem offenen Tab. Der Browser ist schwarz. Die Tabs, die Suchleiste und die URL-Leiste des Browsers sind schwarz mit rotem Text und Symbolen. Der Text innerhalb des aktiven Tabs, der Navigationsleiste und der Suchleisten ist rot." src="toolbar-text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_top_separator</code></td>
      <td>
        <p>
          Die Farbe der Linie, die den oberen Rand der Toolbar von der
          darüberliegenden Region trennt.
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
        <p><img alt="Ein Screenshot eines Browserfensters mit einem offenen Tab. Der Browser ist schwarz. Die Tabs und die URL-Leiste des Browsers sind schwarz mit weißen Symbolen und Text. Eine rote Linie trennt den oberen Rand der URL-Leiste vom Browser." src="theme-toolbar_top_separator.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_vertical_separator</code></td>
      <td>
        <p>
          Die Farbe des Separators in der Lesezeichenleiste. In Firefox 58 entspricht sie
          der Farbe der Separatoren innerhalb der URL-Leiste.
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
        <p><img alt="Ein Screenshot eines Browserfensters mit einem offenen Tab. Der Browser ist schwarz. Die Tabs und die URL-Leiste des Browsers sind schwarz mit weißen Symbolen und Text. Die Farbe der vertikalen Linie, die die Lesezeichenleiste von dem rechten Inhalt trennt, ist rot." src="theme-toolbar_vertical_separator.png" /></p>
      </td>
    </tr>
  </tbody>
</table>

#### Aliasse

Zusätzlich akzeptiert dieser Schlüssel verschiedene Eigenschaften, die Aliasse für eine der oben genannten Eigenschaften sind. Diese werden zur Kompatibilität mit Chrome bereitgestellt. Wenn ein Alias angegeben ist und auch die Nicht-Alias-Version gegeben ist, wird der Wert von der Nicht-Alias-Version übernommen.

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
          Ein Array von Enumerationswerten, die die Ausrichtung des
          entsprechenden <code>"additional_backgrounds":</code>-Arrayelements definiert.<br />Die
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
        <p>Wenn nicht angegeben, wird standardmäßig <code>"right top"</code> verwendet.</p>
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
          Ein Array von Enumerationswerten, die definieren, wie das entsprechende
          <code>"additional_backgrounds":</code>-Arrayelement wiederholt wird. Optionen
          umfassen:
        </p>
        <ul>
          <li><code>"no-repeat"</code></li>
          <li><code>"repeat"</code></li>
          <li><code>"repeat-x"</code></li>
          <li><code>"repeat-y"</code></li>
        </ul>
        <p>Wenn nicht angegeben, wird standardmäßig <code>"no-repeat"</code> verwendet.</p>
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
          Bestimmt, welches Farbschema auf Chrome (beispielsweise Kontextmenüs)
          und Inhalt (beispielsweise integrierte Seiten und das bevorzugte Farbschema für Webseiten) angewendet wird.
          Optionen umfassen:
        </p>
        <ul>
          <li><code>"auto"</code> – ein helles oder dunkles Schema, das automatisch basierend auf dem Thema ausgewählt wird.</li>
          <li><code>"light"</code> – ein helles Schema.</li>
          <li><code>"dark"</code> – ein dunkles Schema.</li>
          <li><code>"system"</code> – verwendet das System-Schema.</li>
        </ul>
        <p>Wenn nicht angegeben, wird standardmäßig <code>"auto"</code> verwendet.</p>
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
          Bestimmt, welches Farbschema auf den Inhalt angewendet wird (beispielsweise integrierte Seiten und das
          bevorzugte Farbschema für Webseiten). Überschreibt <code>color_scheme</code>. Optionen
          umfassen:
        </p>
        <ul>
          <li><code>"auto"</code> – ein helles oder dunkles Schema, das automatisch basierend auf dem Thema ausgewählt wird.</li>
          <li><code>"light"</code> – ein helles Schema.</li>
          <li><code>"dark"</code> – ein dunkles Schema.</li>
          <li><code>"system"</code> – das System-Schema.</li>
        </ul>
        <p>Wenn nicht angegeben, wird standardmäßig <code>"auto"</code> verwendet.</p>
      </td>
    </tr>
  </tbody>
</table>

## Beispiele

Ein grundlegendes Thema muss ein Bild definieren, das dem Header hinzugefügt wird, die Akzentfarbe, die im Header verwendet wird, und die Farbe des verwendeten Textes im Header:

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

Mehrere Bilder können verwendet werden, um den Header zu füllen. Vor der Firefox-Version 60 verwenden Sie ein leeres oder transparentes Header-Bild, um die Platzierung jedes zusätzlichen Bildes steuern zu können:

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

Der Header kann auch mit einem wiederholten Bild oder Bildern gefüllt werden, in diesem Fall ein einzelnes Bild, das in der Mitte oben des Headers verankert ist und über den Rest des Headers wiederholt wird:

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

Dies ergibt einen Browser, der so aussieht:

![Ein Browserfenster mit zwei offenen Tabs und dunkelgrüner Hintergrundfarbe im Header-Bereich. Der inaktive Tab hat eine weiße Textfarbe. Der aktive Tab und die Toolbar haben eine blaue Hintergrundfarbe mit cyanfarbigen Text. Die URL-Leiste hat einen orangefarbenen Hintergrund mit weißen Rändern, eine grüne Textfarbe und eine weißgefärbte vertikale Linien-Separator. Eine rotgefärbte Linie wird verwendet, um die Tabs oben zu trennen und eine weiße Linie trennt die Tabs vom darunterliegendem Inhalt.](theme.png)

In diesem Screenshot ist `"toolbar_vertical_separator"` die weiße vertikale Linie in der URL-Leiste, die das Reader Mode-Symbol von den anderen Symbolen trennt.

## Browser-Kompatibilität

{{Compat}}

### Chrome-Kompatibilität

In Chrome:

- `colors/toolbar_text` wird nicht verwendet, verwenden Sie stattdessen `colors/bookmark_text`.
- `images/theme_frame` verankert das Bild am oberen linken Rand des Headers und wenn das Bild den Header-Bereich nicht vollständig ausfüllt, wird das Bild gekachelt.
- alle Farben müssen als Array von RGB-Werten angegeben werden, wie hier:

  ```json
  "theme": {
    "colors": {
       "frame": [255, 0, 0],
       "tab_background_text": [0, 255, 0],
       "bookmark_text": [0, 0, 255]
    }
  }
  ```

  Ab Firefox 59 werden sowohl die Array-Form als auch die CSS-Farbform für alle Eigenschaften akzeptiert. Vorher erforderten `colors/frame` und `colors/tab_background_text` die Array-Form, während andere Eigenschaften die CSS-Farbform erforderten.
