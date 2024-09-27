---
title: Sicherheitsänderungen in Firefox 3.5
slug: Mozilla/Firefox/Releases/3.5/Security_changes
l10n:
  sourceCommit: 7f74644d98484c67817c1dd556a6e394f5a26a6f
---

{{FirefoxSidebar}}
Dieser Artikel behandelt sicherheitsrelevante Änderungen in Firefox 3.5.

## Änderungen bei der Chrome-Registrierung

Eine Sicherheitslücke wurde geschlossen, um zu verhindern, dass Remote-Inhalte als Chrome verwendet werden. Dies könnte sich auf jedes Add-on auswirken, das in seiner `chrome.manifest`-Datei eine Ressource enthielt, die auf eine Datei im Web verweist.

Die Behebung dieses Fehlers wurde durch Hinzufügen eines neuen `URI_IS_LOCAL_RESOURCE`-Flags zur `nsIProtocolHandler`-Schnittstelle erreicht, das anzeigt, dass das Protokoll sicher ist, um als Chrome registriert zu werden. Jedes Add-on, das seinen eigenen Protokoll-Handler erstellt und versucht, diesen in seiner `chrome.manifest`-Datei zu registrieren, muss dieses Flag verwenden, um korrekt zu funktionieren.

## Privates Surfen

Firefox 3.5 implementiert das private Surfen, einen Modus, in dem Cookies, Verlauf und andere potenziell private Informationen nicht dauerhaft auf dem Computer des Benutzers gespeichert werden. Erweiterungen und andere Add-ons können die Funktion des privaten Surfens unterstützen, indem sie erkennen, wann es verwendet wird, um zu vermeiden, dass private Informationen gespeichert werden, während der Modus für privates Surfen aktiviert ist. Siehe [Unterstützung des Modus für privates Surfen](/en-US/Supporting_private_browsing_mode) für Details.

Plug-ins können feststellen, ob der Modus für privates Surfen aktiv ist, indem sie die [`NPN_GetValue()`](/de/docs/NPN_GetValue)-Funktion verwenden, um den aktuellen Wert der `NPNVprivateModeBool`-Variablen zu überprüfen.

## Neue Zertifikatsfehlerbehandlung

In früheren Versionen von Firefox 3 führten SSL-Zertifikatsfehler zur Anzeige der Standardnetzwerkfehlerseite `about:neterror` im Browserfenster. Ab Firefox 3.5 gibt es eine neue Fehlerseite, `about:certerror`, die stattdessen angezeigt wird. Die Fehler-URL ist wie folgt formatiert:

`about:certerror?e=error&u=url&d=desc`

Einbettungen, die benutzerdefinierte Zertifikatsfehlerseiten bereitstellen müssen, können dies nun tun, indem sie ihre eigene `about:`-Seitenimplementierung bereitstellen und die Einstellung `security.alternate_certificate_error_page` auf den entsprechenden Seitennamen setzen (z.B. `"certerror"`).

## Siehe auch

- [Firefox 3.5 für Entwickler](/en-US/Firefox%203.5%20for%20developers)
