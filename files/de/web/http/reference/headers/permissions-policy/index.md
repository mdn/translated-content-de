---
title: Permissions-Policy header
short-title: Permissions-Policy
slug: Web/HTTP/Reference/Headers/Permissions-Policy
l10n:
  sourceCommit: 44a5fa2aace490e0114349d9d683675b2f5cacce
---

{{SeeCompatTable}}

Der HTTP **`Permissions-Policy`** {{Glossary("response_header", "Antwort-Header")}} bietet einen Mechanismus, um die Nutzung von Browser-Funktionen in einem Dokument oder innerhalb von {{HTMLElement("iframe")}}-Elementen im Dokument zu erlauben oder zu verweigern.

Verletzungen einer Richtlinie können mit der [Reporting API](/de/docs/Web/API/Reporting_API) gemeldet werden.
Berichte können an einen Server gesendet werden, der mit einem Namen in einem pro-Richtlinie angegebenen `report-to`-Parameter angegeben ist, oder andernfalls an den Serverendpunkt namens `"default"` (die Zuordnung zwischen Serverendpunktnamen und URLs wird mit dem {{HTTPHeader("Reporting-Endpoints")}} HTTP-Antwort-Header festgelegt).
Berichte können auch auf der Seite beobachtet werden, für die die Richtlinie durchgesetzt wird, unter Verwendung eines [`ReportingObserver`](/de/docs/Web/API/ReportingObserver).
Das Format des Berichts und zusätzliche Details werden in [`PermissionsPolicyViolationReport`](/de/docs/Web/API/PermissionsPolicyViolationReport) bereitgestellt.

