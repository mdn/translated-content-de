---
title: orientation
slug: Web/Manifest/orientation
l10n:
  sourceCommit: 97391fc8c38addc0d5aea7139ca1d14a7099fe4a
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest")}}

Das `orientation`-Manifestmitglied wird verwendet, um die Standardausrichtung für Ihre Webanwendung anzugeben. Es definiert, wie die App beim Start und während der Nutzung im Verhältnis zur Bildschirmorientierung des Geräts angezeigt werden soll, insbesondere auf Geräten, die mehrere Ausrichtungen unterstützen.

> [!NOTE]
> Die Ausrichtung der App kann zur Laufzeit auf verschiedene Weisen geändert werden, zum Beispiel durch die Verwendung der [Screen Orientation API](/de/docs/Web/API/Screen_Orientation_API).

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

  - : Ein String, der die Standardausrichtung für die Web-App angibt. Wenn das `orientation`-Mitglied nicht angegeben ist oder ein ungültiger Wert bereitgestellt wird, wird die Web-App normalerweise die natürliche Ausrichtung des Geräts und alle Benutzer- oder Systemeinstellungen zur Ausrichtung verwenden.

    Der Wert von `orientation` muss eines der folgenden Schlüsselwörter sein:

    - `any`

      - : Zeigt die Web-App in jeder vom Betriebssystem des Geräts oder den Benutzereinstellungen erlaubten Ausrichtung an. Es erlaubt der App, sich frei zu drehen, um die Ausrichtung des Geräts zu übernehmen, wenn dieses gedreht wird.

    - `natural`

      - : Zeigt die Web-App in der für das Gerät als am natürlichsten angesehenen Ausrichtung an, wie vom Browser, Betriebssystem, den Benutzereinstellungen oder dem Bildschirm selbst bestimmt. Dies entspricht der Art und Weise, wie das Gerät am häufigsten gehalten oder verwendet wird:

        - Auf Geräten, die typischerweise vertikal gehalten werden, wie Mobiltelefone, ist `natural` in der Regel `portrait-primary`.
        - Auf Geräten, die typischerweise horizontal genutzt werden, wie Computermonitore und Tablets, ist `natural` in der Regel `landscape-primary`.

        Wenn das Gerät gedreht wird, kann es sein, dass die App sich dreht oder nicht, um die natürliche Ausrichtung des Geräts anzupassen; dieses Verhalten kann je nach spezifischem Gerät, Browserimplementierung und Benutzereinstellungen variieren.

    - `portrait`

      - : Zeigt die Web-App mit größerer Höhe als Breite an. Es erlaubt der App, zwischen den Ausrichtungen `portrait-primary` und `portrait-secondary` zu wechseln, wenn das Gerät gedreht wird.

    - `portrait-primary`

      - : Zeigt die Web-App im Hochformat an, typischerweise wenn das Gerät aufrecht gehalten wird. Dies ist normalerweise die Standardausrichtung der App auf Geräten, die von Natur aus hochformatig sind. Je nach Gerät und Browserimplementierung wird die App diese Ausrichtung normalerweise beibehalten, auch wenn das Gerät gedreht wird.

    - `portrait-secondary`

      - : Zeigt die Web-App im umgedrehten Hochformat an, das heißt, `portrait-primary` um 180 Grad gedreht. Je nach Gerät und Browserimplementierung wird die App diese Ausrichtung normalerweise beibehalten, auch wenn das Gerät gedreht wird.

    - `landscape`

      - : Zeigt die Web-App mit größerer Breite als Höhe an. Es erlaubt der App, zwischen den Ausrichtungen `landscape-primary` und `landscape-secondary` zu wechseln, wenn das Gerät gedreht wird.

    - `landscape-primary`

      - : Zeigt die Web-App im Querformat an, typischerweise wenn das Gerät in seiner standardmäßigen horizontalen Position gehalten wird. Dies ist normalerweise die Standardausrichtung der App auf Geräten, die von Natur aus im Querformat sind. Je nach Gerät und Browserimplementierung wird die App diese Ausrichtung normalerweise beibehalten, auch wenn das Gerät gedreht wird.

    - `landscape-secondary`

      - : Zeigt die Web-App im umgedrehten Querformat an, das heißt, `landscape-primary` um 180 Grad gedreht. Je nach Gerät und Browserimplementierung wird die App diese Ausrichtung normalerweise beibehalten, auch wenn das Gerät gedreht wird.

