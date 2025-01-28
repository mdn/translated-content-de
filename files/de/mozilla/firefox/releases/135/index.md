---
title: Firefox 135 für Entwickler
slug: Mozilla/Firefox/Releases/135
l10n:
  sourceCommit: 3c5a0fcfbea7ac79e875b1050986d9eea44e3a7c
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 135, die Entwickler betreffen. Firefox 135 ist die aktuelle [Beta-Version von Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#nightly) und wird am [4. Februar 2025](https://whattrainisitnow.com/release/?version=135) veröffentlicht.

## Änderungen für Webentwickler

### Entwickler-Tools

### HTML

#### Entfernungen

### CSS

#### Entfernungen

### JavaScript

- Der [Vorschlag "JSON parse with source"](https://github.com/tc39/proposal-json-parse-with-source) wird jetzt unterstützt. Dieser zielt darauf ab, Funktionen bereitzustellen, um Probleme im Zusammenhang mit dem Verlust von Präzision zu mildern, wenn Werte wie große Fließkommazahlen und Datumswerte zwischen JavaScript-Werten und JSON-Text konvertiert werden ([Firefox-Bug 1934622](https://bugzil.la/1934622)). Insbesondere sind jetzt die folgenden Funktionen verfügbar:
  - Das `JSON.parse()` [`reviver` Parameter `context` Argument](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#the_reviver_parameter): Bietet Zugriff auf den ursprünglichen JSON-Quelltext, der analysiert wurde.
  - [`JSON.isRawJSON()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/isRawJSON): Überprüft, ob ein Wert ein Objekt ist, das von `JSON.rawJSON()` zurückgegeben wird.
  - [`JSON.rawJSON()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/rawJSON): Erstellt ein "rohes JSON"-Objekt, das ein Stück JSON-Text enthält und in ein Objekt eingefügt werden kann, um den angegebenen Wert zu erhalten, wenn dieses Objekt in einen String umgewandelt wird.

#### Entfernungen

### SVG

#### Entfernungen

### HTTP

#### Entfernungen

### Sicherheit

- [Zertifikat-Transparenz](/de/docs/Web/Security/Certificate_Transparency) ist ein Standard, der sicherstellt, dass Zertifikate öffentlich offengelegt werden, bevor Webbrowser ihnen vertrauen. Firefox unterstützt diese Funktion jetzt auf Desktop-Versionen (aber nicht auf Android).
  Dies betrifft nur Server, die Zertifikate verwenden, die von einer Zertifizierungsstelle im Mozilla-Root-CA-Programm ausgestellt wurden.
  ([Firefox-Bug 1938242](https://bugzil.la/1938242)).

#### Entfernungen

### APIs

- Die statische Methode [`PublicKeyCredential.getClientCapabilities()`](/de/docs/Web/API/PublicKeyCredential/getClientCapabilities_static) wird unterstützt. Sie ermöglicht es einer Web-App zu überprüfen, ob ein Browser bestimmte [WebAuthn](/de/docs/Web/API/Web_Authentication_API) Funktionen und [Erweiterungen](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions) aktiviert, ohne auf User-Agent-Sniffing zurückgreifen zu müssen.
  ([Firefox-Bug 1884466](https://bugzil.la/1884466)).

#### DOM

#### Medien, WebRTC und Web Audio

- Die Eigenschaften [`mid`](/de/docs/Web/API/RTCOutboundRtpStreamStats/mid) und [`rid`](/de/docs/Web/API/RTCOutboundRtpStreamStats/rid) des [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats) Interfaces und die [`mid`](/de/docs/Web/API/RTCOutboundRtpStreamStats/mid) Eigenschaft des [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats) Interfaces werden jetzt unterstützt. ([Firefox-Bug 1643001](https://bugzil.la/1643001)).

#### Entfernungen

### WebAssembly

#### Entfernungen

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

#### WebDriver BiDi

#### Marionette

## Änderungen für Add-on-Entwickler

### Entfernungen

### Sonstiges

## Experimentelle Web-Features

Diese Funktionen sind neu in Firefox 135 verfügbar, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie die entsprechende Einstellung auf der `about:config` Seite und setzen Sie sie auf `true`. Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **Priiorisierte Task-Planungs-API**: <code>dom.enable_web_task_scheduling</code>.
  Die [Priiorisierte Task-Planungs-API](/de/docs/Web/API/Prioritized_Task_Scheduling_API) bietet einen standardisierten Weg, um alle Aufgaben einer Anwendung zu priorisieren, unabhängig davon, ob sie im Code eines Websiteentwicklers oder in Drittanbieter-Bibliotheken und Frameworks definiert sind.
  Diese wurde vorübergehend in Nightly-Builds deaktiviert, um [Fehler in freier Wildbahn](https://bugzil.la/1937232) zu vermeiden.
  ([Firefox-Bug 1938242](https://bugzil.la/1938242)).

## Ältere Versionen

{{Firefox_for_developers}}
