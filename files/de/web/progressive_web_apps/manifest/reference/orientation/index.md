---
title: orientation
slug: Web/Progressive_web_apps/Manifest/Reference/orientation
l10n:
  sourceCommit: 9cfc2285428932f448a1747e347b1e35a3e0172b
---

Das `orientation`-Manifestmitglied wird verwendet, um die Standardausrichtung Ihrer Webanwendung festzulegen. Es definiert, wie die App beim Start und während der Nutzung im Verhältnis zur Geräteausrichtung angezeigt werden soll, besonders auf Geräten, die mehrere Ausrichtungen unterstützen.

> [!NOTE]
> Die Ausrichtung der App kann während der Laufzeit durch verschiedene Mittel geändert werden, wie zum Beispiel mit der [Screen Orientation API](/de/docs/Web/API/Screen_Orientation_API).

## Syntax

```json-nolint
/* Keyword values */
"orientation": "any"
"orientation": "natural"
"orientation": "portrait"
"orientation": "portrait-primary"
"orientation": "portrait-secondary"
"orientation": "landscape"
"orientation": "landscape-primary"
"orientation": "landscape-secondary"
```

### Werte

- `orientation`
  - : Eine Zeichenkette, die die Standardausrichtung für die Web-App angibt. Wenn das `orientation`-Mitglied nicht spezifiziert ist oder ein ungültiger Wert bereitgestellt wird, verwendet die Web-App in der Regel die natürliche Ausrichtung des Geräts und jegliche Benutzer- oder Systemeinstellungen zur Ausrichtung.

    Der `orientation`-Wert muss eines der folgenden Schlüsselwörter sein:
    - `any`
      - : Zeigt die Web-App in jeder vom Betriebssystem des Geräts oder den Benutzereinstellungen erlaubten Ausrichtung an. Es erlaubt der App, sich frei zu drehen, um die Ausrichtung des Geräts beim Drehen anzupassen.

    - `natural`
      - : Zeigt die Web-App in der Ausrichtung an, die für das Gerät als am natürlichsten erachtet wird, wie vom Browser, Betriebssystem, Benutzereinstellungen oder dem Bildschirm selbst bestimmt. Sie entspricht der Art und Weise, wie das Gerät am häufigsten gehalten oder verwendet wird:
        - Auf Geräten, die typischerweise vertikal gehalten werden, wie Mobiltelefone, ist `natural` normalerweise `portrait-primary`.
        - Auf Geräten, die typischerweise horizontal verwendet werden, wie Computermonitore und Tablets, ist `natural` normalerweise `landscape-primary`.

        Wenn das Gerät gedreht wird, kann die App sich entsprechend der natürlichen Ausrichtung des Geräts drehen oder nicht; dieses Verhalten kann je nach spezifischem Gerät, Browserversion und Benutzereinstellungen variieren.

    - `portrait`
      - : Zeigt die Web-App mit einer Höhe größer als die Breite an. Es erlaubt der App, zwischen den Ausrichtungen `portrait-primary` und `portrait-secondary` zu wechseln, wenn das Gerät gedreht wird.

    - `portrait-primary`
      - : Zeigt die Web-App im Hochformat an, typischerweise mit aufrecht gehaltenem Gerät. Dies ist normalerweise die Standardausrichtung für Apps auf Geräten, die von Natur aus im Hochformat sind. Abhängig vom Gerät und der Browserversion wird die App in der Regel diese Ausrichtung beibehalten, selbst wenn das Gerät gedreht wird.

    - `portrait-secondary`
      - : Zeigt die Web-App in einem umgedrehten Hochformat an, was `portrait-primary` um 180 Grad gedreht entspricht. Abhängig vom Gerät und der Browserversion wird die App in der Regel diese Ausrichtung beibehalten, selbst wenn das Gerät gedreht wird.

    - `landscape`
      - : Zeigt die Web-App mit einer Breite größer als die Höhe an. Es erlaubt der App, zwischen den Ausrichtungen `landscape-primary` und `landscape-secondary` zu wechseln, wenn das Gerät gedreht wird.

    - `landscape-primary`
      - : Zeigt die Web-App im Querformat an, typischerweise mit dem Gerät in seiner Standard-Horizontalposition gehalten. Dies ist normalerweise die Standardausrichtung für Apps auf Geräten, die von Natur aus im Querformat sind. Abhängig vom Gerät und der Browserversion wird die App in der Regel diese Ausrichtung beibehalten, selbst wenn das Gerät gedreht wird.

    - `landscape-secondary`
      - : Zeigt die Web-App in einem umgedrehten Querformat an, was `landscape-primary` um 180 Grad gedreht entspricht. Abhängig vom Gerät und der Browserversion wird die App in der Regel diese Ausrichtung beibehalten, selbst wenn das Gerät gedreht wird.

## Beschreibung

Um das `orientation`-Manifestmitglied zu verstehen, ist es wichtig, mit den folgenden ausrichtungsbezogenen Konzepten vertraut zu sein:

