---
title: Permissions-Policy header
short-title: Permissions-Policy
slug: Web/HTTP/Reference/Headers/Permissions-Policy
l10n:
  sourceCommit: 87e588faeb456dec535666429793188b2883637d
---

{{SeeCompatTable}}

Der HTTP-{{Glossary("response_header", "Antwort-Header")}} **`Permissions-Policy`** bietet einen Mechanismus, um die Nutzung von Browserfunktionen in einem Dokument oder in {{HTMLElement("iframe")}}-Elementen innerhalb des Dokuments zu erlauben oder zu verweigern.

Verstöße gegen eine Richtlinie können mithilfe der [Reporting API](/de/docs/Web/API/Reporting_API) gemeldet werden.
Berichte können an einen Server gesendet werden, dessen Name im Parameter `report-to` der jeweiligen Direktive angegeben ist. Andernfalls werden sie an den Server-Endpunkt mit dem Namen `"default"` gesendet. Die Zuordnung zwischen Endpunktnamen und URLs wird über den HTTP-Antwort-Header {{HTTPHeader("Reporting-Endpoints")}} festgelegt.
Berichte können auch auf der Seite, für die die Richtlinie durchgesetzt wird, mithilfe eines [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) beobachtet werden.
Das Berichtsformat und weitere Einzelheiten sind unter [`PermissionsPolicyViolationReport`](/de/docs/Web/API/PermissionsPolicyViolationReport) beschrieben.

Weitere Informationen finden Sie im Hauptartikel [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy).

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

Mit dem Header lassen sich Allowlists für eine oder mehrere Direktiven festlegen. Optional kann für jede Direktive ein Parameter `report-to` angegeben werden, der den Server-Endpunkt für Berichte über Richtlinienverstöße bezeichnet.
Die Einträge für die einzelnen Direktiven werden durch Kommas getrennt.

