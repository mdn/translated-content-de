---
title: Permissions-Policy header
short-title: Permissions-Policy
slug: Web/HTTP/Reference/Headers/Permissions-Policy
l10n:
  sourceCommit: 9274067a31863bf4ce49bd8dc3a2623e1f3f7590
---

{{SeeCompatTable}}

Der HTTP-{{Glossary("response_header", "Response-Header")}} **`Permissions-Policy`** bietet einen Mechanismus, um die Verwendung von Browser-Funktionen in einem Dokument oder in {{HTMLElement("iframe")}}-Elementen innerhalb des Dokuments zu erlauben oder zu verweigern.

Verstöße gegen eine Richtlinie können über die [Reporting API](/de/docs/Web/API/Reporting_API) gemeldet werden.
Berichte können an einen Server gesendet werden, dessen Name in einem direktivenspezifischen `report-to`-Parameter angegeben ist. Andernfalls werden sie an den Server-Endpunkt mit dem Namen `"default"` gesendet. Die Zuordnung von Endpunktnamen zu URLs wird über den HTTP-Response-Header {{HTTPHeader("Reporting-Endpoints")}} festgelegt.
Berichte können außerdem auf der Seite, für die die Richtlinie durchgesetzt wird, mithilfe eines [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) beobachtet werden.
Das Format des Berichts und weitere Einzelheiten sind unter [`PermissionsPolicyViolationReport`](/de/docs/Web/API/PermissionsPolicyViolationReport) beschrieben.