- **Geräteausrichtung**: Definiert, wie das Gerät physisch gehalten oder positioniert wird.
- **Bildschirmausrichtung**: Definiert die physische Ausrichtung des Geräts.
- **App-Ausrichtung**: Definiert, wie der Inhalt der App im Verhältnis zur Bildschirmausrichtung angezeigt wird.

Wenn ein Gerät gedreht wird, ändert es in der Regel die Bildschirmausrichtung. Zum Beispiel wechselt ein Mobiltelefon beim Drehen von vertikal zu horizontal normalerweise den Bildschirm von Hoch- zu Querformat. Ohne eine spezifische Ausrichtungseinstellung im Manifest passen die meisten Apps ihr Layout an, um zur neuen Bildschirmausrichtung zu passen.

Das `orientation`-Mitglied im Manifest ermöglicht es Ihnen, zu steuern, wie Ihre App auf diese Änderungen reagiert. Indem Sie eine bevorzugte Ausrichtung für Ihre App angeben, können Sie entscheiden, ob Ihre App sich an Bildschirmdrehungen anpassen oder ein festes Layout beibehalten soll, unabhängig davon, wie das Gerät gehalten wird. Zum Beispiel können Sie durch die Einstellung `"orientation": "portrait-primary"` angeben, dass Sie bevorzugen, dass Ihre App immer im aufrechten Hochformat relativ zum Bildschirm angezeigt wird, selbst wenn das Gerät gedreht wird. Der Browser oder das Betriebssystem wird versuchen, diese Präferenz zu berücksichtigen, wenn möglich.

Das untenstehende Beispiel illustriert, wie das Layout einer Web-App aussehen könnte, wenn ein Mobiltelefon gedreht wird. Für dieses Beispiel gehen wir davon aus, dass der `orientation`-Wert der App auf `any` gesetzt ist, sodass die App zwischen allen `orientation`-Werten wechseln kann, wenn das Mobiltelefon gedreht wird. Nehmen Sie auch an, dass sowohl das Telefon als auch der Browser alle Ausrichtungen unterstützen. Die Abfolge zeigt eine Drehung des Telefons im Uhrzeigersinn, wobei jede Position von der Ausgangsposition aus wie folgt gedreht wird:

- Oben links: `portrait-primary` (Ausgangsposition)
- Oben rechts: `landscape-primary` (90 Grad)
- Unten links: `portrait-secondary` (180 Grad)
- Unten rechts: `landscape-secondary` (270 Grad)

```html hidden
<div class="container">
  <div class="orientation">
    <div class="device portrait-primary">
      <div class="screen">
        <div class="title-bar">App Title Bar</div>
        <div class="content">App content in portrait mode</div>
      </div>
    </div>
    <div class="label"><code>portrait-primary</code></div>
  </div>
  <div class="orientation">
    <div class="device landscape-primary">
      <div class="screen">
        <div class="title-bar">App Title Bar</div>
        <div class="content">App content in landscape mode</div>
      </div>
    </div>
    <div class="label"><code>landscape-primary</code></div>
  </div>
  <div class="orientation">
    <div class="device portrait-secondary">
      <div class="screen">
        <div class="title-bar">App Title Bar</div>
        <div class="content">App content in inverted portrait mode</div>
      </div>
    </div>
    <div class="label"><code>portrait-secondary</code></div>
  </div>
  <div class="orientation">
    <div class="device landscape-secondary">
      <div class="screen">
        <div class="title-bar">App Title Bar</div>
        <div class="content">App content in inverted landscape mode</div>
      </div>
    </div>
    <div class="label"><code>landscape-secondary</code></div>
  </div>
</div>
```

```css hidden
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;
  padding: 20px;
}

.orientation {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.device {
  width: 200px;
  height: 300px;
  border: 5px solid black;
  border-radius: 20px;
  position: relative;
  background-color: white;
  margin-bottom: 10px;
}

.screen {
  width: 180px;
  height: 280px;
  border-radius: 15px;
  background-color: lightgrey;
  margin: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.title-bar {
  background-color: #4285f4;
  color: white;
  padding: 5px;
  text-align: center;
  font-weight: bold;
}

.content {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  text-align: center;
}

.landscape-primary,
.landscape-secondary {
  width: 300px;
  height: 200px;
}

.landscape-primary .screen,
.landscape-secondary .screen {
  width: 280px;
  height: 180px;
}

.portrait-secondary {
  transform: rotate(180deg);
}

.landscape-secondary {
  transform: rotate(180deg);
}

.label {
  margin-top: 10px;
  font-family: "Arial", sans-serif;
  font-size: 15px;
}
```

{{EmbedLiveSample('Description', '', 800)}}

### Umfang und Standardverhalten

Die angegebene `orientation` wird auf alle obersten {{Glossary("Browsing_context", "Browsing-Kontexte")}} der Web-App angewendet.

Wenn ein Browser den angegebenen `orientation`-Wert unterstützt, wird dieser während der gesamten Lebensdauer der App als Standardausrichtung verwendet, es sei denn, er wird zur Laufzeit überschrieben. Das bedeutet, dass Browser zu dieser Standardausrichtung zurückkehren, wann immer der oberste Browsing-Kontext navigiert wird.

