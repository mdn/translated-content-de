---
title: Sicherheitsänderungen in Firefox 3.5
slug: Mozilla/Firefox/Releases/3.5/Security_changes
l10n:
  sourceCommit: 2591a9b59de88401a2ef0fb7d0b8d0281e3f5376
---

Dieser Artikel behandelt sicherheitsrelevante Änderungen in Firefox 3.5.

## Änderungen an der Chrome-Registrierung

Eine Sicherheitslücke wurde geschlossen, um zu verhindern, dass Remote-Inhalte als Chrome verwendet werden. Dies könnte sich auf jedes Add-on auswirken, das eine Ressource in seiner `chrome.manifest`-Datei eingeschlossen hat, die auf eine Datei im Internet verweist.

Diese Sicherheitslücke wurde behoben, indem ein neues `URI_IS_LOCAL_RESOURCE`-Flag zur `nsIProtocolHandler`-Schnittstelle hinzugefügt wurde, das anzeigt, dass das Protokoll sicher als Chrome registriert werden kann. Jedes Add-on, das seinen eigenen Protokoll-Handler erstellt und versucht, ihn in seiner `chrome.manifest`-Datei zu registrieren, muss dieses Flag verwenden, um korrekt zu funktionieren.

## Privates Surfen

Firefox 3.5 implementiert das private Surfen, einen Modus, in dem Cookies, Verlauf und andere potenziell private Informationen nicht dauerhaft auf dem Computer des Benutzers gespeichert werden. Erweiterungen und andere Add-ons können die Funktion des privaten Surfens unterstützen, indem sie erkennen, wann dieser Modus verwendet wird, um zu verhindern, dass private Informationen gespeichert werden, während der private Surfen-Modus aktiviert ist. Details finden Sie unter [Unterstützung des privaten Surfmodus](https://web.archive.org/web/20210620014429/https://developer.mozilla.org/de/docs/Archive/Mozilla/Supporting_private_browsing_mode).

Plug-ins können feststellen, ob der private Surfen-Modus aktiv ist, indem sie die Funktion [`NPN_GetValue()`](https://web.archive.org/web/20210308202622/https://developer.mozilla.org/de/docs/Archive/Plugins/Reference/NPN_GetValue) verwenden, um den aktuellen Wert der `NPNVprivateModeBool`-Variable zu überprüfen.

## Neue Behandlung von Zertifikatsfehlern

In früheren Versionen von Firefox 3 führten SSL-Zertifikatsfehler zur Anzeige der Standard-Netzwerkfehlerseite `about:neterror` im Browserfenster. Ab Firefox 3.5 gibt es eine neue Fehlerseite, `about:certerror`, die stattdessen angezeigt wird. Die Fehler-URL wird folgendermaßen formatiert:

`about:certerror?e=error&u=url&d=desc`

Einbettende Anwendungen, die benutzerdefinierte Zertifikatsfehlerseiten bereitstellen müssen, können dies jetzt tun, indem sie ihre eigene `about:`-Seiten-Implementierung bereitstellen und die `security.alternate_certificate_error_page`-Einstellung auf den entsprechenden Seitennamen (z.B. `"certerror"`) setzen.

## Siehe auch

- [Firefox 3.5 für Entwickler](/de/docs/Mozilla/Firefox/Releases/3.5)