## Beschreibung

Um das `orientation`-Manifestmitglied zu verstehen, ist es wichtig, mit den folgenden ausrichtungsbezogenen Konzepten vertraut zu sein:

- **Geräteausrichtung**: Definiert, wie das Gerät physisch gehalten oder positioniert wird.
- **Bildschirmorientierung**: Definiert die physische Orientierung der Anzeige des Geräts.
- **App-Ausrichtung**: Definiert, wie der Inhalt der App relativ zur Bildschirmorientierung angezeigt wird.

Wenn ein Gerät gedreht wird, ändert es typischerweise die Bildschirmorientierung. Zum Beispiel wechselt ein Mobiltelefon bei einer Drehung von der vertikalen in die horizontale Richtung normalerweise vom Hochformat zum Querformat. Ohne eine spezielle Ausrichtungseinstellung im Manifest passen die meisten Apps ihr Layout an, um dieser neuen Bildschirmorientierung zu entsprechen.

Das `orientation`-Mitglied des Manifests ermöglicht es Ihnen, zu steuern, wie Ihre App auf diese Änderungen reagiert. Indem Sie eine bevorzugte Ausrichtung für Ihre App angeben, können Sie entscheiden, ob Ihre App sich an Änderungen der Bildschirmorientierung anpassen oder ein festes Layout beibehalten soll, unabhängig davon, wie das Gerät gehalten wird. Zum Beispiel, indem Sie `"orientation": "portrait-primary"` setzen, können Sie angeben, dass Sie bevorzugen, dass Ihre App immer im aufrechten Hochformat relativ zum Bildschirm angezeigt wird, auch wenn das Gerät gedreht wird. Der Browser oder das Betriebssystem wird versuchen, diese Präferenz soweit möglich zu respektieren.

Das folgende Beispiel zeigt, wie das Layout einer Web-App aussehen könnte, wenn ein Mobiltelefon gedreht wird. Für dieses Beispiel wird angenommen, dass der `orientation`-Wert der App auf `any` gesetzt ist, sodass die App zwischen allen `orientation`-Werten wechseln kann, wenn das Mobiltelefon gedreht wird. Außerdem wird angenommen, dass sowohl das Telefon als auch der Browser alle Ausrichtungen unterstützen. Die Sequenz zeigt eine Drehung des Telefons im Uhrzeigersinn, wobei jede Position aus der Startposition heraus gedreht wird, wie folgt:

