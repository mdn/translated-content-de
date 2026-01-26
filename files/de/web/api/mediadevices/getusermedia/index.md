---
title: "MediaDevices: getUserMedia() Methode"
short-title: getUserMedia()
slug: Web/API/MediaDevices/getUserMedia
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{securecontext_header}}{{APIRef("Media Capture and Streams")}}

Die **`getUserMedia()`**-Methode der [`MediaDevices`](/de/docs/Web/API/MediaDevices)-Schnittstelle fordert den Benutzer um Erlaubnis zur Nutzung eines Medieneingangs auf, welcher einen [`MediaStream`](/de/docs/Web/API/MediaStream) mit Spuren der angeforderten Medientypen erzeugt.

Dieser Stream kann beispielsweise eine Videospur umfassen (erzeugt entweder von einer Hardware- oder virtuellen Videoquelle wie einer Kamera, einem Videoaufnahmegerät, einem Bildschirmfreigabendienst usw.), eine Audiospur (ähnlich, erzeugt von einer physischen oder virtuellen Audioquelle wie einem Mikrofon, A/D-Wandler oder ähnlichem) und möglicherweise andere Spurtypen.

Die Methode gibt ein {{jsxref("Promise")}} zurück, das zu einem [`MediaStream`](/de/docs/Web/API/MediaStream) Objekt aufgelöst wird. Wenn der Benutzer die Erlaubnis verweigert oder keine passende Medienquelle verfügbar ist, wird das Versprechen mit `NotAllowedError` oder `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.

> [!NOTE]
> Es ist möglich, dass das zurückgegebene Versprechen _weder_ aufgelöst noch abgelehnt wird, da der Benutzer nicht verpflichtet ist, eine Entscheidung zu treffen und die Anfrage ignorieren kann.

## Syntax

```js-nolint
getUserMedia(constraints)
```

### Parameter

- `constraints`
  - : Ein Objekt, das die Arten von Medien spezifiziert, die angefordert werden, zusammen mit etwaigen Anforderungen für jeden Typ.

    Der `constraints`-Parameter ist ein Objekt mit zwei Mitgliedern: `video` und `audio`, die die angeforderten Medientypen beschreiben. Entweder oder beide müssen spezifiziert werden. Wenn der Browser keine Medienquellen mit den angegebenen Typen findet, die den gegebenen Anforderungen entsprechen, wird das zurückgegebene Versprechen mit `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.

    Für sowohl `video` als auch `audio` ist der Wert entweder ein Boolean oder ein Objekt. Der Standardwert ist `false`.
    - Wenn `true` für einen Medientyp angegeben wird, muss der resultierende Stream unbedingt diesen Typ von Spur enthalten. Wenn aus irgendeinem Grund keine enthalten sein kann, wird das zurückgegebene Versprechen abgelehnt.
    - Wenn `false` für einen Medientyp angegeben wird, darf der resultierende Stream _keinen_ Typ von Spur enthalten, oder das zurückgegebene Versprechen wird abgelehnt. Da sowohl `video` als auch `audio` standardmäßig `false` sind, wird das zurückgegebene Versprechen immer abgelehnt, wenn das `constraints`-Objekt keine dieser Eigenschaften enthält oder wenn es überhaupt nicht vorhanden ist.
    - Wenn ein Objekt für einen Medientyp angegeben wird, wird das Objekt als ein [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Wörterbuch gelesen.

### Rückgabewert

Ein {{jsxref("Promise")}}, dessen Erfüllungsbehandler ein [`MediaStream`](/de/docs/Web/API/MediaStream) Objekt erhält, wenn die angeforderten Medien erfolgreich bezogen wurden.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Obwohl der Benutzer und das Betriebssystem beide Zugriff auf das Hardwaregerät gewährt haben und keine Hardwareprobleme aufgetreten sind, die einen `NotReadableError` [`DOMException`](/de/docs/Web/API/DOMException) verursachen würden, wird eine Ausnahme ausgelöst, wenn ein Problem aufgetreten ist, das die Nutzung des Geräts verhindert hat.

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn das aktuelle Dokument nicht vollständig aktiv ist.

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn eines oder mehrere der angeforderten Quellgeräte derzeit nicht verwendet werden können. Dies tritt auf, wenn der Browsing-Kontext unsicher ist (d.h. die Seite wurde mit HTTP anstelle von HTTPS geladen). Es tritt auch auf, wenn der Benutzer angegeben hat, dass die aktuelle Browsing-Instanz keinen Zugriff auf das Gerät erhält, der Benutzer den Zugriff für die aktuelle Sitzung verweigert hat oder der Benutzer den Zugriff auf Benutzer-Mediengeräte weltweit verweigert hat. In Browsern, die die Verwaltung von Medienberechtigungen mit [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) unterstützen, wird dieser Fehler zurückgegeben, wenn die Permissions Policy nicht so konfiguriert ist, dass sie den Zugriff auf die Eingabequelle(n) erlaubt.

    > [!NOTE]
    > Ältere Versionen der Spezifikation verwendeten `SecurityError` stattdessen; `SecurityError` hat eine neue Bedeutung angenommen.

- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn keine Medienspuren des angegebenen Typs gefunden wurden, die die gegebenen Einschränkungen erfüllen.
- `NotReadableError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn trotz erteilter Erlaubnis zur Nutzung der entsprechenden Geräte ein Hardwarefehler im Betriebssystem, Browser oder auf der Webseite auftritt, der den Zugriff auf das Gerät verhindert.
- `OverconstrainedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn die angegebenen Einschränkungen zu keinen geeigneten Geräten führen, die die angeforderten Kriterien erfüllen. Der Fehler ist ein Objekt vom Typ `OverconstrainedError` und hat eine `constraint`-Eigenschaft, deren String-Wert der Name einer Einschränkung ist, die nicht erfüllt werden konnte, und eine `message`-Eigenschaft, die einen menschenlesbaren String enthält, der das Problem erklärt.

    > [!NOTE]
    > Da dieser Fehler auftreten kann, auch wenn dem Benutzer noch nicht die Erlaubnis zur Nutzung des zugrunde liegenden Geräts erteilt wurde, kann er möglicherweise als {{Glossary("Fingerprinting", "Fingerprinting")}}-Oberfläche genutzt werden.

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn die Unterstützung von Benutzer-Medien im [`Document`](/de/docs/Web/API/Document) deaktiviert ist, auf dem `getUserMedia()` aufgerufen wurde. Der Mechanismus, durch den die Unterstützung für Benutzer-Medien aktiviert und deaktiviert wird, bleibt dem einzelnen Benutzeragenten überlassen.
- {{jsxref("TypeError")}}
  - : Ausgelöst, wenn die Liste der angegebenen Einschränkungen leer ist oder alle Einschränkungen auf `false` gesetzt sind. Dies kann auch passieren, wenn Sie versuchen, `getUserMedia()` in einem unsicheren Kontext aufzurufen, da [`navigator.mediaDevices`](/de/docs/Web/API/Navigator/mediaDevices) in einem unsicheren Kontext `undefined` ist.

## Datenschutz und Sicherheit

Als eine API, die signifikante Datenschutzbedenken hervorrufen kann, legt die Spezifikation von `getUserMedia()` eine Vielzahl von Datenschutz- und Sicherheitsanforderungen fest, die Browser erfüllen müssen.

`getUserMedia()` ist ein starkes Merkmal, das nur in [sicheren Kontexten](/de/docs/Web/Security/Defenses/Secure_Contexts) verwendet werden kann; in unsicheren Kontexten ist `navigator.mediaDevices` `undefined`, was den Zugriff auf `getUserMedia()` verhindert. Ein sicherer Kontext ist kurz gesagt, eine Seite, die mit HTTPS oder dem `file:///` URL-Schema geladen wird, oder eine Seite von `localhost`.

Zusätzlich ist immer die Erlaubnis des Benutzers erforderlich, um auf die Audio- und Videoeingänge des Benutzers zuzugreifen. Nur das Top-Level-Dokumentfenster eines gültigen Ursprungs kann die Erlaubnis zur Nutzung von `getUserMedia()` anfordern, es sei denn, der Top-Level-Kontext gewährt ausdrücklich einem bestimmten {{HTMLElement("iframe")}} die Berechtigung, dies mit der [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) zu tun. Andernfalls wird der Benutzer niemals um Erlaubnis zur Nutzung der Eingabegeräte gebeten.

Für zusätzliche Details zu diesen Anforderungen und Regeln, wie sie im Kontext, in dem Ihr Code ausgeführt wird, widergespiegelt werden, und darüber, wie Browser Datenschutz- und Sicherheitsprobleme des Benutzers verwalten, lesen Sie weiter.

### Benutzerdatenschutz

Als eine API mit potenziell erheblichen Datenschutzbedenken unterliegt `getUserMedia()` spezifischen Anforderungen bezüglich Benutzerbenachrichtigung und Erlaubnisverwaltung laut der Spezifikation. Zunächst muss `getUserMedia()` immer die Erlaubnis des Benutzers einholen, bevor es eine Medienerfassungseingabe, wie eine Webcam oder ein Mikrofon, öffnet. Browser dürfen eine einmalige Erlaubnis pro Domain anbieten, müssen jedoch mindestens beim ersten Mal fragen, und der Benutzer muss ausdrücklich fortdauernde Erlaubnis gewähren, wenn er dies wünscht.

Gleich wichtig sind die Regeln zur Benachrichtigung. Browser sind verpflichtet, einen Indikator anzuzeigen, der zeigt, dass eine Kamera oder ein Mikrofon in Gebrauch ist, zusätzlich zu einem etwaigen Hardware-Indikator. Sie müssen auch einen Indikator anzeigen, dass die Erlaubnis zur Nutzung eines Geräts für die Eingabe erteilt wurde, auch wenn das Gerät momentan nicht aktiv aufzeichnet.

Zum Beispiel zeigt die URL-Leiste in Firefox ein pulsierendes rotes Symbol an, um anzuzeigen, dass eine Aufzeichnung im Gange ist. Das Symbol ist grau, wenn die Erlaubnis vorliegt, aber die Aufzeichnung momentan nicht läuft. Die physische Lichtanzeige des Geräts wird verwendet, um anzuzeigen, ob die Aufzeichnung aktiv ist oder nicht. Wenn Sie Ihre Kamera stummgeschaltet haben (sogenanntes "Facemuting"), erlischt das Aktivitätslicht Ihrer Kamera, um anzuzeigen, dass die Kamera Sie nicht aktiv aufzeichnet, ohne die Erlaubnis zu widerrufen, die Kamera nach dem Aufheben der Stummschaltung wieder zu verwenden.

### Sicherheit

Es gibt eine Anzahl von Wegen, auf denen Sicherheitsverwaltung und -kontrollen in einem {{Glossary("user_agent", "User Agent")}} dazu führen können, dass `getUserMedia()` einen sicherheitsrelevanten Fehler zurückgibt.

#### Permissions Policy

Die beiden [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) Direktiven, die auf `getUserMedia()` zutreffen, sind `camera` und `microphone`.

Zum Beispiel aktiviert dieses HTTP-Header die Benutzung einer Kamera durch das Dokument und alle eingebetteten {{HTMLElement("iframe")}}-Elemente, die vom gleichen Ursprung geladen werden:

```http
Permissions-Policy: camera=(self)
```

Dies wird Zugang zum Mikrofon für den aktuellen Ursprung und den spezifischen Ursprung `https://developer.mozilla.org` anfordern:

```http
Permissions-Policy: microphone=(self "https://developer.mozilla.org")
```

Wenn Sie `getUserMedia()` innerhalb eines `<iframe>` verwenden, können Sie die Erlaubnis nur für diesen Frame anfordern, was eindeutig sicherer ist als eine allgemeinere Erlaubnis anzufordern. Hier zeigen wir, dass wir sowohl die Kamera- als auch die Mikrofonfunktionalität benötigen:

```html
<iframe src="https://mycode.example.net/etc" allow="camera; microphone">
</iframe>
```

#### Sicherheitsbasiert auf Verschlüsselung

Die `getUserMedia()`-Methode ist nur in [sicheren Kontexten](/de/docs/Web/Security/Defenses/Secure_Contexts) verfügbar. Ein sicherer Kontext ist einer, in dem der Browser mit hinlänglichem Vertrauen annimmt, dass das Dokument sicher geladen wurde, mit HTTPS/TLS, und beschränkten Kontakt zu unsicheren Kontexten hat. Wenn ein Dokument nicht in einem sicheren Kontext geladen wird, ist die [`navigator.mediaDevices`](/de/docs/Web/API/Navigator/mediaDevices) Eigenschaft `undefined`, was den Zugang zu `getUserMedia()` unmöglich macht.

Der Versuch, in dieser Situation auf `getUserMedia()` zuzugreifen, führt zu einem {{jsxref("TypeError")}}.

#### Dokumentquellensicherheit

Aufgrund des offensichtlichen Sicherheitsanliegens, das mit `getUserMedia()` in unerwarteten Situationen oder ohne sorgfältig gemanagte Sicherheit verbunden ist, kann es nur in sicheren Kontexten verwendet werden. Es gibt eine Anzahl unsicherer Wege, ein Dokument zu laden, das möglicherweise versuchen könnte, `getUserMedia()` aufzurufen. Die folgenden Beispiele zeigen Situationen, in denen `getUserMedia()` nicht aufgerufen werden darf:

- Ein in ein sandboxed {{HTMLElement("iframe")}}-Element geladenes Dokument kann `getUserMedia()` nicht aufrufen, es sei denn, das `<iframe>` hat sein [`sandbox`](/de/docs/Web/HTML/Reference/Elements/iframe#sandbox)-Attribut auf `allow-same-origin` gesetzt.
- Ein Dokument, das mit einem `data://` oder `blob://` URL geladen wurde, der keine Ursprungsquelle hat (z.B., wenn einer dieser URLs vom Benutzer in die Adressleiste eingegeben wird), kann `getUserMedia()` nicht aufrufen. Solche URLs, die aus JavaScript-Code geladen werden, erben die Berechtigungen des Skripts.
- Jede andere Situation, in der es keinen Ursprung gibt, wie wenn das [`srcdoc`](/de/docs/Web/HTML/Reference/Elements/iframe#srcdoc)-Attribut verwendet wird, um die Inhalte eines Frames zu spezifizieren.

## Beispiele

### Verwendung von getUserMedia()

Im Allgemeinen greifen Sie auf das [`MediaDevices`](/de/docs/Web/API/MediaDevices)-Singleton-Objekt über [`navigator.mediaDevices`](/de/docs/Web/API/Navigator/mediaDevices) zu, so:

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

Ähnlich dazu sieht der Code bei direkter Verwendung der Roh-Promises so aus:

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
> Wenn das aktuelle Dokument nicht sicher geladen ist, wird `navigator.mediaDevices` `undefined` sein und Sie können `getUserMedia()` nicht verwenden. Siehe [Sicherheit](#sicherheit) für weitere Informationen zu diesem und anderen Sicherheitsproblemen im Zusammenhang mit der Verwendung von `getUserMedia()`.

Nachfolgend finden Sie einige Beispiele für den `constraints`-Parameter.

Die folgende Anforderung enthält sowohl Audio als auch Video ohne spezifische Anforderungen:

```js
getUserMedia({
  audio: true,
  video: true,
});
```

Während Informationen über die Kameras und Mikrofone eines Benutzers aus Datenschutzgründen nicht zugänglich sind, kann eine Anwendung die Kamera- und Mikrofonmöglichkeiten anfordern, die sie benötigt und möchte, indem sie zusätzliche Einschränkungen verwendet. Folgender Ausdruck bevorzugt eine Kamerauflösung von 1280x720:

```js
getUserMedia({
  audio: true,
  video: { width: 1280, height: 720 },
});
```

Der Browser wird versuchen, die Einschränkungen einzuhalten und eine passende Spur zurückgeben, wenn sie von der zugrunde liegenden Hardware unterstützt wird. Wenn sie nicht unterstützt wird, kann der Browser versuchen, einen Stream mit höherer Auflösung von der zugrunde liegenden Hardware zu zuschneiden und herunterzuskalieren, um die Einschränkung zu erfüllen (und könnte auch die Bildrate reduzieren, wenn diese eingeschränkt war). Dieses Verhalten kann erzwungen werden, indem die [`resizeMode`](/de/docs/Web/API/MediaTrackConstraints#resizemode)-Einschränkung auf `crop-and-scale` gesetzt (oder indem sie auf `none` gesetzt wird) deaktiviert wird:

```js
getUserMedia({
  audio: true,
  video: { width: 1280, height: 720, resizeMode: "crop-and-scale" },
});
```

Der Browser kann eine andere Auflösung zurückgeben, wenn keine exakte Übereinstimmung verfügbar ist und die Quelle nicht skaliert werden soll.

Um eine Fähigkeit _zuzulassen_ und wenn sie nicht verfügbar ist, verwenden Sie die Schlüsselwörter `min`, `max` oder `exact` (alias `min === max`). Folgender Ausdruck fordert eine Mindestauflösung von 1280x720:

```js
getUserMedia({
  audio: true,
  video: {
    width: { min: 1280 },
    height: { min: 720 },
  },
});
```

Wenn keine Kamera mit dieser oder einer höheren Auflösung existiert, wird das zurückgegebene Versprechen mit `OverconstrainedError` abgelehnt und dem Benutzer wird keine Anfrage gestellt.

Der Grund für das unterschiedliche Verhalten liegt darin, dass die Schlüsselwörter `min`, `max` und `exact` von Natur aus obligatorisch sind – während einfache Werte und ein Schlüsselwort namens `ideal` dies nicht sind. Hier ist ein vollständiges Beispiel:

```js
getUserMedia({
  audio: true,
  video: {
    width: { min: 1024, ideal: 1280, max: 1920 },
    height: { min: 576, ideal: 720, max: 1080 },
  },
});
```

Ein `ideal`-Wert hat Schwerkraft – das bedeutet, dass der Browser versucht, die Einstellung (und die Kamera, falls Sie mehr als eine haben) mit der kleinsten [Fitness-Distanz](https://w3c.github.io/mediacapture-main/#dfn-fitness-distance) von den angegebenen Idealwerten zu finden.

Einfache Werte sind von Natur aus ideal, was bedeutet, dass das erste unserer Auflösungsbeispiele oben so geschrieben hätte werden können:

```js
getUserMedia({
  audio: true,
  video: {
    width: { ideal: 1280 },
    height: { ideal: 720 },
  },
});
```

Nicht alle Einschränkungen sind Zahlen. Zum Beispiel wird auf mobilen Geräten im Folgenden die Frontkamera (falls verfügbar) gegenüber der Rückkamera bevorzugt:

```js
getUserMedia({
  audio: true,
  video: { facingMode: "user" },
});
```

Um die Rückkamera _zuzulassen_, verwenden Sie:

```js
getUserMedia({
  audio: true,
  video: {
    facingMode: { exact: "environment" },
  },
});
```

Eine weitere Nicht-Zahl-Einschränkung ist die `deviceId`-Einschränkung. Wenn Sie eine `deviceId` von [`mediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) haben, können Sie sie verwenden, um ein bestimmtes Gerät anzufordern:

```js
getUserMedia({
  video: {
    deviceId: myPreferredCameraDeviceId,
  },
});
```

Das obige gibt die von Ihnen angeforderte Kamera zurück, oder eine andere Kamera, falls diese spezifische Kamera nicht mehr verfügbar ist. Intern verfügbare Informationen der Browser, wie Benutzerpräferenzen, könnten ebenfalls Ihre Anfrage überschreiben. Zum Beispiel könnte die Kamera, die der Benutzer beim Erlauben von Kameraberechtigungen ausgewählt hat, Vorrang haben vor der von Ihnen angeforderten. Wiederum würde die bestimmte Kamera nur dann _zuzulassen_ sein:

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

Dieses Beispiel bevorzugt eine Auflösung für die Kamera und weist das resultierende [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekt einem Videoelement zu.

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

Niedrigere Bildraten können in einigen Fällen wünschenswert sein, wie WebRTC-Übertragungen mit Bandbreitenbeschränkungen.

```js
const constraints = {
  video: { frameRate: { ideal: 10, max: 15 } },
};
```

### Vorder- und Rückkamera

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
> In bestimmten Fällen kann es notwendig sein, den aktuellen Kameramodus freizugeben, bevor Sie zu einem anderen wechseln können. Um den Wechsel der Kameras zu gewährleisten, ist es ratsam, die Medienressourcen durch Aufruf der "stop()"-Methode für die Spur freizugeben, bevor ein anderer Modus angefordert wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die ältere [`Navigator.getUserMedia()`](/de/docs/Web/API/Navigator/getUserMedia) Legacy-API
- [`MediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices): Auflistung verfügbarer Mediengeräte
- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API): Aufzeichnung von Bildschirminhalten als [`MediaStream`](/de/docs/Web/API/MediaStream)
- [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia): Einen Stream mit Bildschirm-Inhalt erhalten
- [Webcam-Fotos machen](/de/docs/Web/API/Media_Capture_and_Streams_API/Taking_still_photos): Eine Anleitung zur Verwendung der `getUserMedia()` zur Aufnahme von Standbildern anstelle von Videos