### Eine bevorzugte Ausrichtung für Ihre Web-App wählen

Durch das Festlegen einer spezifischen Ausrichtung können Sie sicherstellen, dass Ihre Web-App optimal für deren Inhalt und Benutzerschnittstelle angezeigt wird. Ein Video-App eignet sich zum Beispiel oft besser für das Querformat, während eine Lese-App typischerweise im Hochformat besser funktioniert.

Keine Ausrichtung anzugeben kann auch eine bewusste Entscheidung sein, damit Ihre Web-App sich flexibel an verschiedene Geräte und Benutzerpräferenzen anpassen kann.

### Manifest-`orientation` vs. Verhalten der Screen Orientation API

Während das `orientation`-Manifestmitglied die Standardausrichtung der Web-App festlegt, kann die Ausrichtung eines obersten Browsing-Kontexts geändert werden, sobald die Web-App läuft, indem die [Screen Orientation API](/de/docs/Web/API/Screen_Orientation_API) verwendet wird.

Die `orientation`-Werte sind im Web-App-Manifest und der Screen Orientation API ähnlich, aber ihr Verhalten und ihre Zwecke unterscheiden sich.

- Web-App-Manifest:
  - Schlägt die bevorzugte Standardausrichtung der Web-App vor, indem das `orientation`-Manifestmitglied verwendet wird.
  - Legt die Anfangsausrichtung fest, wenn die App gestartet wird.

- Screen Orientation API:
  - Verwendet Ausrichtungswerte, um den Bildschirm auf eine bestimmte Ausrichtung zu sperren.
  - Ermöglicht dynamische Änderungen der Ausrichtung während der Laufzeit (zum Beispiel Sperren der Ausrichtung mit [`screen.orientation.lock()`](/de/docs/Web/API/ScreenOrientation/lock)).

  > [!NOTE]
  > Die [`lock()`](/de/docs/Web/API/ScreenOrientation/lock) Methode der Screen Orientation API wird nur von wenigen Browsern unterstützt. Überprüfen Sie die Kompatibilität, wenn Sie planen, sie zu verwenden, um die Bildschirmausrichtung während der Laufzeit dynamisch zu ändern.

### Plattform- und Browser-Einschränkungen

Beachten Sie beim Hinzufügen der Ausrichtungspräferenz für Ihre App die folgenden Überlegungen und Einschränkungen:

- Browserhersteller und Gerätehersteller entscheiden, welche Ausrichtungen und [`display`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display)-Modi kompatibel sind.
- Bestimmte UI-/UX-Bedenken und Plattformkonventionen können einschränken, welche Bildschirmausrichtungen und Anzeigemodi zusammen verwendet werden können.
- Die Unterstützung für spezifische `orientation`-Werte kann je nach Gerät und Plattform variieren.
- Einige Geräte unterstützen möglicherweise nicht alle `orientation`-Werte, wie `portrait-secondary` und `landscape-secondary`.
- Einige Browser erlauben möglicherweise nicht, die Standardausrichtung einer Web-App zu ändern, während sie sich in bestimmten Anzeigemodi befindet (z.B. [`"display": "browser"`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display#browser)).

## Beispiele

### Eine feste Ausrichtung für eine Web-App angeben

Dieses Beispiel setzt die Ausrichtung der App auf `portrait-primary`. Bei Annahme von Browser- und Geräteunterstützung wird die App immer im aufrechten Hochformat angezeigt, selbst wenn das Gerät gedreht wird.

```json
{
  "name": "My Web App",
  "orientation": "portrait-primary"
}
```

### Eine flexible Ausrichtung für eine Web-App festlegen

Betrachten Sie eine Foto-App zum Ansehen und Bearbeiten. In der Manifestdatei der App, wie unten gezeigt, ist `orientation` auf `any` gesetzt. Dies ermöglicht es der App, in der aktuellen Ausrichtung des Geräts zu starten und sich sowohl an `portrait`- als auch an `landscape`-Ausrichtungen anzupassen, während Benutzer ihre Geräte drehen. Diese `orientation`-Einstellung ermöglicht es Benutzern, Fotos bequem in der Ausrichtung anzusehen und zu bearbeiten, die am besten zum aktuellen Display oder ihrem aktuellen Nutzungskontext passt.

```json
{
  "name": "PhotoGallery Pro",
  "short_name": "PhotoGal",
  "description": "A professional photo gallery and editing application",
  "start_url": "/index.html",
  "display": "standalone",
  "orientation": "any",
  "icons": [
    {
      "src": "icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    }
  ],
  "related_applications": [
    {
      "platform": "play",
      "url": "https://play.google.com/store/apps/details?id=com.example.photogallery"
    }
  ]
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Screen Orientation API](/de/docs/Web/API/Screen_Orientation_API)
- [Verwalten der Bildschirmausrichtung](/de/docs/Web/API/CSS_Object_Model/Managing_screen_orientation)
- [Verwendung von Media Queries für Geräteausrichtung](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Lernen: Responsives Design](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design)
