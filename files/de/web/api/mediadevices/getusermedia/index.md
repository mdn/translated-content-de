---
title: "MediaDevices: Methode getUserMedia()"
short-title: getUserMedia()
slug: Web/API/MediaDevices/getUserMedia
l10n:
  sourceCommit: 01da0943d91ad8ff68a91f0273a5e4da87e512fb
---

{{securecontext_header}}{{APIRef("Media Capture and Streams")}}

Die **`getUserMedia()`**-Methode der [`MediaDevices`](/de/docs/Web/API/MediaDevices)-Schnittstelle fordert die Erlaubnis des Nutzers an, ein Medieneingabegerät zu verwenden, das einen [`MediaStream`](/de/docs/Web/API/MediaStream) mit Spuren der angeforderten Medientypen erzeugt.

Dieser Stream kann beispielsweise eine Videospur enthalten (erzeugt durch eine Hardware- oder virtuelle Videoquelle wie eine Kamera, ein Videoaufzeichnungsgerät, einen Bildschirmfreigabeservice usw.), eine Audiospur (ähnlich, erzeugt durch eine physische oder virtuelle Audioquelle wie ein Mikrofon, A/D-Wandler usw.) und möglicherweise andere Spurtypen.

Es wird ein {{jsxref("Promise")}} zurückgegeben, das zu einem [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekt aufgelöst wird.
Wenn der Nutzer die Erlaubnis verweigert oder keine passenden Medien verfügbar sind, wird das Versprechen mit einem `NotAllowedError` oder `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.

> [!NOTE]
> Es ist möglich, dass das zurückgegebene Versprechen _weder_ erfüllt noch abgelehnt wird, da der Nutzer nicht unbedingt eine Entscheidung treffen muss und die Anfrage ignorieren kann.

## Syntax

```js-nolint
getUserMedia(constraints)
```

### Parameter

- `constraints`
  - : Ein Objekt, das die anzufordernden Medientypen sowie alle Anforderungen für jeden Typ angibt.

    Der Parameter `constraints` ist ein Objekt mit zwei Elementen: `video` und `audio`, die die angeforderten Medientypen beschreiben.
    Entweder oder beide müssen angegeben werden.
    Wenn der Browser nicht alle Medienspuren der angegebenen Typen finden kann, die den angegebenen Einschränkungen entsprechen, wird das zurückgegebene Versprechen mit `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.

    Sowohl für `video` als auch `audio` ist der Wert entweder ein Boolean oder ein Objekt.
    Der Standardwert ist `false`.
    - Wenn `true` für einen Medientyp angegeben ist, muss der resultierende Stream diesen Spurtyp enthalten.
      Kann kein solcher Typ aus irgendeinem Grund enthalten sein, wird das zurückgegebene Versprechen abgelehnt.
    - Wenn `false` für einen Medientyp angegeben ist, _darf_ der resultierende Stream diesen Spurtyp nicht enthalten, oder das zurückgegebene Versprechen wird abgelehnt.
      Da sowohl `video` als auch `audio` standardmäßig auf `false` gesetzt sind, wird das zurückgegebene Versprechen immer abgelehnt, wenn das `constraints`-Objekt keine der Eigenschaften enthält oder überhaupt nicht vorhanden ist.
    - Wenn ein Objekt für einen Medientyp angegeben ist, wird das Objekt als [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Wörterbuch gelesen.

### Rückgabewert

Ein {{jsxref("Promise")}}, dessen Erfüllungshandler ein [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekt erhält, wenn die angeforderten Medien erfolgreich erfasst wurden.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Obwohl Nutzer und Betriebssystem beide Zugriff auf das Hardwaregerät gewährt haben und keine Hardwareprobleme auftraten, die einen `NotReadableError` [`DOMException`](/de/docs/Web/API/DOMException) verursachen würden, wird ein Fehler ausgelöst, wenn ein Problem auftrat, das die Nutzung des Geräts verhinderte.

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das aktuelle Dokument nicht vollständig aktiv ist.

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn eine oder mehrere der angeforderten Quellen zu diesem Zeitpunkt nicht genutzt werden können.
    Dies tritt auf, wenn der Browsing-Kontext unsicher ist (d.h. die Seite wurde mit HTTP statt HTTPS geladen).
    Es passiert auch, wenn der Nutzer festgelegt hat, dass die aktuelle Browsersitzung keinen Zugriff auf das Gerät haben darf, der Nutzer den Zugriff für die aktuelle Sitzung verweigert hat oder global alle Zugriffe auf Benutzermediengeräte verweigert hat.
    Bei Browsern, die die Verwaltung von Medienberechtigungen mit [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) unterstützen, wird dieser Fehler zurückgegeben, wenn die Permissions Policy nicht so konfiguriert ist, dass der Zugriff auf die Eingabequelle(n) erlaubt ist.

    > [!NOTE]
    > Ältere Versionen der Spezifikation verwendeten stattdessen `SecurityError`; `SecurityError` hat eine neue Bedeutung erhalten.

- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn keine Medien der angegebenen Typen gefunden wurden, die die angegebenen Einschränkungen erfüllen.
- `NotReadableError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn, obwohl der Nutzer die Erlaubnis zur Nutzung der passenden Geräte erteilt hat, ein Hardwarefehler auf Betriebssystem-, Browser- oder Webseitenebene auftrat, der den Zugriff auf das Gerät verhinderte.
- `OverconstrainedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die angegebenen Einschränkungen dazu führten, dass keine Kandidatengeräte den angeforderten Kriterien entsprachen.
    Der Fehler ist ein Objekt vom Typ `OverconstrainedError` und hat eine `constraint`-Eigenschaft, deren Zeichenfolgenwert der Name eines nicht erfüllbaren Constraints ist, und eine `message`-Eigenschaft, die eine für Menschen lesbare Zeichenfolge mit einer Erklärung des Problems enthält.

    > [!NOTE]
    > Da dieser Fehler auftreten kann, selbst wenn der Nutzer noch keine Erlaubnis zur Nutzung des zugrundeliegenden Geräts erteilt hat, kann er potenziell als {{Glossary("Fingerprinting", "Fingerprinting")}}-Oberfläche genutzt werden.

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Support für Benutzermedien im [`Document`](/de/docs/Web/API/Document), auf dem `getUserMedia()` aufgerufen wurde, deaktiviert ist.
    Der Mechanismus, mit dem der Support für Benutzermedien aktiviert oder deaktiviert wird, liegt im Ermessen des jeweiligen Benutzers.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die angegebene Liste der Einschränkungen leer ist oder alle Einschränkungen auf `false` gesetzt sind.
    Dies kann auch passieren, wenn Sie versuchen, `getUserMedia()` in einem unsicheren Kontext aufzurufen, da [`navigator.mediaDevices`](/de/docs/Web/API/Navigator/mediaDevices) in einem unsicheren Kontext `undefined` ist.

## Datenschutz und Sicherheit

Da die API erhebliche Datenschutzbedenken aufwerfen kann, legt die `getUserMedia()`-Spezifikation eine Vielzahl von Datenschutz- und Sicherheitsanforderungen fest, die von den Browsern erfüllt werden müssen.

`getUserMedia()` ist eine leistungsstarke Funktion, die nur in [sicheren Kontexten](/de/docs/Web/Security/Secure_Contexts) genutzt werden kann; in unsicheren Kontexten ist `navigator.mediaDevices` `undefined`, was den Zugriff auf `getUserMedia()` verhindert.
Ein sicherer Kontext ist im Wesentlichen eine Seite, die über HTTPS oder das `file:///`-URL-Schema geladen ist oder von `localhost`.

Darüber hinaus ist immer die Erlaubnis des Nutzers erforderlich, um auf seine Audio- und Videoeingaben zuzugreifen.
Nur das top-level Dokumentfenster eines gültigen Ursprungs kann um Erlaubnis bitten, `getUserMedia()` zu verwenden, es sei denn, der top-level Kontext erteilt ausdrücklich einer bestimmten {{HTMLElement("iframe")}} die Erlaubnis, dies mithilfe der [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) zu tun.
Andernfalls wird der Benutzer niemals um Erlaubnis zur Nutzung der Eingabegeräte gefragt.

Für zusätzliche Details zu diesen Anforderungen und Regeln, wie sie sich auf den Kontext auswirken, in dem Ihr Code läuft, und darüber, wie Browser Datenschutz- und Sicherheitsprobleme der Benutzer verwalten, lesen Sie weiter.

### Datenschutz des Nutzers

Als eine API, die erhebliche Datenschutzbedenken aufwerfen kann, unterliegt `getUserMedia()` der Spezifikation zu sehr spezifischen Anforderungen für Benachrichtigung und Berechtigungsmanagement des Nutzers.
Zuerst muss `getUserMedia()` immer die Erlaubnis des Nutzers erhalten, bevor es einen Medieneingabegerät wie eine Webcam oder ein Mikrofon öffnet.
Browser können eine einmalige Erlaubnis pro Domain anbieten, aber sie müssen zumindest beim ersten Mal fragen, und der Nutzer muss ausdrücklich anhaltende Erlaubnis erteilen, wenn er dies wünscht.

Ebenso wichtig sind die Regeln zur Benachrichtigung.
Browser müssen ein Symbol anzeigen, das anzeigt, dass eine Kamera oder ein Mikrofon verwendet wird, zusätzlich zu jedem möglicherweise vorhandenen Hardware-Indikator.
Sie müssen auch ein Symbol anzeigen, das anzeigt, dass die Erlaubnis zur Verwendung eines Geräts zur Eingabe erteilt wurde, auch wenn das Gerät momentan nicht aktiv aufnimmt.

In Firefox beispielsweise zeigt die URL-Leiste ein pulsierendes rotes Symbol, um anzuzeigen, dass eine Aufnahme im Gange ist.
Das Symbol ist grau, wenn die Erlaubnis vorhanden ist, die Aufnahme jedoch derzeit nicht im Gange ist.
Das physikalische Licht des Geräts wird verwendet, um anzuzeigen, ob die Aufnahme aktiv ist oder nicht.
Wenn Sie Ihre Kamera stummgeschaltet haben (sogenanntes "Facemuting"), erlischt das Aktivitätslicht Ihrer Kamera, um anzuzeigen, dass die Kamera Sie derzeit nicht aktiv aufzeichnet, ohne die Erlaubnis zu widerrufen, die Kamera nach dem Beenden der Stummschaltung erneut zu nutzen.

### Sicherheit

Es gibt eine Reihe von Möglichkeiten, wie die Sicherheitsverwaltung und -kontrollen in einem {{Glossary("user_agent", "User Agent")}} dazu führen können, dass `getUserMedia()` einen sicherheitsbezogenen Fehler zurückgibt.

#### Permissions Policy

Die zwei [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)-Direktiven, die für `getUserMedia()` gelten, sind `camera` und `microphone`.

Beispielsweise wird dieses HTTP-Header die Nutzung einer Kamera durch das Dokument und alle eingebetteten {{HTMLElement("iframe")}}-Elemente, die vom gleichen Ursprung geladen wurden, ermöglichen:

```http
Permissions-Policy: camera=(self)
```

Dies wird den Zugriff auf das Mikrofon für den aktuellen Ursprung und den spezifischen Ursprung `https://developer.mozilla.org` anfordern:

```http
Permissions-Policy: microphone=(self "https://developer.mozilla.org")
```

Wenn Sie `getUserMedia()` innerhalb eines `<iframe>` verwenden, können Sie die Erlaubnis nur für diesen Frame anfordern, was offensichtlich sicherer ist, als eine allgemeinere Erlaubnis anzufordern.
Hier geben Sie an, dass die Möglichkeit zur Nutzung von sowohl Kamera als auch Mikrofon benötigt wird:

```html
<iframe src="https://mycode.example.net/etc" allow="camera; microphone">
</iframe>
```

#### Verschlüsselungsbasierte Sicherheit

Die Methode `getUserMedia()` ist nur in [sicheren Kontexten](/de/docs/Web/Security/Secure_Contexts) verfügbar.
Ein sicherer Kontext ist einer, von dem der Browser mit einiger Sicherheit annehmen kann, dass er ein Dokument enthält, das sicher mit HTTPS/TLS geladen wurde und nur begrenzte Exposition gegenüber unsicheren Kontexten hat.
Wenn ein Dokument nicht in einem sicheren Kontext geladen wird, ist die [`navigator.mediaDevices`](/de/docs/Web/API/Navigator/mediaDevices)-Eigenschaft `undefined`, was den Zugriff auf `getUserMedia()` unmöglich macht.

Ein Versuch, in dieser Situation auf `getUserMedia()` zuzugreifen, führt zu einem {{jsxref("TypeError")}}.

#### Sicherheit der Dokumentquelle

Aufgrund der offensichtlichen Sicherheitsbedenken im Zusammenhang mit einer unerwarteten oder unvorsichtigen Nutzung von `getUserMedia()` kann es nur in sicheren Kontexten verwendet werden.
Es gibt eine Reihe von unsicheren Möglichkeiten, ein Dokument zu laden, das wiederum versuchen könnte, `getUserMedia()` aufzurufen.
Die folgenden sind Beispiele für Situationen, in denen `getUserMedia()` nicht aufgerufen werden darf:

- Ein Dokument, das in ein sandboxed {{HTMLElement("iframe")}}-Element geladen wird, kann `getUserMedia()` nicht aufrufen, es sei denn, das `<iframe>` hat sein [`sandbox`](/de/docs/Web/HTML/Reference/Elements/iframe#sandbox)-Attribut auf `allow-same-origin` gesetzt.
- Ein Dokument, das mit einer `data://`- oder `blob://`-URL geladen wird, die keinen Ursprung hat (z. B. wenn eine dieser URLs vom Nutzer in die Adressleiste eingegeben wird), kann `getUserMedia()` nicht aufrufen.
  Diese Arten von URLs, die aus JavaScript-Code geladen werden, übernehmen die Berechtigungen des Skripts.
- Jede andere Situation, in der es keinen Ursprung gibt, wie wenn das [`srcdoc`](/de/docs/Web/HTML/Reference/Elements/iframe#srcdoc)-Attribut verwendet wird, um den Inhalt eines Frames zu spezifizieren.

## Beispiele

### Verwendung von getUserMedia()

Im Allgemeinen greifen Sie auf das [`MediaDevices`](/de/docs/Web/API/MediaDevices)-Singleton-Objekt mithilfe von [`navigator.mediaDevices`](/de/docs/Web/API/Navigator/mediaDevices) zu, so:

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

Ähnlich sieht der Code aus, wenn die Rohversprechen direkt verwendet werden:

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
> Wenn das aktuelle Dokument nicht sicher geladen ist, wird `navigator.mediaDevices` `undefined` sein, und Sie können `getUserMedia()` nicht verwenden.
> Siehe [Sicherheit](#sicherheit) für weitere Informationen über dieses und andere sicherheitsrelevante Themen im Zusammenhang mit der Verwendung von `getUserMedia()`.

Unten finden Sie einige Beispiele für den `constraints`-Parameter.

Die folgenden Beispiele fordern sowohl Audio als auch Video ohne spezifische Anforderungen an:

```js
getUserMedia({
  audio: true,
  video: true,
});
```

Während Informationen über die Kameras und Mikrofone eines Nutzers aus Datenschutzgründen nicht zugänglich sind, kann eine Anwendung die gewünschte und benötigte Kamera- und Mikrofonfähigkeiten durch zusätzliche Einschränkungen anfordern.
Das folgende Beispiel gibt eine Präferenz für eine Kameraauflösung von 1280x720 an:

```js
getUserMedia({
  audio: true,
  video: { width: 1280, height: 720 },
});
```

Der Browser wird versuchen, die Einschränkungen zu erfüllen und eine passende Spur zurückgeben, wenn sie von der zugrundeliegenden Hardware unterstützt wird.
Wenn nicht unterstützt, kann der Browser versuchen, einen höher aufgelösten Stream von der zugrundeliegenden Hardware zu beschneiden und zu skalieren, um die Einschränkung zu erfüllen (und könnte auch die Bildrate reduzieren, wenn dies eingeschränkt wurde).
Dieses Verhalten kann erzwungen werden, indem die [`resizeMode`](/de/docs/Web/API/MediaTrackConstraints#resizemode)-Einschränkung auf `crop-and-scale` (oder deaktiviert, indem sie auf `none` gesetzt wird) konfiguriert wird:

```js
getUserMedia({
  audio: true,
  video: { width: 1280, height: 720, resizeMode: "crop-and-scale" },
});
```

Der Browser kann eine andere Auflösung zurückgeben, wenn keine exakte Übereinstimmung verfügbar ist und die Quelle nicht skaliert werden soll.

Um eine Fähigkeit _zwingend_ zu verlangen und zu versagen, wenn sie nicht verfügbar ist, verwenden Sie die Schlüsselwörter `min`, `max` oder `exact` (a.k.a. `min === max`).
Das folgende Beispiel verlangt eine Mindestauflösung von 1280x720:

```js
getUserMedia({
  audio: true,
  video: {
    width: { min: 1280 },
    height: { min: 720 },
  },
});
```

Wenn keine Kamera mit dieser oder einer höheren Auflösung existiert, wird das zurückgegebene Versprechen mit `OverconstrainedError` abgelehnt und der Nutzer wird nicht dazu aufgefordert, die Erlaubnis zu erteilen.

Der Grund für den Unterschied im Verhalten liegt darin, dass die Schlüsselwörter `min`, `max` und `exact` von Natur aus verpflichtend sind – wohingegen normale Werte und ein Schlüsselwort namens `ideal` nicht sind.
Hier ein vollständiges Beispiel:

```js
getUserMedia({
  audio: true,
  video: {
    width: { min: 1024, ideal: 1280, max: 1920 },
    height: { min: 576, ideal: 720, max: 1080 },
  },
});
```

Ein `ideal`-Wert hat bei Verwendung eine gravitative Wirkung – was bedeutet, dass der Browser versuchen wird, die Einstellung (und Kamera, wenn Sie mehr als eine haben) mit der geringsten [Anpassungsdistanz](https://w3c.github.io/mediacapture-main/#dfn-fitness-distance) zu finden.

Normale Werte sind von Natur aus ideal, was bedeutet, dass unser erstes Auflösungsbeispiel auch so hätte geschrieben werden können:

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
Zum Beispiel auf Mobilgeräten wird das folgende Beispiel die Frontkamera (falls eine vorhanden ist) gegenüber der Rückkamera bevorzugen:

```js
getUserMedia({
  audio: true,
  video: { facingMode: "user" },
});
```

Um die Rückkamera _zwingend_ zu verlangen, verwenden Sie:

```js
getUserMedia({
  audio: true,
  video: {
    facingMode: { exact: "environment" },
  },
});
```

Eine weitere nicht numerische Einschränkung ist die `deviceId`-Einschränkung.
Wenn Sie eine `deviceId` von [`mediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) haben, können Sie diese verwenden, um ein bestimmtes Gerät anzufordern:

```js
getUserMedia({
  video: {
    deviceId: myPreferredCameraDeviceId,
  },
});
```

Das obige Beispiel wird die angeforderte Kamera zurückgeben, oder eine andere Kamera, wenn diese spezielle Kamera nicht mehr verfügbar ist.
Intern verfügbare Informationen der Browser, wie Präferenzen der Nutzer, können auch Ihre Anforderung überschreiben.
So kann beispielsweise die Kamera, die der Nutzer ausgewählt hat, als er nach Kameraberechtigungen gefragt wurde, Vorrang vor der von Ihnen angeforderten haben.
Um wiederum eine spezifische Kamera _zwingend_ zu verlangen, würden Sie:

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

In einigen Fällen können geringere Bildraten wünschenswert sein, wie zum Beispiel bei WebRTC-Übertragungen mit Bandbreitenbeschränkungen.

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
> In bestimmten Fällen kann es erforderlich sein, den aktuellen Kamerabetriebsmodus freizugeben, bevor Sie zu einem anderen wechseln können.
> Um den Kamerabetrieb sicher zu wechseln, ist es ratsam, die Medienressourcen durch Aufrufen der "stop()"-Methode auf der Spur freizugeben, bevor Sie einen anderen Betriebsmodus anfordern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die ältere [`Navigator.getUserMedia()`](/de/docs/Web/API/Navigator/getUserMedia) Legacy-API
- [`MediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices): Auflistung der verfügbaren Mediengeräte
- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API): Erfassen von Bildschirminhalten als [`MediaStream`](/de/docs/Web/API/MediaStream)
- [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia): Abrufen eines Streams mit Bildschirminhalten
- [Erstellen von Webcam-Fotos](/de/docs/Web/API/Media_Capture_and_Streams_API/Taking_still_photos): Ein Tutorial zur Verwendung von `getUserMedia()` zum Erstellen von Standbildern statt Videos