- `<directive>`
  - : Die Permissions-Policy-Direktive, auf die die `allowlist` angewendet wird. Eine Liste der zulässigen Direktivenamen finden Sie unter [Direktiven](#direktiven).
- `<allowlist>`
  - : Eine Allowlist ist eine Liste von Origins. Sie enthält einen oder mehrere der folgenden Werte, die in Klammern stehen und durch Leerzeichen getrennt sind:
    - `*` (Platzhalter)
      - : Die Funktion ist in diesem Dokument und in allen verschachtelten Browsing-Kontexten (`<iframe>`-Elementen) unabhängig von deren Origin erlaubt.
    - `()` (leere Allowlist)
      - : Die Funktion ist in Browsing-Kontexten der obersten Ebene und in verschachtelten Browsing-Kontexten deaktiviert. Die Entsprechung für das `allow`-Attribut eines `<iframe>`-Elements ist `'none'`.
    - `self`
      - : Die Funktion ist in diesem Dokument und ausschließlich in verschachtelten Browsing-Kontexten (`<iframe>`-Elementen) derselben Origin erlaubt. In Dokumenten anderer Origins innerhalb verschachtelter Browsing-Kontexte ist sie nicht erlaubt. `self` kann als Kurzform für `https://your-site.example.com` betrachtet werden. Die Entsprechung für das `allow`-Attribut eines `<iframe>`-Elements ist `self`.
    - `src`
      - : Die Funktion ist in diesem `<iframe>`-Element erlaubt, sofern das darin geladene Dokument dieselbe Origin hat wie die URL in seinem Attribut {{HTMLElement('iframe','src','#Attributes')}}. Dieser Wert wird nur im `allow`-Attribut eines `<iframe>`-Elements verwendet und ist der _Standardwert_ für eine Funktion, für die kein ausdrücklicher Allowlist-Wert angegeben wurde. Beispielsweise ist `allow="geolocation"` gleichbedeutend mit `allow="geolocation 'src'"`.
    - `"<origin>"`
      - : Die Funktion ist für bestimmte Origins erlaubt (beispielsweise `"https://a.example.com"`). Origins werden durch Leerzeichen getrennt. Beachten Sie, dass Origins in `allow`-Attributen von `<iframe>`-Elementen nicht in Anführungszeichen stehen.

    Die Werte `*` und `()` dürfen nur einzeln verwendet werden, während `self` und `src` mit einer oder mehreren Origins kombiniert werden können.

    > [!NOTE]
    > Direktiven haben eine Standard-Allowlist, die gilt, wenn die Direktive nicht ausdrücklich in einer Richtlinie aufgeführt ist. Den jeweiligen Standardwert finden Sie auf der [Referenzseite der Direktive](#direktiven).
    > Unter [Standard-Allowlists](/de/docs/Web/HTTP/Guides/Permissions_Policy#default_allowlists) erfahren Sie, wie dies mit dem `Permissions-Policy`-Header und dem `allow`-Attribut eines `<iframe>`-Elements zusammenwirkt.

- `report-to=<endpoint>` {{optional_inline}}
  - : Mit dem Parameter `report-to` lässt sich der Name eines Reporting-Endpunkts angeben, an den Berichte gesendet werden, wenn gegen die zugehörige Direktive verstoßen wird.
    Der Name des Endpunkts und die zugehörige URL müssen in einem separaten HTTP-Antwort-Header {{HTTPHeader("Reporting-Endpoints")}} angegeben werden.

    Wird der Parameter weggelassen, werden Berichte an den [Reporting-Endpunkt `default`](/de/docs/Web/HTTP/Reference/Headers/Reporting-Endpoints#default_reporting_endpoint) gesendet, sofern einer definiert wurde.
    Weitere Informationen finden Sie unter [Reporting API](/de/docs/Web/API/Reporting_API).

Sofern unterstützt, können Sie Platzhalter in Origins einer Permissions Policy verwenden.
Dadurch müssen Sie nicht mehrere unterschiedliche Subdomains einzeln in einer Allowlist angeben, sondern können sie alle mit einem Platzhalter in einer einzigen Origin erfassen.

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
  - : Steuert, ob das aktuelle Dokument über die Schnittstelle [`Accelerometer`](/de/docs/Web/API/Accelerometer) Informationen zur Beschleunigung des Geräts erfassen darf.

- {{httpheader('Permissions-Policy/ambient-light-sensor','ambient-light-sensor')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument über die Schnittstelle [`AmbientLightSensor`](/de/docs/Web/API/AmbientLightSensor) Informationen zur Lichtmenge in der Umgebung des Geräts erfassen darf.

- {{httpheader("Permissions-Policy/aria-notify", "aria-notify")}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument mit der Methode [`ariaNotify()`](/de/docs/Web/API/Document/ariaNotify) Ankündigungen für {{Glossary("screen_reader", "Screenreader")}} auslösen darf.

- {{httpheader('Permissions-Policy/attribution-reporting','attribution-reporting')}} {{deprecated_inline}} {{non-standard_inline}}
  - : Steuert, ob das aktuelle Dokument die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) verwenden darf.

- {{httpheader('Permissions-Policy/autoplay','autoplay')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument über die Schnittstelle [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) angeforderte Medien automatisch abspielen darf. Wenn diese Richtlinie die Funktion deaktiviert und keine Benutzerinteraktion stattgefunden hat, wird das von [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play) zurückgegebene {{jsxref("Promise")}} mit einer [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `NotAllowedError` zurückgewiesen. Das autoplay-Attribut von {{HTMLElement("audio")}}- und {{HTMLElement("video")}}-Elementen wird ignoriert.

- {{httpheader('Permissions-Policy/bluetooth','bluetooth')}} {{Experimental_Inline}}
  - : Steuert, ob die [Web Bluetooth API](/de/docs/Web/API/Web_Bluetooth_API) verwendet werden darf. Wenn diese Richtlinie die Funktion deaktiviert, geben die Methoden des von [`Navigator.bluetooth`](/de/docs/Web/API/Navigator/bluetooth) zurückgegebenen [`Bluetooth`](/de/docs/Web/API/Bluetooth)-Objekts entweder `false` zurück oder weisen das zurückgegebene {{JSxRef("Promise")}} mit einer [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `SecurityError` zurück.

- {{httpheader('Permissions-Policy/browsing-topics','browsing-topics')}} {{deprecated_inline}} {{non-standard_inline}}
  - : Steuert den Zugriff auf die [Topics API](/de/docs/Web/API/Topics_API). Wenn eine Richtlinie die Verwendung der Topics API ausdrücklich untersagt, schlagen sowohl Aufrufe der Methode [`Document.browsingTopics()`](/de/docs/Web/API/Document/browsingTopics) als auch Anfragen mit einem {{httpheader("Sec-Browsing-Topics")}}-Header mit einer [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `NotAllowedError` fehl.

- {{httpheader('Permissions-Policy/camera', 'camera')}} {{experimental_inline}}
  - : Steuert, ob das aktuelle Dokument Videoeingabegeräte verwenden darf.
    Wenn die Berechtigung nicht erteilt ist, wird das von [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) zurückgegebene {{jsxref("Promise")}} mit einer [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `NotAllowedError` zurückgewiesen.

- {{HTTPHeader('Permissions-Policy/captured-surface-control', 'captured-surface-control')}} {{experimental_inline}}
  - : Steuert, ob das Dokument die [Captured Surface Control API](/de/docs/Web/API/Screen_Capture_API/Captured_Surface_Control) verwenden darf.
    Wenn die Berechtigung nicht erteilt ist, wird das von den Hauptmethoden der API zurückgegebene Promise mit einer [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `NotAllowedError` zurückgewiesen.

- {{HTTPHeader('Permissions-Policy/ch-ua-high-entropy-values', 'ch-ua-high-entropy-values')}} {{experimental_inline}}
  - : Steuert, ob das Dokument mit der Methode [`NavigatorUAData.getHighEntropyValues()`](/de/docs/Web/API/NavigatorUAData/getHighEntropyValues) User-Agent-Daten mit hoher Entropie abrufen darf.
    Wenn die Berechtigung nicht erteilt ist, gibt die Methode nur die Daten mit niedriger Entropie `brands`, `mobile` und `platform` zurück.

- {{httpheader('Permissions-Policy/compute-pressure','compute-pressure')}} {{Experimental_Inline}}
  - : Steuert den Zugriff auf die [Compute Pressure API](/de/docs/Web/API/Compute_Pressure_API).

- {{httpheader('Permissions-Policy/cross-origin-isolated','cross-origin-isolated')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument als [cross-origin-isoliert](/de/docs/Web/API/Window/crossOriginIsolated) behandelt werden kann.

- {{HTTPHeader('Permissions-Policy/deferred-fetch', 'deferred-fetch')}} {{experimental_inline}}
  - : Steuert die Zuweisung des [`fetchLater()`-Kontingents](/de/docs/Web/API/Fetch_API/Using_Deferred_Fetch#quotas) der Origin auf oberster Ebene.

- {{HTTPHeader('Permissions-Policy/deferred-fetch-minimal', 'deferred-fetch-minimal')}} {{experimental_inline}}
  - : Steuert die Zuweisung des gemeinsam genutzten [`fetchLater()`-Kontingents](/de/docs/Web/API/Fetch_API/Using_Deferred_Fetch#quotas) für Subframes anderer Origins.

- {{HTTPHeader('Permissions-Policy/display-capture', 'display-capture')}} {{experimental_inline}}
  - : Steuert, ob das aktuelle Dokument mit der Methode [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) Bildschirminhalte erfassen darf. Wenn diese Richtlinie die Funktion deaktiviert, wird das von `getDisplayMedia()` zurückgegebene Promise mit einer [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `NotAllowedError` zurückgewiesen, sofern keine Berechtigung zum Erfassen der Bildschirminhalte erteilt wird.

- {{httpheader('Permissions-Policy/encrypted-media', 'encrypted-media')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) (EME) verwenden darf. Wenn diese Richtlinie die Funktion deaktiviert, wird das von [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess) zurückgegebene {{jsxref("Promise")}} mit einer [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `SecurityError` zurückgewiesen.

- {{httpheader('Permissions-Policy/fullscreen','fullscreen')}} {{experimental_inline}}
  - : Steuert, ob das aktuelle Dokument [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) verwenden darf. Wenn diese Richtlinie die Funktion deaktiviert, wird das zurückgegebene {{JSxRef("Promise")}} mit einem {{JSxRef("TypeError")}} zurückgewiesen.

- {{httpheader('Permissions-Policy/gamepad','gamepad')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die [Gamepad API](/de/docs/Web/API/Gamepad_API) verwenden darf.
    Wenn diese Richtlinie die Funktion deaktiviert, lösen Aufrufe von [`Navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads) eine [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `SecurityError` aus. Die Ereignisse [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event) und [`gamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event) werden dann nicht ausgelöst.

- {{httpheader('Permissions-Policy/geolocation','geolocation')}} {{experimental_inline}}
  - : Steuert, ob das aktuelle Dokument die Schnittstelle [`Geolocation`](/de/docs/Web/API/Geolocation) verwenden darf. Wenn diese Richtlinie die Funktion deaktiviert, bewirken Aufrufe von [`getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition) und [`watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition), dass die Callbacks dieser Funktionen mit dem [`GeolocationPositionError`](/de/docs/Web/API/GeolocationPositionError)-Code `PERMISSION_DENIED` aufgerufen werden.

- {{httpheader('Permissions-Policy/gyroscope','gyroscope')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument über die Schnittstelle [`Gyroscope`](/de/docs/Web/API/Gyroscope) Informationen zur Ausrichtung des Geräts erfassen darf.

- {{httpheader('Permissions-Policy/hid','hid')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die [WebHID API](/de/docs/Web/API/WebHID_API) verwenden darf, um eine Verbindung zu ungewöhnlichen Human-Interface-Geräten wie alternativen Tastaturen oder Gamepads herzustellen.

- {{httpheader('Permissions-Policy/identity-credentials-get','identity-credentials-get')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die [Federated Credential Management API (FedCM)](/de/docs/Web/API/FedCM_API) verwenden darf.

- {{httpheader('Permissions-Policy/idle-detection','idle-detection')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument mit der [Idle Detection API](/de/docs/Web/API/Idle_Detection_API) erkennen darf, wann Benutzer mit ihren Geräten interagieren, beispielsweise um in Chat-Anwendungen den Status „verfügbar“ oder „abwesend“ anzuzeigen.

- {{httpheader("Permissions-Policy/language-detector", "language-detector")}} {{Experimental_Inline}}
  - : Steuert den Zugriff auf die Spracherkennungsfunktionen der [Translator and Language Detector APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs).

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
  - : Steuert, ob das aktuelle Dokument über die Schnittstelle [`Magnetometer`](/de/docs/Web/API/Magnetometer) Informationen zur Ausrichtung des Geräts erfassen darf.

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
  - : Steuert, ob das aktuelle Dokument über die entsprechende API ein Video im Bild-in-Bild-Modus wiedergeben darf.

- {{httpheader('Permissions-Policy/private-state-token-issuance','private-state-token-issuance')}} {{Experimental_Inline}}
  - : Steuert die Verwendung von `token-request`-Operationen für [Private State Tokens](/de/docs/Web/API/Private_State_Token_API).

- {{httpheader('Permissions-Policy/private-state-token-redemption','private-state-token-redemption')}} {{Experimental_Inline}}
  - : Steuert die Verwendung von `token-redemption`- und `send-redemption-record`-Operationen für [Private State Tokens](/de/docs/Web/API/Private_State_Token_API).

- {{httpheader("Permissions-Policy/publickey-credentials-create", "publickey-credentials-create")}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument mit der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) neue Anmeldedaten mit asymmetrischen Schlüsseln erstellen darf, beispielsweise über [`navigator.credentials.create({publicKey: ..., ...})`](/de/docs/Web/API/CredentialsContainer/create).

- {{httpheader("Permissions-Policy/publickey-credentials-get", "publickey-credentials-get")}} {{experimental_inline}}
  - : Steuert, ob das aktuelle Dokument mit der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) bereits gespeicherte Anmeldedaten mit öffentlichen Schlüsseln abrufen darf, beispielsweise über [`navigator.credentials.get({publicKey: ..., ...})`](/de/docs/Web/API/CredentialsContainer/get).

- {{httpheader('Permissions-Policy/screen-wake-lock', 'screen-wake-lock')}} {{experimental_inline}}
  - : Steuert, ob das aktuelle Dokument mit der [Screen Wake Lock API](/de/docs/Web/API/Screen_Wake_Lock_API) festlegen darf, dass das Gerät den Bildschirm nicht ausschaltet oder abdunkelt.

- {{httpheader('Permissions-Policy/serial','serial')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument über die [Web Serial API](/de/docs/Web/API/Web_Serial_API) mit seriellen Geräten kommunizieren darf. Dazu zählen Geräte, die direkt über einen seriellen Anschluss verbunden sind, sowie USB- oder Bluetooth-Geräte, die einen seriellen Anschluss emulieren.

- {{httpheader("Permissions-Policy/speaker-selection", "speaker-selection")}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument mit der [Audio Output Devices API](/de/docs/Web/API/Audio_Output_Devices_API) Lautsprecher auflisten und auswählen darf.

- {{httpheader("Permissions-Policy/storage-access", "storage-access")}} {{Experimental_Inline}}
  - : Steuert, ob ein Dokument, das in einem Drittanbieter-Kontext geladen wurde (also in ein {{htmlelement("iframe")}} eingebettet ist), mit der [Storage Access API](/de/docs/Web/API/Storage_Access_API) Zugriff auf nicht partitionierte Cookies anfordern darf.

- {{httpheader("Permissions-Policy/translator", "translator")}} {{Experimental_Inline}}
  - : Steuert den Zugriff auf die Übersetzungsfunktionen der [Translator and Language Detector APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs).

- {{httpheader("Permissions-Policy/summarizer", "summarizer")}} {{Experimental_Inline}}
  - : Steuert den Zugriff auf die [Summarizer API](/de/docs/Web/API/Summarizer_API).

- {{httpheader("Permissions-Policy/unload", "unload")}} {{Experimental_Inline}} {{non-standard_inline}}
  - : Steuert, ob das aktuelle Dokument Ereignis-Handler für [`unload`](/de/docs/Web/API/Window/unload_event) ausführen darf.

- {{httpheader('Permissions-Policy/usb', 'usb')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die [WebUSB API](/de/docs/Web/API/WebUSB_API) verwenden darf.

- {{httpheader("Permissions-Policy/web-share", "web-share")}} {{experimental_inline}}
  - : Steuert, ob das aktuelle Dokument [`Navigator.share()`](/de/docs/Web/API/Navigator/share) aus der [Web Share API](/de/docs/Web/API/Web_Share_API) verwenden darf, um Texte, Links, Bilder und andere Inhalte an vom Benutzer ausgewählte Ziele wie mobile Apps weiterzugeben.

- {{httpheader("Permissions-Policy/window-management", "window-management")}} {{experimental_inline}}
  - : Steuert, ob das aktuelle Dokument mit der [Window Management API](/de/docs/Web/API/Window_Management_API) Fenster auf mehreren Bildschirmen verwalten darf.

- {{httpheader("Permissions-Policy/xr-spatial-tracking", "xr-spatial-tracking")}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument mit der [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) mit einer WebXR-Sitzung interagieren darf.

## Beispiele

### Grundlegende Verwendung

#### Permissions-Policy-Header

Um allen Origins Zugriff auf Geolocation zu gewähren, verwenden Sie Folgendes:

```http
Permissions-Policy: geolocation=*
```

Um den Zugriff nur für eine Auswahl von Origins zu erlauben, verwenden Sie Folgendes:

```http
Permissions-Policy: geolocation=(self "https://a.example.com" "https://b.example.com")
```

Sie können mehrere Funktionen gleichzeitig steuern, indem Sie einen Header mit einer durch Kommas getrennten Liste von Richtlinien senden oder für jede Richtlinie einen separaten Header verwenden.

Die folgenden Varianten sind beispielsweise gleichwertig:

```http
Permissions-Policy: picture-in-picture=(), geolocation=(self https://example.com/), camera=*

Permissions-Policy: picture-in-picture=()
Permissions-Policy: geolocation=(self https://example.com/)
Permissions-Policy: camera=*
```

#### iframes

Die Allowlist im `Permissions-Policy`-Header legt für eine Funktion die Obermenge der Origins fest, denen potenziell Zugriff auf diese Funktion gewährt werden kann.
Das `allow`-Attribut eines `<iframe>`-Elements gewährt den darin genannten Origins Zugriff auf eine Funktion, sofern sie zu dieser Obermenge gehören.
Aufgrund dieses [Vererbungsverhaltens](/de/docs/Web/HTTP/Guides/Permissions_Policy#inheritance_of_policies_for_embedded_content) empfiehlt es sich, im HTTP-Header den größtmöglichen akzeptablen Zugriff auf eine Funktion festzulegen und dann in jedem `<iframe>`-Element die benötigte Teilmenge anzugeben.

Um allen Origins Zugriff auf Geolocation zu gewähren, verwenden Sie Folgendes:

```html
<iframe src="https://example.com" allow="geolocation *"></iframe>
```

Um eine Richtlinie auf die aktuelle und weitere Origins anzuwenden, verwenden Sie Folgendes:

```html
<iframe
  src="https://example.com"
  allow="geolocation 'self' https://a.example.com https://b.example.com"></iframe>
```

Wichtig: Wenn ein `<iframe>`-Element zu einer anderen Origin navigiert, wird die Richtlinie standardmäßig nicht auf diese Origin angewendet. Wenn Sie die Origin, zu der das `<iframe>`-Element navigiert, im `allow`-Attribut aufführen, wird die auf das ursprüngliche `<iframe>`-Element angewendete Permissions Policy auch auf die neue Origin angewendet.

Sie können mehrere Funktionen gleichzeitig steuern, indem Sie im `allow`-Attribut eine durch Semikolons getrennte Liste von Richtliniendirektiven angeben.

```html
<iframe
  src="https://example.com"
  allow="geolocation 'self' https://a.example.com https://b.example.com; fullscreen 'none'"></iframe>
```

Der Wert `src` verdient besondere Erwähnung. Wie oben beschrieben, ist die zugehörige Funktion bei Verwendung dieses Allowlist-Werts in einem `<iframe>`-Element erlaubt, sofern das darin geladene Dokument dieselbe Origin hat wie die URL in seinem Attribut {{HTMLElement('iframe','src','#Attributes')}}. Dieser Wert ist der _Standardwert_ der `allowlist` für Funktionen, die im `allow`-Attribut aufgeführt sind. Daher sind die folgenden Varianten gleichwertig:

```html
<iframe src="https://example.com" allow="geolocation 'src'"></iframe>
<iframe src="https://example.com" allow="geolocation"></iframe>
```

### Zugriff auf leistungsfähige Funktionen verweigern

SecureCorp Inc. möchte in seiner Anwendung die APIs für Mikrofonzugriff (beispielsweise [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)) und [`Geolocation`](/de/docs/Web/API/Geolocation) deaktivieren. Dazu kann das Unternehmen den folgenden Antwort-Header verwenden:

```http
Permissions-Policy: microphone=(), geolocation=()
```

Durch die Angabe von `()` als Origin-Liste werden die genannten Funktionen für alle Browsing-Kontexte (einschließlich aller `<iframe>`-Elemente) unabhängig von deren Origin deaktiviert.

### HTTP-Header und `<iframe>`-Richtlinien kombinieren

Angenommen, wir möchten die Verwendung von Geolocation für unsere eigene Origin und für eingebettete Inhalte unseres vertrauenswürdigen Werbenetzwerks ermöglichen. Die seitenweite Permissions Policy könnten wir so festlegen:

```http
Permissions-Policy: geolocation=(self https://trusted-ad-network.com)
```

In unseren Werbe-`<iframe>`-Elementen könnten wir den Zugriff für die Origin `https://trusted-ad-network.com` folgendermaßen festlegen:

```html
<iframe src="https://trusted-ad-network.com" allow="geolocation"></iframe>
```

Wenn stattdessen eine andere Origin in das `<iframe>`-Element geladen wird, hat sie keinen Zugriff auf Geolocation:

```html
<iframe src="https://rogue-origin-example.com" allow="geolocation"></iframe>
```

### Verstöße melden

Dieses Beispiel zeigt, wie Sie die Meldung von Verstößen gegen `Permissions-Policy` an einen Server-Endpunkt konfigurieren.

Die folgenden Antwort-Header blockieren Geolocation und legen „geo_endpoint“ als Namen des Reporting-Endpunkts für diese Funktion fest.
Mit dem HTTP-Antwort-Header {{HTTPHeader("Reporting-Endpoints")}} wird die URL für diesen Endpunktnamen definiert.

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

Ein Verstoß tritt auf, wenn eine Seite versucht, die blockierte Funktion zu verwenden, beispielsweise so:

```js
navigator.geolocation.getCurrentPosition(
  () => {},
  () => {},
);
```

Die an den Endpunkt gesendeten [Berichtsdaten](/de/docs/Web/API/Reporting_API#reporting_server_endpoints) könnten folgendermaßen aussehen:

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
> Bei der serverseitigen Serialisierung von Berichten über Verstöße verwendet Chrome `policyId` statt [`featureId`](/de/docs/Web/API/PermissionsPolicyViolationReport#featureid) für den Funktionsnamen im `body` eines Serverberichts.
> Das von einem [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) zurückgegebene [`PermissionsPolicyViolationReport`](/de/docs/Web/API/PermissionsPolicyViolationReport) entspricht der Spezifikation.

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
