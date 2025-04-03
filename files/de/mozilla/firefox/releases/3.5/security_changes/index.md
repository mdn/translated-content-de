---
title: Sicherheit-Änderungen in Firefox 3.5
slug: Mozilla/Firefox/Releases/3.5/Security_changes
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{FirefoxSidebar}}
Dieser Artikel behandelt sicherheitsrelevante Änderungen in Firefox 3.5.

## Änderungen in der Chrome-Registrierung

Eine Sicherheitslücke wurde geschlossen, um zu verhindern, dass Remote-Inhalte als Chrome verwendet werden. Dies könnte sich auf jede Erweiterung auswirken, die in ihrer `chrome.manifest`-Datei eine Ressource enthält, die auf eine Datei im Web verweist.

Das Schließen dieses Fehlers wurde durch Hinzufügen eines neuen `URI_IS_LOCAL_RESOURCE`-Flags zur `nsIProtocolHandler`-Schnittstelle erreicht, das anzeigt, dass das Protokoll sicher als Chrome registriert werden kann. Jede Erweiterung, die ihren eigenen Protokoll-Handler erstellt und versucht, ihn in ihrer `chrome.manifest`-Datei zu registrieren, muss dieses Flag verwenden, um korrekt zu funktionieren.

## Privates Surfen

Firefox 3.5 implementiert das private Surfen, einen Modus, in dem Cookies, Verlauf und andere potenziell private Informationen nicht dauerhaft auf dem Computer des Benutzers gespeichert werden. Erweiterungen und andere Add-ons können das private Surfen unterstützen, indem sie erkennen, wann es verwendet wird, damit sie das Speichern privater Informationen vermeiden können, während der private Surfmodus aktiviert ist. Siehe [Unterstützung des Privatmodus](/en-US/Supporting_private_browsing_mode) für Details.

Plugins können erkennen, ob der private Surfmodus aktiv ist, indem sie die Funktion [`NPN_GetValue()`](/de/docs/NPN_GetValue) verwenden, um den aktuellen Wert der Variablen `NPNVprivateModeBool` zu prüfen.

## Neue Behandlung von Zertifikatsfehlern

In früheren Versionen von Firefox 3 führten SSL-Zertifikatsfehler zur Anzeige der standardmäßigen Netzwerkfehlerseite, `about:neterror`, im Browserfenster. Ab Firefox 3.5 gibt es eine neue Fehlerseite, `about:certerror`, die stattdessen angezeigt wird. Die Fehler-URL ist wie folgt formatiert:

`about:certerror?e=error&u=url&d=desc`

Einbettungen, die benutzerdefinierte Zertifikatsfehlerseiten bereitstellen müssen, können dies jetzt tun, indem sie ihre eigene `about:`-Seitenimplementierung liefern und die Einstellung `security.alternate_certificate_error_page` auf den entsprechenden Seitennamen setzen (z.B. `"certerror"`).

## Siehe auch

- [Firefox 3.5 für Entwickler](/en-US/Firefox%203.5%20for%20developers)
