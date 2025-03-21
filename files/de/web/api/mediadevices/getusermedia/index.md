---
title: "MediaDevices: getUserMedia() Methode"
short-title: getUserMedia()
slug: Web/API/MediaDevices/getUserMedia
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{securecontext_header}}{{APIRef("Media Capture and Streams")}}

Die **`getUserMedia()`** Methode der [`MediaDevices`](/de/docs/Web/API/MediaDevices)-Schnittstelle fordert den Benutzer um Erlaubnis zur Verwendung eines Medieneingangs auf, der einen [`MediaStream`](/de/docs/Web/API/MediaStream) erzeugt, dessen Spuren die angeforderten Medientypen enthalten.

Dieser Stream kann zum Beispiel eine Video-Spur enthalten (erzeugt durch eine Hardware- oder virtuelle Videoquelle wie eine Kamera, Videorekorder, Bildschirmfreigabedienst usw.), eine Audio-Spur (ähnlich, erzeugt durch eine physische oder virtuelle Audioquelle wie ein Mikrofon, A/D-Wandler oder ähnliches) und möglicherweise andere Spurtypen.

Sie gibt ein {{jsxref("Promise")}} zurück, das zu einem [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekt aufgelöst wird. Wenn der Benutzer die Erlaubnis verweigert oder passende Medien nicht verfügbar sind, wird das Promise mit `NotAllowedError` oder `NotFoundError`[`DOMException`](/de/docs/Web/API/DOMException) entsprechend abgelehnt.

> [!NOTE]
> Es ist möglich, dass das zurückgegebene Promise _weder_ aufgelöst noch abgelehnt wird, da der Benutzer nicht verpflichtet ist, eine Entscheidung zu treffen und die Anfrage möglicherweise ignoriert.

## Syntax

```js-nolint
getUserMedia(constraints)
```

### Parameter

- `constraints`

  - : Ein Objekt, das die Typen von Medien beschreibt, die angefordert werden sollen, zusammen mit allen Anforderungen für jeden Typ.

    Der Parameter `constraints` ist ein Objekt mit zwei Mitgliedern: `video` und `audio`, welche die angeforderten Medientypen beschreiben. Eines oder beide müssen angegeben werden. Wenn der Browser nicht alle Medienspuren mit den angegebenen Typen finden kann, die den angegebenen Einschränkungen entsprechen, wird das zurückgegebene Promise mit `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.

    Für sowohl `video` als auch `audio` ist der Wert entweder ein Boolean oder ein Objekt. Der Standardwert ist `false`.

    - Wenn `true` für einen Medientyp angegeben wird, muss der resultierende Stream zwingend eine Spur dieses Typs enthalten. Kann aus irgendeinem Grund keine Spur enthalten sein, wird das zurückgegebene Promise abgelehnt.
    - Wenn `false` für einen Medientyp angegeben wird, darf der resultierende Stream _keine_ Spur dieses Typs enthalten, ansonsten wird das zurückgegebene Promise abgelehnt. Da sowohl `video` als auch `audio` standardmäßig auf `false` gesetzt sind, wird das zurückgegebene Promise immer abgelehnt, wenn das Objekt `constraints` keine Eigenschaft enthält oder überhaupt nicht vorhanden ist.
    - Wenn ein Objekt für einen Medientyp angegeben wird, wird das Objekt als ein [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Wörterbuch gelesen.

### Rückgabewert

Ein {{jsxref("Promise")}}, dessen Erfüllungshandler ein [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekt erhält, wenn die angeforderten Medien erfolgreich beschafft wurden.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Obwohl sowohl der Benutzer als auch das Betriebssystem den Zugriff auf das Hardwaregerät gewährt haben und keine Hardwareprobleme aufgetreten sind, die einen `NotReadableError` [`DOMException`](/de/docs/Web/API/DOMException) verursachen würden, wird diese Ausnahme geworfen, wenn ein Problem aufgetreten ist, das die Verwendung des Geräts verhindert hat.

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Wird geworfen, wenn das aktuelle Dokument nicht voll aktiv ist.

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Wird geworfen, wenn eines oder mehrere der angeforderten Quellgeräte derzeit nicht verwendet werden können. Dies tritt auf, wenn der Browsing-Kontext unsicher ist (d.h. die Seite wurde mittels HTTP statt HTTPS geladen). Es passiert auch, wenn der Benutzer angegeben hat, dass die aktuelle Browsing-Instanz keinen Zugriff auf das Gerät haben soll, der Benutzer den Zugriff für die aktuelle Sitzung verweigert hat oder der Benutzer allen Zugriff auf Benutzermediengeräte global verweigert hat. Bei Browsern, die die Verwaltung von Medienberechtigungen mit [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) unterstützen, wird dieser Fehler zurückgegeben, wenn die Permissions Policy nicht so konfiguriert ist, dass sie Zugriff auf die Eingabequelle(n) gewährt.

    > [!NOTE]
    > Ältere Versionen der Spezifikation verwendeten stattdessen `SecurityError`;
    > `SecurityError` hat inzwischen eine neue Bedeutung.

- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird geworfen, wenn keine Medienspuren des angegebenen Typs gefunden wurden, die den gegebenen Einschränkungen genügen.
- `NotReadableError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird geworfen, wenn, obwohl der Benutzer die Erlaubnis zur Verwendung passender Geräte gewährt hat, ein Hardwarefehler auf der Ebene des Betriebssystems, Browsers oder der Webseite aufgetreten ist, der den Zugriff auf das Gerät verhindert hat.
- `OverconstrainedError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Wird geworfen, wenn die angegebenen Einschränkungen zu keinen Kandidatengeräten geführt haben, die die angeforderten Kriterien erfüllen. Der Fehler ist ein Objekt vom Typ `OverconstrainedError` und hat eine `constraint`-Eigenschaft, deren Stringwert den Namen einer Einschränkung angibt, die nicht erfüllt werden konnte, sowie eine `message`-Eigenschaft, die eine menschenlesbare Zeichenkette enthält, die das Problem erklärt.

    > [!NOTE]
    > Da dieser Fehler auch dann auftreten kann, wenn der Benutzer noch keine
    > Erlaubnis zur Verwendung des zugrunde liegenden Geräts erteilt hat, kann er möglicherweise als {{Glossary("Fingerprinting", "Fingerprinting")}}-Oberfläche genutzt werden.

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird geworfen, wenn der Zugriff auf Benutzermedien im [`Document`](/de/docs/Web/API/Document), auf dem `getUserMedia()` aufgerufen wurde, deaktiviert ist. Der Mechanismus, mit dem Benutzermedien aktiviert und deaktiviert werden, bleibt jedem einzelnen User-Agent überlassen.
- {{jsxref("TypeError")}}
  - : Wird geworfen, wenn die Liste der angegebenen Einschränkungen leer ist oder alle Einschränkungen auf `false` gesetzt sind. Dies kann auch passieren, wenn Sie versuchen, `getUserMedia()` in einem unsicheren Kontext aufzurufen, da [`navigator.mediaDevices`](/de/docs/Web/API/Navigator/mediaDevices) in einem unsicheren Kontext `undefined` ist.

## Datenschutz und Sicherheit

Als eine API, die erhebliche Datenschutzbedenken beinhalten kann, legt die Spezifikation von `getUserMedia()` eine breite Palette von Datenschutz- und Sicherheitsanforderungen fest, die von Browsern erfüllt werden müssen.

`getUserMedia()` ist ein leistungsfähiges Feature, das nur in [sicheren Kontexten](/de/docs/Web/Security/Secure_Contexts) verwendet werden kann; in unsicheren Kontexten ist `navigator.mediaDevices` `undefined`, was den Zugriff auf `getUserMedia()` verhindert. Ein sicherer Kontext ist, kurz gesagt, eine Seite, die über HTTPS oder das `file:///` URL-Schema geladen wird, oder eine Seite, die von `localhost` geladen wird.

Darüber hinaus ist immer die Erlaubnis des Benutzers erforderlich, um auf die Audio- und Videoeingaben des Benutzers zuzugreifen. Nur das Top-Level-Dokument eines Fensters mit gültiger Herkunft kann überhaupt eine Erlaubnis für die Nutzung von `getUserMedia()` anfordern, es sei denn, der Top-Level-Kontext erteilt einem bestimmten {{HTMLElement("iframe")}} ausdrücklich die Erlaubnis dazu, indem er die [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) verwendet. Andernfalls wird der Benutzer niemals um Erlaubnis zur Nutzung der Eingabegeräte gebeten.

Für zusätzliche Details zu diesen Anforderungen und Regeln, wie sie sich auf den Kontext auswirken, in dem Ihr Code ausgeführt wird, und darüber, wie Browser Nutzer-Datenschutz- und Sicherheitsprobleme verwalten, lesen Sie weiter.

### Privatsphäre des Benutzers

Als eine API, die erhebliche Datenschutzbedenken beinhalten kann, wird `getUserMedia()` von der Spezifikation unter sehr spezifische Anforderungen für Benachrichtigungen und Berechtigungsmanagement gestellt. Zunächst muss `getUserMedia()` immer die Erlaubnis des Benutzers einholen, bevor eine Eingabe wie eine Webcam oder ein Mikrofon geöffnet wird. Browser können eine einmal pro Domain geltende Berechtigungsfunktion anbieten, müssen aber mindestens beim ersten Mal nachfragen, und der Benutzer muss ausdrücklich die fortwährende Erlaubnis erteilen, wenn er sich dafür entscheidet.

Genauso wichtig sind die Regeln zur Benachrichtigung. Browser müssen einen Indikator anzeigen, der zeigt, dass eine Kamera oder ein Mikrofon verwendet wird, über und über jeglichen Hardware-Indikator hinaus, der möglicherweise existiert. Sie müssen auch einen Indikator anzeigen, dass die Erlaubnis erteilt wurde, ein Gerät für Eingaben zu verwenden, selbst wenn das Gerät momentan nicht aktiv aufnimmt.

Zum Beispiel zeigt die URL-Leiste in Firefox ein pulsierendes rotes Icon an, um anzuzeigen, dass die Aufnahme im Gange ist. Das Icon ist grau, wenn die Berechtigung vorliegt, aber die Aufnahme derzeit nicht stattfindet. Das physische Licht des Geräts wird verwendet, um anzuzeigen, ob die Aufnahme derzeit aktiv ist oder nicht. Wenn Sie Ihre Kamera stummgeschaltet haben (sogenanntes "Facemuting"), erlischt das Aktivitätslicht Ihrer Kamera, um anzuzeigen, dass die Kamera Sie momentan nicht aktiv aufnimmt, ohne die Erlaubnis zu verwerfen, die Kamera wieder zu verwenden, sobald die Stummschaltung aufgehoben ist.

### Sicherheit

Es gibt mehrere Möglichkeiten, wie das Sicherheitsmanagement und die Kontrollen in einem {{Glossary("user_agent", "User-Agent")}} dazu führen können, dass `getUserMedia()` einen sicherheitsbezogenen Fehler zurückgibt.

#### Permissions Policy

Die beiden [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)-Direktiven, die auf `getUserMedia()` zutreffen, sind `camera` und `microphone`.

Zum Beispiel wird dieser HTTP-Header den Gebrauch einer Kamera durch das Dokument und alle eingebetteten {{HTMLElement("iframe")}}-Elemente ermöglichen, die von derselben Herkunft geladen werden:

```http
Permissions-Policy: camera=(self)
```

Dies wird den Zugang zum Mikrofon für die aktuelle Herkunft und die spezifische Herkunft `https://developer.mozilla.org` anfordern:

```http
Permissions-Policy: microphone=(self "https://developer.mozilla.org")
```

Wenn Sie `getUserMedia()` innerhalb eines `<iframe>` verwenden, können Sie die Berechtigung nur für dieses Frame anfordern, was deutlich sicherer ist als die Beantragung einer allgemeineren Berechtigung. Hier zeigen Sie an, dass Sie die Fähigkeit benötigen, sowohl die Kamera als auch das Mikrofon zu verwenden:

```html
<iframe src="https://mycode.example.net/etc" allow="camera; microphone">
</iframe>
```

#### Verschlüsselungsbasierte Sicherheit

Die Methode `getUserMedia()` ist nur in [sicheren Kontexten](/de/docs/Web/Security/Secure_Contexts) verfügbar. Ein sicherer Kontext ist einer, bei dem der Browser mit einiger Sicherheit davon ausgeht, dass das Dokument sicher geladen wurde, indem es HTTPS/TLS verwendet und nur begrenzt exponiert gegenüber unsicheren Kontexten ist. Wenn ein Dokument nicht in einem sicheren Kontext geladen wird, ist die [`navigator.mediaDevices`](/de/docs/Web/API/Navigator/mediaDevices)-Eigenschaft `undefined`, wodurch der Zugriff auf `getUserMedia()` unmöglich wird.

Der Versuch, `getUserMedia()` unter diesen Umständen zuzugreifen, führt zu einem {{jsxref("TypeError")}}.

#### Sicherheitsquelle des Dokuments

Aufgrund des offensichtlichen Sicherheitsrisikos, das mit `getUserMedia()` verbunden ist, wenn es unerwartet oder ohne sorgfältige Verwaltung der Sicherheit verwendet wird, kann es nur in sicheren Kontexten verwendet werden. Es gibt eine Reihe unsicherer Möglichkeiten, ein Dokument zu laden, das wiederum versuchen könnte, `getUserMedia()` aufzurufen. Die folgenden sind Beispiele für Situationen, in denen `getUserMedia()` nicht aufgerufen werden darf:

- Ein Dokument, das in ein sandboxed {{HTMLElement("iframe")}}-Element geladen wurde, kann `getUserMedia()` nicht aufrufen, es sei denn, das `<iframe>` hat sein [`sandbox`](/de/docs/Web/HTML/Element/iframe#sandbox)-Attribut auf `allow-same-origin` gesetzt.
- Ein Dokument, das mit einer `data://` oder `blob://` URL geladen wurde, die keine Herkunft hat (z. B. wenn eine dieser URLs vom Benutzer in die Adressleiste eingegeben wird), kann `getUserMedia()` nicht aufrufen. Diese Arten von URLs, die aus JavaScript-Code geladen werden, übernehmen die Berechtigungen des Skripts.
- Jede andere Situation, in der keine Herkunft vorliegt, wie wenn das [`srcdoc`](/de/docs/Web/HTML/Element/iframe#srcdoc)-Attribut verwendet wird, um den Inhalt eines Frames anzugeben.

## Beispiele

### Verwendung von getUserMedia()

Im Allgemeinen greifen Sie auf das [`MediaDevices`](/de/docs/Web/API/MediaDevices)-Singleton-Objekt mittels [`navigator.mediaDevices`](/de/docs/Web/API/Navigator/mediaDevices) zu, so:

```js
async function getMedia(constraints) {
  let stream = null;

  try {
    stream = await navigator.mediaDevices.getUserMedia(constraints);
    /* use the stream */
  } catch (err) {
    /* handle the error */
  }
}
```

Ähnlich sieht der Code aus, wenn die rohen `Promises` direkt verwendet werden:

```js
navigator.mediaDevices
  .getUserMedia(constraints)
  .then((stream) => {
    /* use the stream */
  })
  .catch((err) => {
    /* handle the error */
  });
```

> [!NOTE]
> Wenn das aktuelle Dokument nicht sicher geladen ist,
> wird `navigator.mediaDevices` `undefined` sein, und Sie können nicht
> `getUserMedia()` verwenden. Weitere Informationen hierzu und zu anderen
> Sicherheitsproblemen im Zusammenhang mit der Verwendung von `getUserMedia()`
> finden Sie unter [Sicherheit](#sicherheit).

Unten finden Sie einige Beispiele für den Parameter `constraints`.

Das Folgende fordert sowohl Audio als auch Video ohne spezielle Anforderungen an:

```js
getUserMedia({
  audio: true,
  video: true,
});
```

Während Informationen über Kameras und Mikrofone eines Benutzers aus Datenschutzgründen nicht zugänglich sind, kann eine Anwendung die Kamera- und Mikrofoneigenschaften anfordern, die sie benötigt und wünscht, indem sie zusätzliche Einschränkungen verwendet. Das folgende Beispiel gibt eine Präferenz für eine Kameraauflösung von 1280x720 an:

```js
getUserMedia({
  audio: true,
  video: { width: 1280, height: 720 },
});
```

Der Browser wird versuchen, dies zu berücksichtigen, kann jedoch andere Auflösungen zurückgeben, wenn eine genaue Übereinstimmung nicht verfügbar ist oder wenn der Benutzer sie überschreibt.

Um eine Fähigkeit _zwingend_ zu verlangen, verwenden Sie die Schlüsselwörter `min`, `max` oder `exact` (d.h. `min === max`). Das Folgende erfordert eine Mindestauflösung von 1280x720:

```js
getUserMedia({
  audio: true,
  video: {
    width: { min: 1280 },
    height: { min: 720 },
  },
});
```

Wenn keine Kamera mit dieser oder höherer Auflösung existiert, wird das zurückgegebene Promise mit `OverconstrainedError` abgelehnt, und der Benutzer wird nicht gefragt.

Der Grund für das unterschiedliche Verhalten ist, dass die Schlüsselwörter `min`, `max` und `exact` von Natur aus obligatorisch sind – während einfache Werte und ein Schlüsselwort namens `ideal` es nicht sind. Hier ein vollständiges Beispiel:

```js
getUserMedia({
  audio: true,
  video: {
    width: { min: 1024, ideal: 1280, max: 1920 },
    height: { min: 576, ideal: 720, max: 1080 },
  },
});
```

Ein `ideal`-Wert hat, wenn er verwendet wird, Schwerkraft – was bedeutet, dass der Browser versucht, die Einstellung (und Kamera, wenn Sie mehr als eine haben) mit der kleinsten [Fitness Distanz](https://w3c.github.io/mediacapture-main/#dfn-fitness-distance) von den angegebenen Idealwerten zu finden.

Einfache Werte sind inhärent ideal, was bedeutet, dass das erste unserer Auflösungsbeispiele oben so geschrieben werden könnte:

```js
getUserMedia({
  audio: true,
  video: {
    width: { ideal: 1280 },
    height: { ideal: 720 },
  },
});
```

Nicht alle Einschränkungen sind Zahlen. Zum Beispiel zieht das folgende Bei mobilen Geräten die Frontkamera (falls vorhanden) der hinteren vor:

```js
getUserMedia({
  audio: true,
  video: { facingMode: "user" },
});
```

Um die hintere Kamera zu _verlangen_, verwenden Sie:

```js
getUserMedia({
  audio: true,
  video: {
    facingMode: { exact: "environment" },
  },
});
```

Eine weitere nichtnumerische Einschränkung ist die `deviceId`-Einschränkung. Wenn Sie eine `deviceId` von [`mediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) haben, können Sie sie verwenden, um ein bestimmtes Gerät anzufordern:

```js
getUserMedia({
  video: {
    deviceId: myPreferredCameraDeviceId,
  },
});
```

Das Obige wird die von Ihnen angeforderte Kamera zurückgeben oder eine andere Kamera, wenn diese spezielle Kamera nicht mehr verfügbar ist. Nochmals, um die spezifische Kamera _zwingend zu verlangen_, würden Sie verwenden:

```js
getUserMedia({
  video: {
    deviceId: {
      exact: myExactCameraOrBustDeviceId,
    },
  },
});
```

### Breite und Höhe

Dieses Beispiel gibt eine Präferenz für die Kameraauflösung an und weist das resultierende [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekt einem Videoelement zu.

```js
// Prefer camera resolution nearest to 1280x720.
const constraints = {
  audio: true,
  video: { width: 1280, height: 720 },
};

navigator.mediaDevices
  .getUserMedia(constraints)
  .then((mediaStream) => {
    const video = document.querySelector("video");
    video.srcObject = mediaStream;
    video.onloadedmetadata = () => {
      video.play();
    };
  })
  .catch((err) => {
    // always check for errors at the end.
    console.error(`${err.name}: ${err.message}`);
  });
```

### Bildrate

Niedrigere Bildraten können in einigen Fällen wünschenswert sein, z. B. bei WebRTC-Übertragungen mit Bandbreitenbeschränkungen.

```js
const constraints = {
  video: { frameRate: { ideal: 10, max: 15 } },
};
```

### Front- und Rückkamera

Auf Mobiltelefonen.

```js
let front = false;
document.getElementById("flip-button").onclick = () => {
  front = !front;
};

const constraints = {
  video: { facingMode: front ? "user" : "environment" },
};
```

> [!NOTE]
> In bestimmten Fällen kann es erforderlich sein, den aktuellen Kamerabetriebsmodus freizugeben, bevor Sie zu einem anderen wechseln können. Um sicherzustellen, dass der Kamerawechsel erfolgt, ist es ratsam, die Medienressourcen freizugeben, indem die "stop()"-Methode auf der Spur aufgerufen wird, bevor ein anderer Betriebsmodus angefordert wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die ältere [`Navigator.getUserMedia()`](/de/docs/Web/API/Navigator/getUserMedia) Legacy-API
- [`MediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices): Auflisten verfügbarer Mediengeräte
- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API): Bildschirminhalt als [`MediaStream`](/de/docs/Web/API/MediaStream) erfassen
- [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia): Einen Stream mit Bildschirminhalt erhalten
- [Webcam-Fotos aufnehmen](/de/docs/Web/API/Media_Capture_and_Streams_API/Taking_still_photos): Ein Tutorial zur Verwendung von `getUserMedia()` für die Aufnahme von Standbildern anstelle von Videos
