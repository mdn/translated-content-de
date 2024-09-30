---
title: Sicherheitsänderungen in Firefox 3.5
slug: Mozilla/Firefox/Releases/3.5/Security_changes
l10n:
  sourceCommit: 7f74644d98484c67817c1dd556a6e394f5a26a6f
---

{{FirefoxSidebar}}
Dieser Artikel behandelt sicherheitsrelevante Änderungen in Firefox 3.5.

## Änderungen bei der Chrome-Registrierung

Eine Sicherheitslücke wurde geschlossen, um zu verhindern, dass Remote-Inhalte als Chrome verwendet werden können. Dies könnte sich auf jedes Add-on auswirken, das eine Ressource in seiner `chrome.manifest`-Datei enthält, die auf eine Datei im Web verweist.

Die Behebung dieses Fehlers wurde durch Hinzufügen eines neuen `URI_IS_LOCAL_RESOURCE`-Flags zur `nsIProtocolHandler`-Schnittstelle erreicht, das angibt, dass das Protokoll sicher als Chrome zu registrieren ist. Jedes Add-on, das seinen eigenen Protokoll-Handler erstellt und versucht, ihn in seiner `chrome.manifest`-Datei zu registrieren, muss dieses Flag verwenden, um korrekt zu funktionieren.

## Privates Surfen

Firefox 3.5 implementiert privates Surfen, einen Modus, in dem Cookies, Verlauf und andere potenziell private Informationen nicht dauerhaft auf dem Computer des Benutzers gespeichert werden. Erweiterungen und andere Add-ons können die Funktion des privaten Surfens unterstützen, indem sie erkennen, wann diese aktiviert ist, sodass sie das Speichern privater Informationen vermeiden können, während der Modus für privates Surfen aktiviert ist. Siehe [Unterstützung des privaten Surfmodus](/en-US/Supporting_private_browsing_mode) für weitere Details.

Plug-ins können feststellen, ob der Modus für privates Surfen aktiviert ist, indem sie die Funktion [`NPN_GetValue()`](/de/docs/NPN_GetValue) verwenden, um den aktuellen Wert der `NPNVprivateModeBool`-Variable zu überprüfen.

## Neue Zertifikatfehlermeldung

In früheren Versionen von Firefox 3 führten SSL-Zertifikatfehler zur Anzeige der standardmäßigen Netzwerkfehlerseite `about:neterror` im Browserfenster. Ab Firefox 3.5 wird stattdessen eine neue Fehlerseite `about:certerror` angezeigt. Die Fehler-URL ist folgendermaßen formatiert:

`about:certerror?e=error&u=url&d=desc`

Einbettungen, die benutzerdefinierte Zertifikatfehlerseiten bereitstellen müssen, können dies jetzt tun, indem sie ihre eigene `about:`-Seitenimplementierung bereitstellen und die Präferenz `security.alternate_certificate_error_page` auf den entsprechenden Seitennamen setzen (z. B. `"certerror"`).

## Siehe auch

- [Firefox 3.5 für Entwickler](/en-US/Firefox%203.5%20for%20developers)
