---
title: "MediaDevices: Methode getUserMedia()"
short-title: getUserMedia()
slug: Web/API/MediaDevices/getUserMedia
l10n:
  sourceCommit: b20a4643a0777bcb6bdc431b76ebf13eb2f31301
---

{{securecontext_header}}{{APIRef("Media Capture and Streams")}}

Die **`getUserMedia()`**-Methode der [`MediaDevices`](/de/docs/Web/API/MediaDevices)-Schnittstelle fordert vom Benutzer die Erlaubnis zur Verwendung eines Medieneingangs an, der einen [`MediaStream`](/de/docs/Web/API/MediaStream) mit Spuren erzeugt, die die angeforderten Medientypen enthalten.

Dieser Stream kann beispielsweise eine Videospur (erzeugt durch eine Hardware- oder virtuelle Videoquelle wie eine Kamera, ein Videoaufzeichnungsgerät, einen Bildschirmfreigabedienst usw.), eine Audiospur (ähnlich durch eine physische oder virtuelle Audioquelle wie ein Mikrofon, einen A/D-Wandler o.ä.) und möglicherweise andere Spurtypen enthalten.

Sie gibt ein {{jsxref("Promise")}} zurück, das in ein [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekt aufgelöst wird.
Wenn der Benutzer die Erlaubnis verweigert oder keine passenden Medien verfügbar sind, wird das Promise mit `NotAllowedError` oder `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.

> [!NOTE]
> Es ist möglich, dass das zurückgegebene Promise _weder_ aufgelöst noch abgelehnt wird, da der Benutzer nicht verpflichtet ist, sich zu entscheiden, und die Anfrage ignorieren kann.

## Syntax

```js-nolint
getUserMedia(constraints)
```

### Parameter

- `constraints`
  - : Ein Objekt, das die Arten von Medien, die angefordert werden, zusammen mit den Anforderungen für jeden Typ angibt.

    Der `constraints`-Parameter ist ein Objekt mit zwei Mitgliedern: `video` und `audio`, die die angeforderten Medientypen beschreiben.
    Entweder oder beide müssen angegeben werden.
    Wenn der Browser nicht alle Medienspuren mit den angegebenen Typen finden kann, die den gegebenen Einschränkungen entsprechen, wird das zurückgegebene Promise mit `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.

    Für sowohl `video` als auch `audio` ist der Wert entweder ein boolescher Wert oder ein Objekt.
    Der Standardwert ist `false`.
    - Wenn für einen Medientyp `true` angegeben wird, ist der resultierende Stream _verpflichtet_, diese Art von Spur zu enthalten.
      Wenn aus irgendeinem Grund keine enthalten werden kann, wird das zurückgegebene Promise abgelehnt.
    - Wenn für einen Medientyp `false` angegeben wird, _darf_ der resultierende Stream diese Art von Spur nicht enthalten oder das zurückgegebene Promise wird abgelehnt.
      Da sowohl `video` als auch `audio` standardmäßig `false` sind, wird das zurückgegebene Promise immer abgelehnt, wenn das `constraints`-Objekt keine dieser Eigenschaften enthält oder überhaupt nicht vorhanden ist.
    - Wenn für einen Medientyp ein Objekt angegeben ist, wird das Objekt als [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Wörterbuch gelesen.

### Rückgabewert

Ein {{jsxref("Promise")}}, dessen Fulfillment-Handler ein [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekt erhält, wenn die angeforderten Medien erfolgreich abgerufen wurden.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Obwohl sowohl der Benutzer als auch das Betriebssystem den Zugriff auf das Hardwaregerät erteilt haben und keine Hardwareprobleme auftraten, die einen `NotReadableError` [`DOMException`](/de/docs/Web/API/DOMException) verursachen würden, wird diese Ausnahme ausgelöst, wenn ein Problem aufgetreten ist, das die Verwendung des Geräts verhindert hat.

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn das aktuelle Dokument nicht vollständig aktiv ist.

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn eines oder mehrere der angeforderten Quellgeräte derzeit nicht verwendet werden können.
    Dies tritt auf, wenn der Browsing-Kontext unsicher ist (d.h. die Seite wurde mittels HTTP statt HTTPS geladen).
    Es passiert auch, wenn der Benutzer angegeben hat, dass die aktuelle Browsing-Instanz keinen Zugriff auf das Gerät erhält, der Benutzer den Zugriff für die aktuelle Sitzung verweigert hat oder der Benutzer den Zugriff auf Benutzermediengeräte global verweigert hat.
    In Browsern, die das Verwalten von Medienberechtigungen mit [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) unterstützen, wird dieser Fehler zurückgegeben, wenn die Berechtigungsrichtlinie nicht konfiguriert ist, um den Zugriff auf die Eingabequelle(n) zu ermöglichen.

    > [!NOTE]
    > Ältere Versionen der Spezifikation verwendeten `SecurityError` hierfür stattdessen; `SecurityError` hat eine neue Bedeutung erhalten.

- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn keine Medienspuren des angegebenen Typs gefunden wurden, die die gegebenen Einschränkungen erfüllen.
- `NotReadableError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn der Benutzer zwar die Erlaubnis erteilt hat, die passenden Geräte zu verwenden, jedoch ein Hardwarefehler auf Webseite-, Betriebssystem- oder Browserebene aufgetreten ist, der den Zugriff auf das Gerät verhindert hat.
- `OverconstrainedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn die angegebenen Einschränkungen zu keinen Kandidatengeräten führten, die die gewünschten Kriterien erfüllten.
    Der Fehler ist ein Objekt vom Typ `OverconstrainedError` und hat eine `constraint`-Eigenschaft, deren Zeichenfolgenwert der Name einer Einschränkung ist, die nicht erfüllt werden konnte, sowie eine `message`-Eigenschaft, die eine menschenlesbare Zeichenfolge zur Erläuterung des Problems enthält.

    > [!NOTE]
    > Da dieser Fehler auch auftreten kann, wenn der Benutzer noch keine Erlaubnis zur Verwendung des zugrunde liegenden Geräts erteilt hat, kann er potenziell als {{Glossary("Fingerprinting", "Fingerprinting")}}-Oberfläche genutzt werden.

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn die Unterstützung für Benutzermedien im [`Document`](/de/docs/Web/API/Document), auf dem `getUserMedia()` aufgerufen wurde, deaktiviert ist.
    Der Mechanismus, durch den die Unterstützung für Benutzermedien aktiviert und deaktiviert wird, bleibt dem individuellen Benutzeragenten überlassen.
- {{jsxref("TypeError")}}
  - : Ausgelöst, wenn die Liste der angegebenen Einschränkungen leer ist oder alle Einschränkungen auf `false` gesetzt sind.
    Dies kann auch passieren, wenn Sie versuchen, `getUserMedia()` in einem unsicheren Kontext aufzurufen, da [`navigator.mediaDevices`](/de/docs/Web/API/Navigator/mediaDevices) in einem unsicheren Kontext `undefined` ist.

## Datenschutz und Sicherheit

Als eine API, die erhebliche Datenschutzbedenken aufwerfen kann, legt die Spezifikation von `getUserMedia()` eine Vielzahl von Datenschutz- und Sicherheitsanforderungen fest, die Browser einhalten müssen.

`getUserMedia()` ist ein leistungsstarkes Feature, das nur in [sicheren Kontexten](/de/docs/Web/Security/Secure_Contexts) verwendet werden kann; in unsicheren Kontexten ist `navigator.mediaDevices` `undefined`, was den Zugriff auf `getUserMedia()` verhindert.
Ein sicherer Kontext ist im Wesentlichen eine Seite, die über HTTPS oder das `file:///`-URL-Schema geladen wurde oder eine Seite, die von `localhost` geladen wurde.

Zudem ist immer die Erlaubnis des Benutzers erforderlich, um auf die Audio- und Videoeingänge des Benutzers zuzugreifen.
Nur das oberste Dokumentkontextfenster für einen gültigen Ursprung kann überhaupt die Erlaubnis zum Verwenden von `getUserMedia()` anfordern, es sei denn, der oberste Kontext gewährt ausdrücklich die Berechtigung für ein bestimmtes {{HTMLElement("iframe")}}, dies zu tun, unter Verwendung der [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy).
Andernfalls wird der Benutzer niemals um Erlaubnis für die Verwendung der Eingabegeräte gebeten.

Für zusätzliche Details zu diesen Anforderungen und Regeln, wie sie im Kontext, in dem Ihr Code ausgeführt wird, reflektiert werden, und darüber, wie Browser Datenschutz- und Sicherheitsprobleme des Benutzers verwalten, lesen Sie weiter.

### Datenschutz des Benutzers

Als eine API, die erhebliche Datenschutzbedenken aufwerfen kann, wird `getUserMedia()` von der Spezifikation sehr spezifischen Anforderungen an Benachrichtigung und Berechtigungsverwaltung unterworfen.
Zuerst muss `getUserMedia()` stets die Benutzererlaubnis einholen, bevor es ein Medienerfassungsgerät wie eine Webcam oder ein Mikrofon öffnet.
Browser können eine Einmal-pro-Domain-Berechtigungsfunktion anbieten, aber sie müssen mindestens beim ersten Mal nachfragen, und der Benutzer muss ausdrücklich eine fortwährende Erlaubnis erteilen, wenn er sich dazu entscheidet.

Von ebenso hoher Bedeutung sind die Benachrichtigungsregeln.
Browser müssen ein Anzeigeelement anzeigen, das zeigt, dass eine Kamera oder ein Mikrofon verwendet wird, über jedwelche vorhandenen Hardwareanzeigen hinaus.
Sie müssen auch ein Anzeigeelement anzeigen, das anzeigt, dass die Erlaubnis zur Verwendung eines Geräts erteilt wurde, selbst wenn das Gerät momentan nicht aktiv aufzeichnet.

Zum Beispiel zeigt die URL-Leiste in Firefox ein pulsierendes rotes Icon an, um anzuzeigen, dass eine Aufnahme im Gange ist.
Das Icon ist grau, wenn die Erlaubnis erteilt wurde, die Aufnahme aber momentan nicht im Gange ist.
Das physische Licht des Geräts wird verwendet, um anzuzeigen, ob die Aufnahme gerade aktiv ist oder nicht.
Wenn Sie Ihre Kamera stummgeschaltet haben (sogenanntes „facemuting“), erlischt das Kameralicht, um anzuzeigen, dass die Kamera nicht aktiv aufzeichnet, ohne die Erlaubnis zum Fortfahren der Verwendung der Kamera nach Beendigung des Stummschaltens zu widerrufen.

### Sicherheit

Es gibt eine Reihe von Möglichkeiten, wie Sicherheitsmanagement und -kontrollen in einem {{Glossary("user_agent", "Benutzeragent")}} dazu führen können, dass `getUserMedia()` einen sicherheitsbezogenen Fehler zurückgibt.

#### Berechtigungsrichtlinie

Die beiden [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy)-Direktiven, die für `getUserMedia()` gelten, sind `camera` und `microphone`.

Zum Beispiel wird dieser HTTP-Header die Verwendung einer Kamera durch das Dokument und alle eingebetteten {{HTMLElement("iframe")}}-Elemente, die vom selben Ursprung geladen werden, aktivieren:

```http
Permissions-Policy: camera=(self)
```

Dies wird den Zugriff auf das Mikrofon für den aktuellen Ursprung und den spezifischen Ursprung `https://developer.mozilla.org` anfordern:

```http
Permissions-Policy: microphone=(self "https://developer.mozilla.org")
```

Wenn Sie `getUserMedia()` innerhalb eines `<iframe>` verwenden, können Sie die Berechtigung nur für diesen Frame anfordern, was offensichtlich sicherer ist als eine allgemeinere Berechtigung anzufordern.
Hierbei geben wir an, dass wir die Fähigkeit benötigen, sowohl Kamera als auch Mikrofon zu verwenden:

```html
<iframe src="https://mycode.example.net/etc" allow="camera; microphone">
</iframe>
```

#### Sicherheitsmaßnahmen auf Basis von Verschlüsselung

Die `getUserMedia()`-Methode ist nur in [sicheren Kontexten](/de/docs/Web/Security/Secure_Contexts) verfügbar.
Ein sicherer Kontext ist einer, bei dem der Browser mit angemessener Zuversicht davon ausgehen kann, dass er ein Dokument enthält, das sicher geladen wurde, unter Verwendung von HTTPS/TLS, und das nur begrenzt anfällig für unsichere Kontexte ist.
Wenn ein Dokument nicht in einem sicheren Kontext geladen wird, ist die [`navigator.mediaDevices`](/de/docs/Web/API/Navigator/mediaDevices)-Eigenschaft `undefined`, was den Zugriff auf `getUserMedia()` unmöglich macht.

Der Versuch, `getUserMedia()` in dieser Situation aufzurufen, führt zu einem {{jsxref("TypeError")}}.

#### Sicherheitsmaßnahmen bezogen auf die Dokumentquelle

Aufgrund der offensichtlichen Sicherheitsbedenken, die mit `getUserMedia()` verbunden sein können, wenn es unerwartet oder ohne sorgfältig verwaltete Sicherheit verwendet wird, kann es nur in sicheren Kontexten verwendet werden.
Es gibt eine Reihe von unsicheren Möglichkeiten, ein Dokument zu laden, das wiederum versuchen könnte, `getUserMedia()` aufzurufen.
Im Folgenden sind Beispiele für Situationen, in denen `getUserMedia()` nicht aufgerufen werden darf:

- Ein Dokument, das in ein sandboxed {{HTMLElement("iframe")}}-Element geladen wurde, kann `getUserMedia()` nicht aufrufen, es sei denn, das `<iframe>` hat sein [`sandbox`](/de/docs/Web/HTML/Reference/Elements/iframe#sandbox)-Attribut auf `allow-same-origin` gesetzt.
- Ein Dokument, das über eine `data://`- oder `blob://`-URL geladen wurde, die keinen Ursprung hat (wie z.B. wenn eine dieser URLs von einem Benutzer in die Adressleiste eingegeben wird), kann `getUserMedia()` nicht aufrufen.
  Diese Arten von URLs, die von JavaScript-Code geladen werden, erben die Berechtigungen des Skripts.
- Jede andere Situation, in der es keinen Ursprung gibt, wie z.B., wenn das [`srcdoc`](/de/docs/Web/HTML/Reference/Elements/iframe#srcdoc)-Attribut verwendet wird, um den Inhalt eines Rahmens zu spezifizieren.

## Beispiele

### Verwendung von getUserMedia()

Im Allgemeinen werden Sie auf das [`MediaDevices`](/de/docs/Web/API/MediaDevices)-Singleton-Objekt über [`navigator.mediaDevices`](/de/docs/Web/API/Navigator/mediaDevices) zugreifen, wie folgt:

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

Ähnlich sieht der Code bei Verwendung der rohen Promises direkt so aus:

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
> Wenn das aktuelle Dokument nicht sicher geladen wurde, wird `navigator.mediaDevices` `undefined` sein, und Sie können `getUserMedia()` nicht verwenden.
> Weitere Informationen hierzu und zu anderen Sicherheitsproblemen im Zusammenhang mit der Verwendung von `getUserMedia()` finden Sie unter [Sicherheit](#sicherheit).

Im Folgenden sind einige Beispiele für den `constraints`-Parameter aufgeführt.

Der folgende Code fordert sowohl Audio als auch Video ohne spezifische Anforderungen an:

```js
getUserMedia({
  audio: true,
  video: true,
});
```

Während Informationen über die Kameras und Mikrofone eines Benutzers aus Datenschutzgründen nicht zugänglich sind, kann eine Anwendung die Kamera- und Mikrofonfähigkeiten anfordern, die sie benötigt und wünscht, indem zusätzliche Einschränkungen verwendet werden.
Das Folgende drückt eine Präferenz für 1280x720-Kameraauflösung aus:

```js
getUserMedia({
  audio: true,
  video: { width: 1280, height: 720 },
});
```

Der Browser wird versuchen, die Einschränkungen zu erfüllen und eine passende Spur zurückzugeben, wenn sie von der zugrunde liegenden Hardware unterstützt wird.
Wenn sie nicht unterstützt wird, kann der Browser versuchen, einen Stream mit höherer Auflösung von der zugrunde liegenden Hardware zu beschneiden und herunterskaliert zurückzugeben, um die Einschränkungen zu erfüllen (und könnte auch die Bildrate reduzieren, wenn dies eingeschränkt wurde).
Dieses Verhalten kann erzwungen werden, indem die [`resizeMode`](/de/docs/Web/API/MediaTrackConstraints#resizemode)-Einschränkung auf `crop-and-scale` gesetzt wird (oder deaktiviert wird, indem sie auf `none` gesetzt wird):

```js
getUserMedia({
  audio: true,
  video: { width: 1280, height: 720, resizeMode: "crop-and-scale" },
});
```

Der Browser kann eine andere Auflösung zurückgeben, wenn keine genaue Übereinstimmung verfügbar ist und die Quelle nicht skaliert werden soll.

Um eine Fähigkeit zu _erzwingen_ und zu scheitern, wenn sie nicht verfügbar ist, verwenden Sie die Schlüsselwörter `min`, `max` oder `exact` (alias `min === max`).
Das Folgende fordert eine Mindestauflösung von 1280x720:

```js
getUserMedia({
  audio: true,
  video: {
    width: { min: 1280 },
    height: { min: 720 },
  },
});
```

Wenn keine Kamera mit dieser oder höherer Auflösung existiert, wird das zurückgegebene Promise mit `OverconstrainedError` abgelehnt, und der Benutzer wird nicht aufgefordert.

Der Grund für das unterschiedliche Verhalten ist, dass die Schlüsselwörter `min`, `max` und `exact` inhärent verpflichtend sind – wohingegen einfache Werte und ein Schlüsselwort namens `ideal` es nicht sind.
Hier ist ein vollständiges Beispiel:

```js
getUserMedia({
  audio: true,
  video: {
    width: { min: 1024, ideal: 1280, max: 1920 },
    height: { min: 576, ideal: 720, max: 1080 },
  },
});
```

Ein `ideal`-Wert hat Schwerkraft – was bedeutet, dass der Browser versuchen wird, die Einstellung (und Kamera, wenn Sie mehr als eine haben) mit der kleinsten [Fitness-Distanz](https://w3c.github.io/mediacapture-main/#dfn-fitness-distance) zu den angegebenen idealen Werten zu finden.

Einfache Werte sind inhärent ideal, was bedeutet, dass das erste unserer Auflösungsbeispiele oben so hätte geschrieben werden können:

```js
getUserMedia({
  audio: true,
  video: {
    width: { ideal: 1280 },
    height: { ideal: 720 },
  },
});
```

Nicht alle Einschränkungen sind Zahlen.
Zum Beispiel wird auf Mobilgeräten das Folgende die Frontkamera (wenn verfügbar) der Rückkamera vorziehen:

```js
getUserMedia({
  audio: true,
  video: { facingMode: "user" },
});
```

Um die Rückkamera _zu erzwingen_, verwenden Sie:

```js
getUserMedia({
  audio: true,
  video: {
    facingMode: { exact: "environment" },
  },
});
```

Eine weitere Nicht-Nummer Einschränkung ist die `deviceId`-Einschränkung.
Wenn Sie eine `deviceId` von [`mediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) haben, können Sie sie verwenden, um ein bestimmtes Gerät anzufordern:

```js
getUserMedia({
  video: {
    deviceId: myPreferredCameraDeviceId,
  },
});
```

Das Obige wird die angeforderte Kamera zurückgeben oder eine andere Kamera, wenn diese spezielle Kamera nicht mehr verfügbar ist.
Um die spezifische Kamera _zu erzwingen_, würden Sie verwenden:

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

Niedrigere Bildraten können in einigen Fällen wünschenswert sein, zum Beispiel bei WebRTC-Übertragungen mit Bandbreitenbeschränkungen.

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
> In bestimmten Fällen kann es notwendig sein, den aktuellen Kameramodus freizugeben, bevor Sie zu einem anderen wechseln können.
> Um den Kameramodus zu wechseln, ist es ratsam, die Medienressourcen freizugeben, indem Sie die "stop()"-Methode auf der Spur aufrufen, bevor Sie einen anderen Modus anfordern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die ältere [`Navigator.getUserMedia()`](/de/docs/Web/API/Navigator/getUserMedia)-Legacy-API
- [`MediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices): Auflisten verfügbarer Mediengeräte
- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API): Erfassen von Bildschirm-Inhalten als [`MediaStream`](/de/docs/Web/API/MediaStream)
- [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia): Abrufen eines Streams mit Bildschirm-Inhalten
- [Webcam-Fotos aufnehmen](/de/docs/Web/API/Media_Capture_and_Streams_API/Taking_still_photos): Ein Tutorial zur Verwendung von `getUserMedia()`, um Standbilder statt Videos aufzunehmen