- Oben links: `portrait-primary` (Startposition)
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
  font-family: Arial, sans-serif;
  font-size: 15px;
}
```

{{EmbedLiveSample('Description', '', 800)}}

### Gültigkeitsbereich und Standardverhalten

Die angegebene `orientation` wird auf alle obersten {{Glossary("Browsing_context", "Browsing-Kontexte")}} der Web-App angewendet.

Wenn ein Browser den angegebenen `orientation`-Wert unterstützt, wird er diese als Standard-App-Ausrichtung während der gesamten Lebensdauer der App verwenden, es sei denn, sie wird zur Laufzeit überschrieben. Das bedeutet, dass Browser zu dieser Standardausrichtung zurückkehren, wann immer der oberste Browsing-Kontext navigiert wird.

### Eine bevorzugte Ausrichtung für Ihre Web-App wählen

Indem Sie eine spezifische Ausrichtung festlegen, können Sie sicherstellen, dass Ihre Web-App optimal für ihren Inhalt und ihre Benutzeroberfläche angezeigt wird. Zum Beispiel ist eine Video-App oft besser für das Querformat geeignet, während eine Lese-App typischerweise im Hochformat besser funktioniert.

Keine Ausrichtung anzugeben, kann auch eine bewusste Entscheidung sein, um zu ermöglichen, dass Ihre Web-App flexibel an verschiedene Geräte und Benutzerpräferenzen angepasst werden kann.

### Manifest `orientation` vs. Verhalten der Screen Orientation API

Während das `orientation`-Manifestmitglied die Standardausrichtung der Web-App festlegt, kann die Ausrichtung eines obersten Browsing-Kontexts geändert werden, sobald die Web-App läuft, indem die [Screen Orientation API](/de/docs/Web/API/Screen_Orientation_API) verwendet wird.

Die `orientation`-Werte sind im Web-App-Manifest und der Screen Orientation API ähnlich, aber ihr Verhalten und ihre Zwecke unterscheiden sich.

- Web-App-Manifest:

  - Empfiehlt die bevorzugte Standardausrichtung der Web-App mit Hilfe des `orientation`-Manifestmitglieds.
  - Setzt die anfängliche Ausrichtung, wenn die App gestartet wird.

- Screen Orientation API:

  - Verwendet Ausrichtungswerte, um den Bildschirm auf eine bestimmte Ausrichtung zu sperren.
  - Ermöglicht dynamische Änderungen der Ausrichtung zur Laufzeit (zum Beispiel Sperren der Ausrichtung mit [`screen.orientation.lock()`](/de/docs/Web/API/ScreenOrientation/lock)).

  > [!NOTE]
  > Die Methode [`lock()`](/de/docs/Web/API/ScreenOrientation/lock) der Screen Orientation API hat eine eingeschränkte Unterstützung in verschiedenen Browsern. Überprüfen Sie ihre Kompatibilität, wenn Sie planen, sie zu verwenden, um die Bildschirmorientierung zur Laufzeit dynamisch zu ändern.

### Plattform- und Browser-Einschränkungen

Wenn Sie die Ausrichtungspräferenz für Ihre App hinzufügen, beachten Sie die folgenden Überlegungen und Einschränkungen:

- Browser-Anbieter und Gerätehersteller entscheiden, welche Ausrichtungen und [`display`](/de/docs/Web/Manifest/display)-Modi kompatibel sind.
- Bestimmte UI/UX-Anliegen und Plattformkonventionen können einschränken, welche Bildschirmorientierungen und Anzeigemodi zusammen verwendet werden können.
- Die Unterstützung für bestimmte `orientation`-Werte kann je nach Gerät und Plattform variieren.
- Einige Geräte unterstützen möglicherweise nicht alle `orientation`-Werte, wie zum Beispiel `portrait-secondary` und `landscape-secondary`.
- Einige Browser erlauben möglicherweise nicht, die Standardausrichtung einer Web-App zu ändern, wenn sie sich in bestimmten Anzeigemodi befindet (z.B. [`"display": "browser"`](/de/docs/Web/Manifest/display#browser)).

## Beispiele

### Eine feste Ausrichtung für eine Web-App angeben

Dieses Beispiel setzt die Ausrichtung der App auf `portrait-primary`. Angenommen, Browser und Gerät unterstützen dies, wird die App immer im aufrechten Hochformat angezeigt, auch wenn das Gerät gedreht wird.

```json
{
  "name": "My Web App",
  "orientation": "portrait-primary"
}
```

### Eine flexible Ausrichtung für eine Web-App festlegen

Betrachten Sie eine Fotoanzeige- und Bearbeitungs-App. Im Manifast der App, wie unten gezeigt, wird `orientation` auf `any` gesetzt. Dadurch kann die App in der aktuellen Ausrichtung des Geräts gestartet werden und sich an sowohl `portrait`- als auch `landscape`-Ausrichtungen anpassen, während Benutzer ihre Geräte drehen. Diese `orientation`-Einstellung ermöglicht es Benutzern, Fotos bequem in der Ausrichtung zu betrachten und zu bearbeiten, die am besten zur aktuellen Anzeige oder ihrer aktuellen Nutzungskontext passt.

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
- [Verwaltung der Bildschirmorientierung](/de/docs/Web/API/CSS_Object_Model/Managing_screen_orientation)
- [Verwendung von Media Queries für Geräteorientierung](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Responsive Design](/de/docs/Learn/CSS/CSS_layout/Responsive_Design)
