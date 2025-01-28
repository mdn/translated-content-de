---
title: Firefox 135 für Entwickler
slug: Mozilla/Firefox/Releases/135
l10n:
  sourceCommit: 5b755904cd31e7329ee32ace99486a2fea0fe6a1
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 135, die Entwickler betreffen. Firefox 135 ist die aktuelle [Beta-Version von Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#nightly) und wird am [4. Februar 2025](https://whattrainisitnow.com/release/?version=135) veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

### HTML

#### Entfernungen

### CSS

#### Entfernungen

### JavaScript

#### Entfernungen

### SVG

#### Entfernungen

### HTTP

#### Entfernungen

### Sicherheit

- [Certificate Transparency](/de/docs/Web/Security/Certificate_Transparency) ist ein Standard, der sicherstellt, dass Zertifikate öffentlich bekannt gegeben werden, bevor Webbrowser ihnen vertrauen. Firefox unterstützt dieses Feature jetzt in den Desktop-Versionen (aber nicht auf Android).
  Dies betrifft nur Server, die Zertifikate verwenden, die von einer Zertifizierungsstelle im Mozilla Stamm-CA-Programm ausgestellt wurden.
  ([Firefox Bug 1938242](https://bugzil.la/1938242)).

#### Entfernungen

### APIs

- Die statische Methode [`PublicKeyCredential.getClientCapabilities()`](/de/docs/Web/API/PublicKeyCredential/getClientCapabilities_static) wird unterstützt, sodass eine Webanwendung überprüfen kann, ob ein Browser bestimmte [WebAuthn](/de/docs/Web/API/Web_Authentication_API) Fähigkeiten und [Erweiterungen](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions) ermöglicht, ohne auf User-Agent-Sniffing zurückgreifen zu müssen.
  ([Firefox Bug 1884466](https://bugzil.la/1884466)).

#### DOM

#### Medien, WebRTC und Web Audio

#### Entfernungen

### WebAssembly

#### Entfernungen

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

#### WebDriver BiDi

#### Marionette

## Änderungen für Add-on-Entwickler

### Entfernungen

### Sonstige

## Experimentelle Web-Features

Diese Funktionen sind neu in Firefox 135 integriert, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie nach der entsprechenden Einstellung auf der `about:config` Seite und setzen Sie diese auf `true`. Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Priorisierte Aufgabenplanung API**: <code>dom.enable_web_task_scheduling</code>.
  Die [Priorisierte Aufgabenplanung API](/de/docs/Web/API/Prioritized_Task_Scheduling_API) bietet eine standardisierte Möglichkeit, alle Aufgaben einer Anwendung zu priorisieren, unabhängig davon, ob sie im Code eines Webentwicklers oder in Drittanbieterbibliotheken und -frameworks definiert sind.
  Dies wurde vorübergehend in Nightly-Builds deaktiviert, um [Probleme in freier Wildbahn](https://bugzil.la/1937232) zu vermeiden.
  ([Firefox Bug 1938242](https://bugzil.la/1938242)).

## Ältere Versionen

{{Firefox_for_developers}}