Weitere Informationen finden Sie im Hauptartikel zur [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Response-Header")}}</td>
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

Mit dem Header können Allowlists für eine oder mehrere Direktiven festgelegt werden. Optional kann für jede Direktive ein `report-to`-Parameter angegeben werden, der den Server-Endpunkt für Berichte über Richtlinienverstöße bezeichnet.
Die Einträge für die einzelnen Direktiven werden durch Kommas getrennt.

- `<directive>`
  - : Die Permissions-Policy-Direktive, auf die die `allowlist` angewendet werden soll. Eine Liste der zulässigen Direktivennamen finden Sie unter [Direktiven](#direktiven).
- `<allowlist>`
  - : Eine Allowlist ist eine Liste von Origins. Sie enthält einen oder mehrere der folgenden Werte in Klammern, getrennt durch Leerzeichen:
    - `*` (Platzhalter)
      - : Die Funktion ist in diesem Dokument und in allen verschachtelten Browsing-Kontexten (`<iframe>`-Elementen) unabhängig von deren Origin erlaubt.
    - `()` (leere Allowlist)
      - : Die Funktion ist im obersten und in verschachtelten Browsing-Kontexten deaktiviert. Die Entsprechung für das `allow`-Attribut eines `<iframe>`-Elements ist `'none'`.
    - `self`
      - : Die Funktion ist in diesem Dokument und nur in verschachtelten Browsing-Kontexten (`<iframe>`-Elementen) derselben Origin erlaubt. In Dokumenten anderer Origins innerhalb verschachtelter Browsing-Kontexte ist sie nicht erlaubt. `self` kann als Kurzform für `https://your-site.example.com` betrachtet werden. Die Entsprechung für das `allow`-Attribut eines `<iframe>`-Elements ist `self`.
    - `src`
      - : Die Funktion ist in diesem `<iframe>`-Element erlaubt, sofern das darin geladene Dokument von derselben Origin stammt wie die URL in seinem {{HTMLElement('iframe','src','#Attributes')}}-Attribut. Dieser Wert wird nur im `allow`-Attribut eines `<iframe>`-Elements verwendet und ist der _Standardwert_ für eine Funktion, die ohne expliziten Allowlist-Wert aufgeführt ist. Beispielsweise entspricht `allow="geolocation"` dem Wert `allow="geolocation 'src'"`.
    - `"<origin>"`
      - : Die Funktion ist für bestimmte Origins erlaubt (beispielsweise `"https://a.example.com"`). Origins werden durch Leerzeichen getrennt. Beachten Sie, dass Origins in `allow`-Attributen von `<iframe>`-Elementen nicht in Anführungszeichen stehen.

    Die Werte `*` und `()` können nur einzeln verwendet werden. `self` und `src` können dagegen mit einer oder mehreren Origins kombiniert werden.

    > [!NOTE]
    > Direktiven haben eine Standard-Allowlist, die gilt, wenn die Direktive nicht ausdrücklich in einer Richtlinie aufgeführt ist. Den jeweiligen Standardwert finden Sie auf der [Referenzseite der Direktive](#direktiven).
    > Unter [Standard-Allowlists](/de/docs/Web/HTTP/Guides/Permissions_Policy#default_allowlists) erfahren Sie, wie dies mit dem `Permissions-Policy`-Header und dem `allow`-Attribut von `<iframe>`-Elementen zusammenspielt.

- `report-to=<endpoint>` {{optional_inline}}
  - : Mit dem `report-to`-Parameter kann der Name eines Reporting-Endpunkts angegeben werden, an den bei einem Verstoß gegen die zugehörige Direktive Berichte gesendet werden.
    Der Endpunktname und die zugehörige URL müssen in einem separaten HTTP-Response-Header {{HTTPHeader("Reporting-Endpoints")}} angegeben werden.

    Wird der Parameter weggelassen, werden Berichte an den [Reporting-Endpunkt `default`](/de/docs/Web/HTTP/Reference/Headers/Reporting-Endpoints#default_reporting_endpoint) gesendet, sofern dieser definiert ist.
    Weitere Informationen finden Sie unter [Reporting API](/de/docs/Web/API/Reporting_API).

Sofern unterstützt, können Sie Platzhalter in den Origins einer Permissions Policy verwenden.
Statt mehrere verschiedene Subdomains ausdrücklich in einer Allowlist aufzuführen, können Sie sie so mit einem Platzhalter in einer einzigen Origin angeben.

Statt:

```http
("https://example.com" "https://a.example.com" "https://b.example.com" "https://c.example.com")
```

können Sie Folgendes angeben:

```http
("https://example.com" "https://*.example.com")
```

> [!NOTE]
> `"https://*.example.com"` stimmt nicht mit `"https://example.com"` überein.

## Direktiven

- {{httpheader('Permissions-Policy/accelerometer','accelerometer')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument über das Interface [`Accelerometer`](/de/docs/Web/API/Accelerometer) Informationen zur Beschleunigung des Geräts erfassen darf.

- {{httpheader('Permissions-Policy/ambient-light-sensor','ambient-light-sensor')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument über das Interface [`AmbientLightSensor`](/de/docs/Web/API/AmbientLightSensor) Informationen zur Lichtmenge in der Umgebung des Geräts erfassen darf.

- {{httpheader("Permissions-Policy/aria-notify", "aria-notify")}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument mit der Methode [`ariaNotify()`](/de/docs/Web/API/Document/ariaNotify) Ankündigungen für {{Glossary("screen_reader", "Screenreader")}} auslösen darf.

- {{httpheader('Permissions-Policy/attribution-reporting','attribution-reporting')}} {{deprecated_inline}} {{non-standard_inline}}
  - : Steuert, ob das aktuelle Dokument die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) verwenden darf.

- {{httpheader('Permissions-Policy/autoplay','autoplay')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument über das Interface [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) angeforderte Medien automatisch abspielen darf. Wenn diese Richtlinie die Funktion deaktiviert und keine Benutzerinteraktion stattgefunden hat, wird das von [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play) zurückgegebene {{jsxref("Promise")}} mit einer [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `NotAllowedError` zurückgewiesen. Das autoplay-Attribut von {{HTMLElement("audio")}}- und {{HTMLElement("video")}}-Elementen wird ignoriert.

- {{httpheader('Permissions-Policy/bluetooth','bluetooth')}} {{Experimental_Inline}}
  - : Steuert, ob die Verwendung der [Web Bluetooth API](/de/docs/Web/API/Web_Bluetooth_API) erlaubt ist. Wenn diese Richtlinie die Funktion deaktiviert, geben die Methoden des von [`Navigator.bluetooth`](/de/docs/Web/API/Navigator/bluetooth) zurückgegebenen [`Bluetooth`](/de/docs/Web/API/Bluetooth)-Objekts entweder `false` zurück oder weisen das zurückgegebene {{JSxRef("Promise")}} mit einer [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `SecurityError` zurück.

- {{httpheader('Permissions-Policy/browsing-topics','browsing-topics')}} {{deprecated_inline}} {{non-standard_inline}}
  - : Steuert den Zugriff auf die [Topics API](/de/docs/Web/API/Topics_API). Wenn eine Richtlinie die Verwendung der Topics API ausdrücklich untersagt, schlagen Aufrufe der Methode [`Document.browsingTopics()`](/de/docs/Web/API/Document/browsingTopics) und Anfragen mit einem {{httpheader("Sec-Browsing-Topics")}}-Header mit einer [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `NotAllowedError` fehl.

- {{httpheader('Permissions-Policy/camera', 'camera')}} {{experimental_inline}}
  - : Steuert, ob das aktuelle Dokument Videoeingabegeräte verwenden darf.
    Ist die Berechtigung nicht erteilt, wird das von [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) zurückgegebene {{jsxref("Promise")}} mit einer [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `NotAllowedError` zurückgewiesen.

- {{HTTPHeader('Permissions-Policy/captured-surface-control', 'captured-surface-control')}} {{experimental_inline}}
  - : Steuert, ob das Dokument die [Captured Surface Control API](/de/docs/Web/API/Screen_Capture_API/Captured_Surface_Control) verwenden darf.
    Ist die Berechtigung nicht erteilt, wird das von den Hauptmethoden der API zurückgegebene Promise mit einer [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `NotAllowedError` zurückgewiesen.

- {{HTTPHeader('Permissions-Policy/ch-ua-high-entropy-values', 'ch-ua-high-entropy-values')}} {{experimental_inline}}
  - : Steuert, ob das Dokument mit der Methode [`NavigatorUAData.getHighEntropyValues()`](/de/docs/Web/API/NavigatorUAData/getHighEntropyValues) hochentropische User-Agent-Daten abrufen darf.
    Ist die Berechtigung nicht erteilt, gibt die Methode nur die niedrigentropischen Daten `brands`, `mobile` und `platform` zurück.

- {{httpheader("Permissions-Policy/clipboard-read", "clipboard-read")}} {{non-standard_inline}}
  - : Steuert, ob das aktuelle Dokument ohne weitere Benutzerberechtigung mit den Methoden [`read()`](/de/docs/Web/API/Clipboard/read) und [`readText()`](/de/docs/Web/API/Clipboard/readText) der [Clipboard API](/de/docs/Web/API/Clipboard_API) Daten aus der Systemzwischenablage lesen darf.

- {{httpheader("Permissions-Policy/clipboard-write", "clipboard-write")}} {{non-standard_inline}}
  - : Steuert, ob das aktuelle Dokument ohne weitere Benutzerberechtigung mit den Methoden [`write()`](/de/docs/Web/API/Clipboard/write) und [`writeText()`](/de/docs/Web/API/Clipboard/writeText) der [Clipboard API](/de/docs/Web/API/Clipboard_API) Daten in die Systemzwischenablage schreiben darf.

- {{httpheader('Permissions-Policy/compute-pressure','compute-pressure')}} {{Experimental_Inline}}
  - : Steuert den Zugriff auf die [Compute Pressure API](/de/docs/Web/API/Compute_Pressure_API).

- {{httpheader('Permissions-Policy/cross-origin-isolated','cross-origin-isolated')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument als [cross-origin-isoliert](/de/docs/Web/API/Window/crossOriginIsolated) behandelt werden kann.

- {{HTTPHeader('Permissions-Policy/deferred-fetch', 'deferred-fetch')}} {{experimental_inline}}
  - : Steuert die Zuteilung des [`fetchLater()`-Kontingents](/de/docs/Web/API/Fetch_API/Using_Deferred_Fetch#quotas) der obersten Origin.

- {{HTTPHeader('Permissions-Policy/deferred-fetch-minimal', 'deferred-fetch-minimal')}} {{experimental_inline}}
  - : Steuert die Zuteilung des gemeinsamen [`fetchLater()`-Kontingents](/de/docs/Web/API/Fetch_API/Using_Deferred_Fetch#quotas) für Subframes anderer Origins.

- {{HTTPHeader('Permissions-Policy/display-capture', 'display-capture')}} {{experimental_inline}}
  - : Steuert, ob das aktuelle Dokument mit der Methode [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) Bildschirminhalte erfassen darf. Wenn diese Richtlinie die Funktion deaktiviert, wird das von `getDisplayMedia()` zurückgegebene Promise mit einer [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `NotAllowedError` zurückgewiesen, wenn keine Berechtigung zum Erfassen der Bildschirminhalte vorliegt.

- {{httpheader('Permissions-Policy/encrypted-media', 'encrypted-media')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) (EME) verwenden darf. Wenn diese Richtlinie die Funktion deaktiviert, wird das von [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess) zurückgegebene {{jsxref("Promise")}} mit einer [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `SecurityError` zurückgewiesen.

- {{httpheader('Permissions-Policy/fullscreen','fullscreen')}} {{experimental_inline}}
  - : Steuert, ob das aktuelle Dokument [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) verwenden darf. Wenn diese Richtlinie die Funktion deaktiviert, wird das zurückgegebene {{JSxRef("Promise")}} mit einem {{JSxRef("TypeError")}} zurückgewiesen.

- {{httpheader('Permissions-Policy/gamepad','gamepad')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die [Gamepad API](/de/docs/Web/API/Gamepad_API) verwenden darf.
    Wenn diese Richtlinie die Funktion deaktiviert, lösen Aufrufe von [`Navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads) eine [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `SecurityError` aus. Die Ereignisse [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event) und [`gamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event) werden nicht ausgelöst.

- {{httpheader('Permissions-Policy/geolocation','geolocation')}} {{experimental_inline}}
  - : Steuert, ob das aktuelle Dokument das Interface [`Geolocation`](/de/docs/Web/API/Geolocation) verwenden darf. Wenn diese Richtlinie die Funktion deaktiviert, werden bei Aufrufen von [`getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition) und [`watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition) die Callbacks dieser Funktionen mit dem [`GeolocationPositionError`](/de/docs/Web/API/GeolocationPositionError)-Code `PERMISSION_DENIED` aufgerufen.

- {{httpheader('Permissions-Policy/gyroscope','gyroscope')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument über das Interface [`Gyroscope`](/de/docs/Web/API/Gyroscope) Informationen zur Ausrichtung des Geräts erfassen darf.

- {{httpheader('Permissions-Policy/hid','hid')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die [WebHID API](/de/docs/Web/API/WebHID_API) verwenden darf, um eine Verbindung zu ungewöhnlichen oder speziellen Eingabegeräten wie alternativen Tastaturen oder Gamepads herzustellen.

- {{httpheader('Permissions-Policy/identity-credentials-get','identity-credentials-get')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die [Federated Credential Management API (FedCM)](/de/docs/Web/API/FedCM_API) verwenden darf.

- {{httpheader('Permissions-Policy/idle-detection','idle-detection')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument mit der [Idle Detection API](/de/docs/Web/API/Idle_Detection_API) erkennen darf, ob Benutzer mit ihren Geräten interagieren, etwa um in Chat-Anwendungen den Status „verfügbar“ oder „abwesend“ anzuzeigen.

- {{httpheader("Permissions-Policy/language-detector", "language-detector")}} {{Experimental_Inline}}
  - : Steuert den Zugriff auf die Spracherkennungsfunktion der [Translator and Language Detector APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs).

- {{httpheader("Permissions-Policy/language-model", "language-model")}} {{Experimental_Inline}}
  - : Steuert den Zugriff auf die [Prompt API](/de/docs/Web/API/Prompt_API).

- {{httpheader('Permissions-Policy/local-fonts','local-fonts')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument mit der Methode [`Window.queryLocalFonts()`](/de/docs/Web/API/Window/queryLocalFonts) Daten über lokal installierte Schriftarten des Benutzers erfassen darf (siehe auch die [Local Font Access API](/de/docs/Web/API/Local_Font_Access_API)).

- {{httpheader('Permissions-Policy/local-network','local-network')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument Netzwerkanfragen an lokale Adressen senden darf.

- {{httpheader('Permissions-Policy/local-network-access','local-network-access')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument Netzwerkanfragen an lokale und Loopback-Adressen senden darf. Diese Richtliniendirektive ist ein Alias für die spezifischeren Direktiven `local-network` und `loopback-network`.

- {{httpheader('Permissions-Policy/loopback-network','loopback-network')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument Netzwerkanfragen an Loopback-Adressen senden darf.

- {{httpheader('Permissions-Policy/magnetometer','magnetometer')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument über das Interface [`Magnetometer`](/de/docs/Web/API/Magnetometer) Informationen zur Ausrichtung des Geräts erfassen darf.

- {{httpheader('Permissions-Policy/microphone','microphone')}} {{experimental_inline}}
  - : Steuert, ob das aktuelle Dokument Audioeingabegeräte verwenden darf. Wenn diese Richtlinie die Funktion deaktiviert, wird das von [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) zurückgegebene {{jsxref("Promise")}} mit einer [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `NotAllowedError` zurückgewiesen.

- {{httpheader('Permissions-Policy/midi', 'midi')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die [Web MIDI API](/de/docs/Web/API/Web_MIDI_API) verwenden darf. Wenn diese Richtlinie die Funktion deaktiviert, wird das von [`Navigator.requestMIDIAccess()`](/de/docs/Web/API/Navigator/requestMIDIAccess) zurückgegebene {{jsxref("Promise")}} mit einer [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `SecurityError` zurückgewiesen.

- {{httpheader("Permissions-Policy/on-device-speech-recognition", "on-device-speech-recognition")}} {{Experimental_Inline}}
  - : Steuert den Zugriff auf die Funktion zur [Spracherkennung auf dem Gerät](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#on-device_speech_recognition) der [Web Speech API](/de/docs/Web/API/Web_Speech_API).

- {{httpheader("Permissions-Policy/otp-credentials", "otp-credentials")}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument mit der [WebOTP API](/de/docs/Web/API/WebOTP_API) ein Einmalpasswort (OTP) aus einer speziell formatierten SMS anfordern darf, die vom Server der Anwendung gesendet wurde, beispielsweise über [`navigator.credentials.get({otp: ..., ...})`](/de/docs/Web/API/CredentialsContainer/get).

- {{httpheader('Permissions-Policy/payment', 'payment')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die [Payment Request API](/de/docs/Web/API/Payment_Request_API) verwenden darf. Wenn diese Richtlinie aktiviert ist, löst der Konstruktor [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest) eine [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `SecurityError` aus.

- {{httpheader('Permissions-Policy/picture-in-picture', 'picture-in-picture')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument über die entsprechende API ein Video im Bild-in-Bild-Modus abspielen darf.

- {{httpheader('Permissions-Policy/private-state-token-issuance','private-state-token-issuance')}} {{Experimental_Inline}}
  - : Steuert die Verwendung von `token-request`-Operationen für [Private State Tokens](/de/docs/Web/API/Private_State_Token_API).

- {{httpheader('Permissions-Policy/private-state-token-redemption','private-state-token-redemption')}} {{Experimental_Inline}}
  - : Steuert die Verwendung von `token-redemption`- und `send-redemption-record`-Operationen für [Private State Tokens](/de/docs/Web/API/Private_State_Token_API).

- {{httpheader("Permissions-Policy/publickey-credentials-create", "publickey-credentials-create")}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument mit der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) neue Anmeldedaten mit asymmetrischen Schlüsseln erstellen darf, beispielsweise über [`navigator.credentials.create({publicKey: ..., ...})`](/de/docs/Web/API/CredentialsContainer/create).

- {{httpheader("Permissions-Policy/publickey-credentials-get", "publickey-credentials-get")}} {{experimental_inline}}
  - : Steuert, ob das aktuelle Dokument mit der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) bereits gespeicherte Anmeldedaten mit öffentlichen Schlüsseln abrufen darf, beispielsweise über [`navigator.credentials.get({publicKey: ..., ...})`](/de/docs/Web/API/CredentialsContainer/get).

- {{httpheader('Permissions-Policy/screen-wake-lock', 'screen-wake-lock')}} {{experimental_inline}}
  - : Steuert, ob das aktuelle Dokument mit der [Screen Wake Lock API](/de/docs/Web/API/Screen_Wake_Lock_API) festlegen darf, dass der Bildschirm des Geräts nicht ausgeschaltet oder abgedunkelt werden soll.

- {{httpheader('Permissions-Policy/serial','serial')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die [Web Serial API](/de/docs/Web/API/Web_Serial_API) zur Kommunikation mit seriellen Geräten verwenden darf, die entweder direkt über einen seriellen Anschluss verbunden sind oder über USB beziehungsweise Bluetooth einen seriellen Anschluss emulieren.

- {{httpheader("Permissions-Policy/speaker-selection", "speaker-selection")}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument mit der [Audio Output Devices API](/de/docs/Web/API/Audio_Output_Devices_API) Lautsprecher auflisten und auswählen darf.

- {{httpheader("Permissions-Policy/storage-access", "storage-access")}} {{Experimental_Inline}}
  - : Steuert, ob ein in einem Drittanbieterkontext geladenes Dokument (also ein in ein {{htmlelement("iframe")}} eingebettetes Dokument) mit der [Storage Access API](/de/docs/Web/API/Storage_Access_API) Zugriff auf nicht partitionierte Cookies anfordern darf.

- {{httpheader("Permissions-Policy/translator", "translator")}} {{Experimental_Inline}}
  - : Steuert den Zugriff auf die Übersetzungsfunktion der [Translator and Language Detector APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs).

- {{httpheader("Permissions-Policy/summarizer", "summarizer")}} {{Experimental_Inline}}
  - : Steuert den Zugriff auf die [Summarizer API](/de/docs/Web/API/Summarizer_API).

- {{httpheader("Permissions-Policy/unload", "unload")}} {{Experimental_Inline}} {{non-standard_inline}}
  - : Steuert, ob das aktuelle Dokument Ereignishandler für [`unload`](/de/docs/Web/API/Window/unload_event) ausführen darf.

- {{httpheader('Permissions-Policy/usb', 'usb')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die [WebUSB API](/de/docs/Web/API/WebUSB_API) verwenden darf.

- {{httpheader("Permissions-Policy/web-share", "web-share")}} {{experimental_inline}}
  - : Steuert, ob das aktuelle Dokument [`Navigator.share()`](/de/docs/Web/API/Navigator/share) aus der [Web Share API](/de/docs/Web/API/Web_Share_API) verwenden darf, um Texte, Links, Bilder und andere Inhalte an vom Benutzer ausgewählte Ziele wie mobile Apps weiterzugeben.

- {{httpheader("Permissions-Policy/window-management", "window-management")}} {{experimental_inline}}
  - : Steuert, ob das aktuelle Dokument mit der [Window Management API](/de/docs/Web/API/Window_Management_API) Fenster auf mehreren Bildschirmen verwalten darf.

- {{httpheader("Permissions-Policy/xr-spatial-tracking", "xr-spatial-tracking")}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) zur Interaktion mit einer WebXR-Sitzung verwenden darf.

## Beispiele

### Grundlegende Verwendung

#### Permissions-Policy-Header

Um allen Origins Zugriff auf Geolocation zu gewähren, verwenden Sie Folgendes:

```http
Permissions-Policy: geolocation=*
```

Um den Zugriff nur für bestimmte Origins zu erlauben, verwenden Sie stattdessen:

```http
Permissions-Policy: geolocation=(self "https://a.example.com" "https://b.example.com")
```

Mehrere Funktionen können gleichzeitig gesteuert werden, indem Sie den Header mit einer durch Kommas getrennten Liste von Richtlinien senden oder für jede Richtlinie einen eigenen Header verwenden.

Die folgenden Varianten sind beispielsweise gleichwertig:

```http
Permissions-Policy: picture-in-picture=(), geolocation=(self https://example.com/), camera=*

Permissions-Policy: picture-in-picture=()
Permissions-Policy: geolocation=(self https://example.com/)
Permissions-Policy: camera=*
```

#### iframes

Die Allowlist einer Funktion im `Permissions-Policy`-Header definiert die übergeordnete Menge der Origins, denen der Zugriff auf die Funktion potenziell erlaubt ist.
Das `allow`-Attribut eines `<iframe>`-Elements gewährt den darin genannten Origins Zugriff auf eine Funktion, sofern sie zu dieser übergeordneten Menge gehören.
Aufgrund dieses [Vererbungsverhaltens](/de/docs/Web/HTTP/Guides/Permissions_Policy#inheritance_of_policies_for_embedded_content) empfiehlt es sich, im HTTP-Header den größtmöglichen akzeptablen Zugriff auf eine Funktion festzulegen und anschließend für jedes `<iframe>`-Element die benötigte Teilmenge anzugeben.

Um allen Origins Zugriff auf Geolocation zu gewähren, verwenden Sie Folgendes:

```html
<iframe src="https://example.com" allow="geolocation *"></iframe>
```

Um eine Richtlinie auf die aktuelle Origin und weitere Origins anzuwenden, verwenden Sie Folgendes:

```html
<iframe
  src="https://example.com"
  allow="geolocation 'self' https://a.example.com https://b.example.com"></iframe>
```

Wichtig: Wenn ein `<iframe>`-Element zu einer anderen Origin navigiert, gilt die Richtlinie standardmäßig nicht für die neue Origin. Wenn Sie die Origin, zu der das `<iframe>`-Element navigiert, im `allow`-Attribut aufführen, gilt die auf das ursprüngliche `<iframe>`-Element angewendete Permissions Policy auch für diese Origin.

Sie können mehrere Funktionen gleichzeitig steuern, indem Sie im `allow`-Attribut eine durch Semikolons getrennte Liste von Richtliniendirektiven angeben.

```html
<iframe
  src="https://example.com"
  allow="geolocation 'self' https://a.example.com https://b.example.com; fullscreen 'none'"></iframe>
```

Der Wert `src` verdient besondere Erwähnung. Wie oben erläutert, erlaubt dieser Allowlist-Wert die zugehörige Funktion in diesem `<iframe>`-Element, sofern das darin geladene Dokument von derselben Origin stammt wie die URL in seinem {{HTMLElement('iframe','src','#Attributes')}}-Attribut. Dieser Wert ist der _Standardwert_ für die `allowlist` von Funktionen, die in `allow` aufgeführt sind. Daher sind die folgenden Varianten gleichwertig:

```html
<iframe src="https://example.com" allow="geolocation 'src'"></iframe>
<iframe src="https://example.com" allow="geolocation"></iframe>
```

### Zugriff auf leistungsfähige Funktionen verweigern

SecureCorp Inc. möchte die Microphone-API (beispielsweise [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)) und die [`Geolocation`](/de/docs/Web/API/Geolocation)-API in seiner Anwendung deaktivieren. Dazu kann das Unternehmen den folgenden Response-Header verwenden:

```http
Permissions-Policy: microphone=(), geolocation=()
```

Durch Angabe von `()` als Origin-Liste werden die genannten Funktionen für alle Browsing-Kontexte deaktiviert, einschließlich aller `<iframe>`-Elemente, unabhängig von deren Origin.

### HTTP-Header und `<iframe>`-Richtlinien kombinieren

Angenommen, wir möchten die Verwendung von Geolocation für unsere eigene Origin und für eingebettete Inhalte aus unserem vertrauenswürdigen Werbenetzwerk erlauben. Die seitenweite Permissions Policy könnten wir folgendermaßen festlegen:

```http
Permissions-Policy: geolocation=(self https://trusted-ad-network.com)
```

In unseren Werbe-`<iframe>`-Elementen könnten wir den Zugriff für die Origin `https://trusted-ad-network.com` so festlegen:

```html
<iframe src="https://trusted-ad-network.com" allow="geolocation"></iframe>
```

Wird eine andere Origin in das `<iframe>`-Element geladen, hat sie keinen Zugriff auf Geolocation:

```html
<iframe src="https://rogue-origin-example.com" allow="geolocation"></iframe>
```

### Verstöße melden

Dieses Beispiel zeigt, wie Sie die Meldung von Verstößen gegen `Permissions-Policy` an einen Server-Endpunkt konfigurieren.

Die folgenden Response-Header blockieren Geolocation und legen `"geo_endpoint"` als Namen des Reporting-Endpunkts für diese Funktion fest.
Mit dem HTTP-Response-Header {{HTTPHeader("Reporting-Endpoints")}} wird die URL für diesen Endpunktnamen definiert.

```http
Reporting-Endpoints: geo_endpoint="https://example.com/reports"
Permissions-Policy: geolocation=();report-to=geo_endpoint
```

> [!NOTE]
> Um alle Berichte über Verstöße an denselben Endpunkt zu senden, könnten wir stattdessen den [Reporting-Endpunkt `"default"`](/de/docs/Web/HTTP/Reference/Headers/Reporting-Endpoints#default_reporting_endpoint) definieren:
>
> ```http
> Reporting-Endpoints: default="https://example.com/reports"
> Permissions-Policy: geolocation=()
> ```

Ein Verstoß liegt vor, wenn eine Seite versucht, die blockierte Funktion zu verwenden, beispielsweise so:

```js
navigator.geolocation.getCurrentPosition(
  () => {},
  () => {},
);
```

Die an den Endpunkt gesendete [Berichtsnutzlast](/de/docs/Web/API/Reporting_API#reporting_server_endpoints) könnte folgendermaßen aussehen:

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
> Chrome verwendet bei der serverseitigen Serialisierung von Berichten über Verstöße `policyId` anstelle von [`featureId`](/de/docs/Web/API/PermissionsPolicyViolationReport#featureid) für den Funktionsnamen im `body` eines Serverberichts.
> Der von einem [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) zurückgegebene [`PermissionsPolicyViolationReport`](/de/docs/Web/API/PermissionsPolicyViolationReport) entspricht der Spezifikation.

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