Weitere Informationen finden Sie im Hauptartikel zur [Permissions-Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
# Single directive
Permissions-Policy: <directive>=<allowlist>

# Single directive with reporting endpoint
Permissions-Policy: <directive>=<allowlist>;report-to=<endpoint>

# Multiple directives, with and without server reporting endpoints
Permissions-Policy: <directive>=<allowlist>, <directive>=<allowlist>;report-to=<endpoint>, ...
```

Der Header kann verwendet werden, um die Allowlists für eine oder mehrere Direktiven festzulegen und optional einen `report-to`-Parameter pro Direktive anzugeben, der den Serverendpunkt angibt, an den Berichte über Richtlinienverletzungen gesendet werden sollen.
Die Einträge für jede Direktive sind durch Kommas getrennt.

- `<directive>`
  - : Die Permissions-Policy-Direktive, auf die die `Allowlist` angewendet werden soll. Siehe unten [Direktiven](#direktiven) für eine Liste der erlaubten Direktivnamen.
- `<allowlist>`
  - : Eine Allowlist ist eine Liste von Ursprüngen, die einen oder mehrere der folgenden Werte in Klammern enthält, die durch Leerzeichen getrennt sind:
    - `*` (Wildcard)
      - : Die Funktion wird in diesem Dokument und allen eingebetteten Browsing-Kontexten (`<iframe>`s) unabhängig von ihrem Ursprung erlaubt.
    - `()` (leere Allowlist)
      - : Die Funktion ist in obersten und eingebetteten Browsing-Kontexten deaktiviert. Das Äquivalent für `<iframe>`-`allow`-Attribute ist `'none'`.
    - `self`
      - : Die Funktion wird in diesem Dokument und in allen eingebetteten Browsing-Kontexten (`<iframe>`s) nur im gleichen Ursprung erlaubt. Die Funktion ist in eingebetteten Browsing-Kontexten über Ursprungsgrenzen hinweg nicht erlaubt. `self` kann als Kurzform für `https://your-site.example.com` angesehen werden. Das Äquivalent für `<iframe>`-`allow`-Attribute ist `self`.
    - `src`
      - : Die Funktion wird in diesem `<iframe>` erlaubt, solange das darin geladene Dokument vom gleichen Ursprung wie die URL in seinem {{HTMLElement('iframe','src','#Attributes')}}-Attribut stammt. Dieser Wert wird nur im `<iframe>`-`allow`-Attribut verwendet und ist der _Standard_`allowlist`-Wert in `<iframe>`s.
    - `"<origin>"`
      - : Die Funktion ist für bestimmte Ursprünge erlaubt (zum Beispiel, `"https://a.example.com"`). Ursprünge sollten durch Leerzeichen getrennt sein. Beachten Sie, dass Ursprünge in `<iframe>`-`allow`-Attributen nicht in Anführungszeichen geschrieben werden.

    Die Werte `*` und `()` dürfen nur allein verwendet werden, während `self` und `src` in Kombination mit einem oder mehreren Ursprüngen verwendet werden können.

    > [!NOTE]
    > Direktiven haben eine Standard-Allowlist, die immer eines von `*`, `self` oder `none` für den `Permissions-Policy` HTTP-Header ist, und regelt das Standardverhalten, wenn sie nicht explizit in einer Richtlinie aufgeführt sind.
    > Diese sind auf den einzelnen [Direktivreferenzseiten](#direktiven) angegeben. Für `<iframe>`-`allow`-Attribute ist das Standardverhalten immer `src`.

- `report-to=<endpoint>` {{optional_inline}}
  - : Der `report-to`-Parameter kann verwendet werden, um den Namen eines Berichts-Endpunkts anzugeben, an den Berichte gesendet werden, wenn eine Richtlinienverletzung für die zugehörige Direktive vorliegt.
    Der Endpunktname und die zugehörige URL müssen in einem separaten {{HTTPHeader("Reporting-Endpoints")}}-HTTP-Antwort-Header angegeben werden.

    Wenn er weggelassen wird, werden Berichte an den [`default`-Berichts-Endpunkt](/de/docs/Web/HTTP/Reference/Headers/Reporting-Endpoints#default_reporting_endpoint) gesendet, falls einer definiert wurde.
    Siehe [Reporting API](/de/docs/Web/API/Reporting_API) für weitere Informationen.

Wo unterstützt, können Sie Platzhalter in Permissions Policy Ursprüngen enthalten.
Dies bedeutet, dass Sie, anstatt explizit mehrere verschiedene Subdomänen in einer Allowlist anzugeben, alle in einem einzigen Ursprung mit einem Platzhalter angeben können.

Anstatt also:

```http
("https://example.com" "https://a.example.com" "https://b.example.com" "https://c.example.com")
```

könnten Sie angeben:

```http
("https://example.com" "https://*.example.com")
```

> [!NOTE]
> `"https://*.example.com"` entspricht nicht `"https://example.com"`.

## Direktiven

- {{httpheader('Permissions-Policy/accelerometer','accelerometer')}} {{Experimental_Inline}}
  - : Steuert, ob dem aktuellen Dokument erlaubt ist, Informationen über die Beschleunigung des Geräts über die [`Accelerometer`](/de/docs/Web/API/Accelerometer)-Schnittstelle zu sammeln.

- {{httpheader('Permissions-Policy/ambient-light-sensor','ambient-light-sensor')}} {{Experimental_Inline}}
  - : Steuert, ob dem aktuellen Dokument erlaubt ist, Informationen über die Lichtmenge in der Umgebung des Geräts über die [`AmbientLightSensor`](/de/docs/Web/API/AmbientLightSensor)-Schnittstelle zu sammeln.

- {{httpheader("Permissions-Policy/aria-notify", "aria-notify")}} {{Experimental_Inline}}
  - : Steuert, ob dem aktuellen Dokument erlaubt ist, die [`ariaNotify()`](/de/docs/Web/API/Document/ariaNotify)-Methode zu verwenden, um {{Glossary("screen_reader", "Screenreader")}}-Ankündigungen auszuführen.

- {{httpheader('Permissions-Policy/attribution-reporting','attribution-reporting')}} {{deprecated_inline}} {{non-standard_inline}}
  - : Steuert, ob dem aktuellen Dokument erlaubt ist, die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) zu verwenden.

- {{httpheader('Permissions-Policy/autoplay','autoplay')}} {{Experimental_Inline}}
  - : Steuert, ob dem aktuellen Dokument erlaubt ist, Medien automatisch abzuspielen, die über die [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Schnittstelle angefordert werden. Wenn diese Richtlinie deaktiviert ist und keine Nutzerinteraktionen erfolgt sind, wird das {{jsxref("Promise")}}, das von [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play) zurückgegeben wird, mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt. Das autoplay-Attribut auf {{HTMLElement("audio")}} und {{HTMLElement("video")}}-Elementen wird ignoriert.

- {{httpheader('Permissions-Policy/bluetooth','bluetooth')}} {{Experimental_Inline}}
  - : Steuert, ob die Verwendung der [Web Bluetooth API](/de/docs/Web/API/Web_Bluetooth_API) erlaubt ist. Wenn diese Richtlinie deaktiviert ist, geben die Methoden des [`Bluetooth`](/de/docs/Web/API/Bluetooth)-Objekts, das von [`Navigator.bluetooth`](/de/docs/Web/API/Navigator/bluetooth) zurückgegeben wird, entweder `false` zurück oder lehnen das zurückgegebene {{JSxRef("Promise")}} mit einem `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) ab.

- {{httpheader('Permissions-Policy/browsing-topics','browsing-topics')}} {{deprecated_inline}} {{non-standard_inline}}
  - : Steuert den Zugriff auf die [Topics API](/de/docs/Web/API/Topics_API). Wo eine Richtlinie die Verwendung der Topics API explizit verbietet, werden alle Versuche, die [`Document.browsingTopics()`](/de/docs/Web/API/Document/browsingTopics)-Methode aufzurufen oder eine Anfrage mit einem {{httpheader("Sec-Browsing-Topics")}}-Header zu senden, mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) fehlschlagen.

- {{httpheader('Permissions-Policy/camera', 'camera')}} {{experimental_inline}}
  - : Steuert, ob dem aktuellen Dokument erlaubt ist, Video-Eingabegeräte zu verwenden.
    Das von [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) zurückgegebene {{jsxref("Promise")}} wird mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt, wenn die Berechtigung nicht erlaubt ist.

- {{HTTPHeader('Permissions-Policy/captured-surface-control', 'captured-surface-control')}} {{experimental_inline}}
  - : Steuert, ob das Dokument die [Captured Surface Control API](/de/docs/Web/API/Screen_Capture_API/Captured_Surface_Control) verwenden darf.
    Das von den Hauptmethoden der API zurückgegebene Versprechen wird mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt, wenn die Berechtigung nicht erlaubt ist.

- {{HTTPHeader('Permissions-Policy/ch-ua-high-entropy-values', 'ch-ua-high-entropy-values')}} {{experimental_inline}}
  - : Steuert, ob das Dokument die Methode [`NavigatorUAData.getHighEntropyValues()`](/de/docs/Web/API/NavigatorUAData/getHighEntropyValues) verwenden darf, um hochentropische User-Agent-Daten abzurufen.
    Wenn die Berechtigung nicht erlaubt ist, gibt die Methode nur die niederige Entropiedaten `brands`, `mobile` und `platform` zurück.

- {{httpheader('Permissions-Policy/compute-pressure','compute-pressure')}} {{Experimental_Inline}}
  - : Steuert den Zugriff auf die [Compute Pressure API](/de/docs/Web/API/Compute_Pressure_API).

- {{httpheader('Permissions-Policy/cross-origin-isolated','cross-origin-isolated')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument als [cross-origin isolated](/de/docs/Web/API/Window/crossOriginIsolated) behandelt werden kann.

- {{HTTPHeader('Permissions-Policy/deferred-fetch', 'deferred-fetch')}} {{experimental_inline}}
  - : Steuert die Zuweisung des [`fetchLater()`-Kontingents](/de/docs/Web/API/Fetch_API/Using_Deferred_Fetch#quotas) des höchstleveligen Ursprungs.

- {{HTTPHeader('Permissions-Policy/deferred-fetch-minimal', 'deferred-fetch-minimal')}} {{experimental_inline}}
  - : Steuert die Zuweisung des gemeinsamen originübergreifenden Unterrahmen- [`fetchLater()`-Kontingents](/de/docs/Web/API/Fetch_API/Using_Deferred_Fetch#quotas).

- {{HTTPHeader('Permissions-Policy/display-capture', 'display-capture')}} {{experimental_inline}}
  - : Steuert, ob das aktuelle Dokument die Methode [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) verwenden darf, um Bildschirminhalte zu erfassen. Wenn diese Richtlinie deaktiviert ist, wird das von `getDisplayMedia()` zurückgegebene Versprechen bei fehlender Erlaubnis zur Erfassung der Display-Inhalte mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.

- {{httpheader('Permissions-Policy/encrypted-media', 'encrypted-media')}} {{Experimental_Inline}}
  - : Steuert, ob dem aktuellen Dokument die Verwendung der [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) (EME) erlaubt ist. Wenn diese Richtlinie deaktiviert ist, wird das von [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess) zurückgegebene {{jsxref("Promise")}} mit einem `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.

- {{httpheader('Permissions-Policy/fullscreen','fullscreen')}} {{experimental_inline}}
  - : Steuert, ob dem aktuellen Dokument die Verwendung von [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) erlaubt ist. Wenn diese Richtlinie deaktiviert ist, lehnt das zurückgegebene {{JSxRef("Promise")}} mit einem {{JSxRef("TypeError")}} ab.

- {{httpheader('Permissions-Policy/gamepad','gamepad')}} {{Experimental_Inline}}
  - : Steuert, ob dem aktuellen Dokument die Verwendung der [Gamepad API](/de/docs/Web/API/Gamepad_API) erlaubt ist.
    Wenn diese Richtlinie deaktiviert ist, werfen Aufrufe an [`Navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads) einen `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException), und die [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event) und [`gamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event) Ereignisse werden nicht ausgelöst.

- {{httpheader('Permissions-Policy/geolocation','geolocation')}} {{experimental_inline}}
  - : Steuert, ob dem aktuellen Dokument die Verwendung der [`Geolocation`](/de/docs/Web/API/Geolocation)-Schnittstelle erlaubt ist. Wenn diese Richtlinie deaktiviert ist, bewirken Aufrufe von [`getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition) und [`watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition), dass die Rückrufe dieser Funktionen mit einem [`GeolocationPositionError`](/de/docs/Web/API/GeolocationPositionError) Code von `PERMISSION_DENIED` aufgerufen werden.

- {{httpheader('Permissions-Policy/gyroscope','gyroscope')}} {{Experimental_Inline}}
  - : Steuert, ob dem aktuellen Dokument erlaubt ist, Informationen über die Ausrichtung des Geräts über die [`Gyroscope`](/de/docs/Web/API/Gyroscope)-Schnittstelle zu sammeln.

- {{httpheader('Permissions-Policy/hid','hid')}} {{Experimental_Inline}}
  - : Steuert, ob dem aktuellen Dokument die Verwendung der [WebHID API](/de/docs/Web/API/WebHID_API) erlaubt ist, um eine Verbindung zu ungewöhnlichen oder exotischen Mensch-Maschine-Schnittgeräte wie alternativen Tastaturen oder Gamepads herzustellen.

- {{httpheader('Permissions-Policy/identity-credentials-get','identity-credentials-get')}} {{Experimental_Inline}}
  - : Steuert, ob dem aktuellen Dokument die Verwendung der [Federated Credential Management API (FedCM)](/de/docs/Web/API/FedCM_API) erlaubt ist.

- {{httpheader('Permissions-Policy/idle-detection','idle-detection')}} {{Experimental_Inline}}
  - : Steuert, ob dem aktuellen Dokument die Verwendung der [Idle Detection API](/de/docs/Web/API/Idle_Detection_API) erlaubt ist, um zu erkennen, wann Nutzer mit ihren Geräten interagieren, zum Beispiel um den Status "verfügbar"/"abwesend" in Chat-Anwendungen zu melden.

- {{httpheader("Permissions-Policy/language-detector", "language-detector")}} {{Experimental_Inline}}
  - : Steuert den Zugriff auf die Sprachenerkennungsfunktionalität der [Translator and Language Detector APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs).

- {{httpheader('Permissions-Policy/local-fonts','local-fonts')}} {{Experimental_Inline}}
  - : Steuert, ob dem aktuellen Dokument die Erfassung von Daten zu den lokal installierten Schriften des Nutzers über die Methode [`Window.queryLocalFonts()`](/de/docs/Web/API/Window/queryLocalFonts) erlaubt ist (siehe auch die [Local Font Access API](/de/docs/Web/API/Local_Font_Access_API)).

- {{httpheader('Permissions-Policy/magnetometer','magnetometer')}} {{Experimental_Inline}}
  - : Steuert, ob dem aktuellen Dokument erlaubt ist, Informationen über die Ausrichtung des Geräts über die [`Magnetometer`](/de/docs/Web/API/Magnetometer)-Schnittstelle zu sammeln.

- {{httpheader('Permissions-Policy/microphone','microphone')}} {{experimental_inline}}
  - : Steuert, ob dem aktuellen Dokument die Verwendung von Audioeingabegeräten erlaubt ist. Wenn diese Richtlinie deaktiviert ist, wird das von [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) zurückgegebene {{jsxref("Promise")}} mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.

- {{httpheader('Permissions-Policy/midi', 'midi')}} {{Experimental_Inline}}
  - : Steuert, ob dem aktuellen Dokument die Verwendung der [Web MIDI API](/de/docs/Web/API/Web_MIDI_API) erlaubt ist. Wenn diese Richtlinie deaktiviert ist, wird das von [`Navigator.requestMIDIAccess()`](/de/docs/Web/API/Navigator/requestMIDIAccess) zurückgegebene {{jsxref("Promise")}} mit einem `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.

- {{httpheader("Permissions-Policy/on-device-speech-recognition", "on-device-speech-recognition")}} {{Experimental_Inline}}
  - : Steuert den Zugriff auf die [on-device speech recognition](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#on-device_speech_recognition)-Funktionalität der [Web Speech API](/de/docs/Web/API/Web_Speech_API).

- {{httpheader("Permissions-Policy/otp-credentials", "otp-credentials")}} {{Experimental_Inline}}
  - : Steuert, ob dem aktuellen Dokument die Verwendung der [WebOTP API](/de/docs/Web/API/WebOTP_API) erlaubt ist, um ein Einmalpasswort (OTP) aus einer speziell formatierten SMS-Nachricht anzufordern, die vom Server der App gesendet wird, z.B. über [`navigator.credentials.get({otp: ..., ...})`](/de/docs/Web/API/CredentialsContainer/get).

- {{httpheader('Permissions-Policy/payment', 'payment')}} {{Experimental_Inline}}
  - : Steuert, ob dem aktuellen Dokument die Verwendung der [Payment Request API](/de/docs/Web/API/Payment_Request_API) erlaubt ist. Wenn diese Richtlinie aktiviert ist, wird der [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest)-Konstruktor einen `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) auslösen.

- {{httpheader('Permissions-Policy/picture-in-picture', 'picture-in-picture')}} {{Experimental_Inline}}
  - : Steuert, ob dem aktuellen Dokument erlaubt ist, ein Video in einem Bild-im-Bild-Modus über die entsprechende API abzuspielen.

- {{httpheader('Permissions-Policy/private-state-token-issuance','private-state-token-issuance')}} {{Experimental_Inline}}
  - : Steuert die Verwendung von [private state token](/de/docs/Web/API/Private_State_Token_API) `token-request`-Operationen.

- {{httpheader('Permissions-Policy/private-state-token-redemption','private-state-token-redemption')}} {{Experimental_Inline}}
  - : Steuert die Verwendung von [private state token](/de/docs/Web/API/Private_State_Token_API) `token-redemption`- und `send-redemption-record`-Operationen.

- {{httpheader("Permissions-Policy/publickey-credentials-create", "publickey-credentials-create")}} {{Experimental_Inline}}
  - : Steuert, ob dem aktuellen Dokument die Verwendung der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) erlaubt ist, um neue asymmetrische Schlüsselanmeldeinformationen zu erstellen, z.B. über [`navigator.credentials.create({publicKey: ..., ...})`](/de/docs/Web/API/CredentialsContainer/create).

- {{httpheader("Permissions-Policy/publickey-credentials-get", "publickey-credentials-get")}} {{experimental_inline}}
  - : Steuert, ob dem aktuellen Dokument die Verwendung der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) erlaubt ist, um bereits gespeicherte Public-Key-Anmeldeinformationen abzurufen, z.B. über [`navigator.credentials.get({publicKey: ..., ...})`](/de/docs/Web/API/CredentialsContainer/get).

- {{httpheader('Permissions-Policy/screen-wake-lock', 'screen-wake-lock')}} {{experimental_inline}}
  - : Steuert, ob das aktuelle Dokument die Verwendung der [Screen Wake Lock API](/de/docs/Web/API/Screen_Wake_Lock_API) erlauben darf, um anzuzeigen, dass das Gerät den Bildschirm nicht ausschalten oder dimmen soll.

- {{httpheader('Permissions-Policy/serial','serial')}} {{Experimental_Inline}}
  - : Steuert, ob dem aktuellen Dokument die Verwendung der [Web Serial API](/de/docs/Web/API/Web_Serial_API) erlaubt ist, um mit seriellen Geräten zu kommunizieren, entweder direkt über einen seriellen Anschluss oder über USB- oder Bluetooth-Geräte, die einen seriellen Anschluss emulieren.

- {{httpheader("Permissions-Policy/speaker-selection", "speaker-selection")}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die Verwendung der [Audio Output Devices API](/de/docs/Web/API/Audio_Output_Devices_API) erlauben darf, um Lautsprecher aufzulisten und auszuwählen.

- {{httpheader("Permissions-Policy/storage-access", "storage-access")}} {{Experimental_Inline}}
  - : Steuert, ob ein in einem Drittkontext geladenes Dokument (d.h. eingebettet in ein {{htmlelement("iframe")}}) die [Storage Access API](/de/docs/Web/API/Storage_Access_API) verwenden darf, um Zugriff auf unpartitionierte Cookies anzufordern.

- {{httpheader("Permissions-Policy/translator", "translator")}} {{Experimental_Inline}}
  - : Steuert den Zugriff auf die Übersetzungsfunktionalität der [Translator and Language Detector APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs).

- {{httpheader("Permissions-Policy/summarizer", "summarizer")}} {{Experimental_Inline}}
  - : Steuert den Zugriff auf die [Summarizer API](/de/docs/Web/API/Summarizer_API).

- {{httpheader('Permissions-Policy/usb', 'usb')}} {{Experimental_Inline}}
  - : Steuert, ob dem aktuellen Dokument die Verwendung der [WebUSB API](/de/docs/Web/API/WebUSB_API) erlaubt ist.

- {{httpheader("Permissions-Policy/web-share", "web-share")}} {{experimental_inline}}
  - : Steuert, ob dem aktuellen Dokument erlaubt ist, die [`Navigator.share()`](/de/docs/Web/API/Navigator/share) der [Web Share API](/de/docs/Web/API/Web_Share_API) zu verwenden, um Text, Links, Bilder und andere Inhalte an beliebige, vom Benutzer ausgewählte Ziele zu teilen, z.B. mobile Apps.

- {{httpheader("Permissions-Policy/window-management", "window-management")}} {{experimental_inline}}
  - : Steuert, ob das aktuelle Dokument die Verwendung der [Window Management API](/de/docs/Web/API/Window_Management_API) erlauben darf, um Fenster auf mehreren Anzeigen zu verwalten.

- {{httpheader("Permissions-Policy/xr-spatial-tracking", "xr-spatial-tracking")}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die Verwendung der [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) erlauben darf, um mit einer WebXR-Sitzung zu interagieren.

## Beispiele

### Grundlegende Nutzung

#### Permissions-Policy-Header

Um allen Ursprüngen den Zugriff auf Geolocation zu erlauben, würden Sie folgendes tun:

```http
Permissions-Policy: geolocation=*
```

Oder um den Zugriff auf eine Teilmenge von Ursprüngen zu erlauben, würden Sie dies tun:

```http
Permissions-Policy: geolocation=(self "https://a.example.com" "https://b.example.com")
```

Mehrere Funktionen können gleichzeitig gesteuert werden, indem der Header mit einer durch Kommas getrennten Liste von Richtlinien gesendet wird, oder indem ein separater Header für jede Richtlinie gesendet wird.

Zum Beispiel sind die folgenden gleichwertig:

```http
Permissions-Policy: picture-in-picture=(), geolocation=(self https://example.com/), camera=*

Permissions-Policy: picture-in-picture=()
Permissions-Policy: geolocation=(self https://example.com/)
Permissions-Policy: camera=*
```

#### iframes

Damit ein `<iframe>` eine Funktion aktiviert hat, muss sein erlaubter Ursprung auch in der Allowlist der übergeordneten Seite enthalten sein. Aufgrund dieses [Vererbungsvorgehens](/de/docs/Web/HTTP/Guides/Permissions_Policy#inheritance_of_policies_for_embedded_content) ist es eine gute Idee, die breiteste akzeptable Unterstützung für eine Funktion im HTTP-Header festzulegen und dann den gewünschten Unterstützungsbereich in jedem `<iframe>` zu spezifizieren.

Um allen Ursprüngen den Zugriff auf Geolocation zu erlauben, würden Sie dies tun:

```html
<iframe src="https://example.com" allow="geolocation *"></iframe>
```

Um eine Richtlinie auf den aktuellen Ursprung und andere anzuwenden, würden Sie dies tun:

```html
<iframe
  src="https://example.com"
  allow="geolocation 'self' https://a.example.com https://b.example.com"></iframe>
```

Dies ist wichtig: Standardmäßig gilt die Richtlinie nicht für den Ursprung, zu dem das `<iframe>` navigiert, wenn es zu einem anderen Ursprung navigiert. Durch die Auflistung des Ursprungs, zu dem das `<iframe>` navigiert, im `allow`-Attribut wird die ursprünglich auf das `<iframe>` angewendete Permissions-Policy auch auf den Ursprung angewendet, zu dem das `<iframe>` navigiert.

Mehrere Funktionen können gleichzeitig gesteuert werden, indem eine durch Semikolons getrennte Liste von Richtliniendirektiven im `allow`-Attribut enthalten ist.

```html
<iframe
  src="https://example.com"
  allow="geolocation 'self' https://a.example.com https://b.example.com; fullscreen 'none'"></iframe>
```

Es ist erwähnenswert, den `src`-Wert besonders zu erwähnen. Wir haben oben erwähnt, dass die Verwendung dieses Allowlist-Wertes bedeutet, dass die zugehörige Funktion in diesem `<iframe>` erlaubt wird, solange das darin geladene Dokument vom gleichen Ursprung wie die URL in seinem {{HTMLElement('iframe','src','#Attributes')}}-Attribut stammt. Dieser Wert ist der _Standard_`allowlist`-Wert für Funktionen, die in `allow` aufgelistet sind, sodass die folgenden äquivalent sind:

```html
<iframe src="https://example.com" allow="geolocation 'src'"></iframe>
<iframe src="https://example.com" allow="geolocation"></iframe>
```

### Zugang zu leistungsstarken Funktionen verweigern

SecureCorp Inc. möchte die Microphone (z.B. [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)) und [`Geolocation`](/de/docs/Web/API/Geolocation) APIs in ihrer Anwendung deaktivieren. Sie können dies mit dem folgenden Antwort-Header tun:

```http
Permissions-Policy: microphone=(), geolocation=()
```

Indem `()` für die Ursprüngeliste angegeben wird, werden die angegebenen Funktionen für alle Browsing-Kontexte deaktiviert (das schließt alle `<iframe>`s ein), unabhängig von ihrem Ursprung.

### Kombination von HTTP-Header und `<iframe>`-Richtlinien

Zum Beispiel, nehmen wir an, wir wollten die Nutzung von Geolocation auf unserem eigenen Ursprung und in eingebettetem Inhalt von unserem vertrauenswürdigen Ad-Netzwerk zulassen. Wir könnten die seitenweite Permissions-Policy wie folgt einrichten:

```http
Permissions-Policy: geolocation=(self https://trusted-ad-network.com)
```

In unseren Anzeigen-`<iframe>`s könnten wir den Zugriff auf den Ursprung `https://trusted-ad-network.com` wie folgt festlegen:

```html
<iframe src="https://trusted-ad-network.com" allow="geolocation"></iframe>
```

Wenn ein anderer Ursprung in das `<iframe>` geladen wird, hätte er keinen Zugriff auf Geolocation:

```html
<iframe src="https://rogue-origin-example.com" allow="geolocation"></iframe>
```

### Berichte über Verstöße

Dieses Beispiel zeigt, wie das Reporting von `Permissions-Policy`-Verstößen an einen Serverendpunkt konfiguriert werden kann.

Die untenstehenden Antwort-Header blockieren Geolocation und definieren den Bericht-Endpunktnamen für die Funktion als "geo_endpoint".
Der {{HTTPHeader("Reporting-Endpoints")}} HTTP-Antwort-Header wird verwendet, um die URL dieses Endpunktnamens zu definieren.

```http
Reporting-Endpoints: geo_endpoint="https://example.com/reports"
Permissions-Policy: geolocation=();report-to=geo_endpoint
```

> [!NOTE]
> Um alle Berichtsverletzungen an den gleichen Endpunkt zu senden, könnten wir stattdessen den [`"default"` Berichts-Endpunkt](/de/docs/Web/HTTP/Reference/Headers/Reporting-Endpoints#default_reporting_endpoint) definieren:
>
> ```http
> Reporting-Endpoints: default="https://example.com/reports"
> Permissions-Policy: geolocation=()
> ```

Ein Verstoß tritt auf, wenn eine Seite versucht, die blockierte Funktion zu verwenden, zum Beispiel:

```js
navigator.geolocation.getCurrentPosition(
  () => {},
  () => {},
);
```

Die [Berichts-Nutzdaten](/de/docs/Web/API/Reporting_API#reporting_server_endpoints), die an den Endpunkt gesendet werden, könnten wie folgt aussehen:

```json
[
  {
    "age": 48512,
    "body": {
      "columnNumber": 29,
      "disposition": "enforce",
      "lineNumber": 44,
      "message": "Permissions policy violation: geolocation access has been blocked because of a permissions policy applied to the current document.",
      "featureId": "geolocation",
      "sourceFile": "https://example.com/"
    },
    "type": "permissions-policy-violation",
    "url": "https://example.com/",
    "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36"
  }
]
```

> [!NOTE]
> Chromes serverseitige Serialisierung von Verstoßberichten verwendet `policyId` anstelle von [`featureId`](/de/docs/Web/API/PermissionsPolicyViolationReport#featureid) für den Funktionsnamen im `body` eines Serverberichts.
> Der von einem [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) zurückgegebene [`PermissionsPolicyViolationReport`](/de/docs/Web/API/PermissionsPolicyViolationReport) folgt der Spezifikation.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)
- {{HTTPHeader("Permissions-Policy-Report-Only")}}
- [`Document.featurePolicy`](/de/docs/Web/API/Document/featurePolicy) und [`FeaturePolicy`](/de/docs/Web/API/FeaturePolicy)
- {{HTTPHeader("Content-Security-Policy")}}
- {{HTTPHeader("Referrer-Policy")}}
- {{HTTPHeader("Reporting-Endpoints")}}
- [`PermissionsPolicyViolationReport`](/de/docs/Web/API/PermissionsPolicyViolationReport)
- [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)
- [Reporting API](/de/docs/Web/API/Reporting_API)
