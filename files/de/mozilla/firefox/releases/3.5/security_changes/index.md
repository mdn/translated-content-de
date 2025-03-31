---
title: Sicherheitsänderungen in Firefox 3.5
slug: Mozilla/Firefox/Releases/3.5/Security_changes
l10n:
  sourceCommit: 5ae01a458eced9772d628f91d035ada423cd073c
---

{{FirefoxSidebar}}
Dieser Artikel behandelt sicherheitsbezogene Änderungen in Firefox 3.5.

## Änderungen an der Chrome-Registrierung

Eine Sicherheitslücke wurde geschlossen, um zu verhindern, dass Remote-Inhalte als Chrome verwendet werden können. Dies könnte sich auf jedes Add-on auswirken, das eine Ressource in seiner `chrome.manifest`-Datei enthält, die eine Datei im Web referenziert.

Die Behebung dieses Fehlers wurde durch das Hinzufügen eines neuen `URI_IS_LOCAL_RESOURCE`-Flags zur `nsIProtocolHandler`-Schnittstelle erreicht, das anzeigt, dass das Protokoll sicher ist, um als Chrome registriert zu werden. Jedes Add-on, das seinen eigenen Protokoll-Handler erstellt und versucht, ihn in seiner `chrome.manifest`-Datei zu registrieren, muss dieses Flag verwenden, um korrekt zu funktionieren.

## Privates Surfen

Firefox 3.5 implementiert das private Surfen, einen Modus, in dem Cookies, Verlauf und andere potenziell private Informationen nicht dauerhaft auf dem Computer des Benutzers gespeichert werden. Erweiterungen und andere Add-ons können den privaten Surfmodus unterstützen, indem sie erkennen, wann er verwendet wird, damit sie beim Aktivieren des privaten Modus keine privaten Informationen speichern. Siehe [Unterstützung des privaten Surfmodus](/en-US/Supporting_private_browsing_mode) für Details.

Plug-ins können erkennen, ob der private Surfmodus aktiv ist, indem sie die [`NPN_GetValue()`](/de/docs/NPN_GetValue)-Funktion verwenden, um den aktuellen Wert der `NPNVprivateModeBool`-Variablen zu überprüfen.

## Neue Handhabung von Zertifikatsfehlern

In früheren Versionen von Firefox 3 führten SSL-Zertifikatsfehler zur Darstellung der Standard-Netzwerkfehlerseite, `about:neterror`, im Browserfenster. Ab Firefox 3.5 gibt es eine neue Fehlerseite, `about:certerror`, die stattdessen angezeigt wird. Die Fehler-URL ist folgendermaßen formatiert:

`about:certerror?e=error&u=url&d=desc`

Einbinder, die benutzerdefinierte Zertifikatsfehlerseiten bereitstellen müssen, können dies nun tun, indem sie ihre eigene `about:`-Seitenimplementierung liefern und die `security.alternate_certificate_error_page`-Präferenz auf den entsprechenden Seitennamen (z.B. `"certerror"`) setzen.

## Siehe auch

- [Firefox 3.5 für Entwickler](/en-US/Firefox%203.5%20for%20developers)
