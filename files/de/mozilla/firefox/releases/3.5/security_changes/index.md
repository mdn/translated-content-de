---
title: Sicherheitsänderungen in Firefox 3.5
slug: Mozilla/Firefox/Releases/3.5/Security_changes
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Dieser Artikel behandelt sicherheitsrelevante Änderungen in Firefox 3.5.

## Änderungen an der Chrome-Registrierung

Eine Sicherheitslücke wurde geschlossen, um zu verhindern, dass Remote-Inhalte als Chrome verwendet werden können. Dies könnte sich auf Add-ons auswirken, die in ihrer `chrome.manifest`-Datei eine Ressource enthalten, die auf eine Datei im Web verweist.

Das Beheben dieses Fehlers wurde durch die Hinzufügung eines neuen `URI_IS_LOCAL_RESOURCE`-Flags zur `nsIProtocolHandler`-Schnittstelle erreicht, das anzeigt, dass das Protokoll sicher ist, um als Chrome registriert zu werden. Jedes Add-on, das seinen eigenen Protokoll-Handler erstellt und versucht, es in seiner `chrome.manifest`-Datei zu registrieren, muss dieses Flag verwenden, um korrekt zu funktionieren.

## Privates Surfen

Firefox 3.5 implementiert das private Surfen, einen Modus, in dem Cookies, der Verlauf und andere potenziell private Informationen nicht dauerhaft auf dem Computer des Benutzers gespeichert werden. Erweiterungen und andere Add-ons können die Funktion des privaten Surfens unterstützen, indem sie erkennen, wann es in Gebrauch ist, damit sie vermeiden können, private Informationen zu speichern, während der Modus für privates Surfen aktiviert ist. Siehe [Unterstützung des privaten Surfmodus](/en-US/Supporting_private_browsing_mode) für Einzelheiten.

Plug-ins können erkennen, ob der Modus für privates Surfen aktiv ist, indem sie die Funktion [`NPN_GetValue()`](/de/docs/NPN_GetValue) verwenden, um den aktuellen Wert der Variable `NPNVprivateModeBool` zu überprüfen.

## Neue Behandlung von Zertifikatfehlern

In vorherigen Versionen von Firefox 3 führten SSL-Zertifikatfehler zur Darstellung der Standard-Netzwerkfehlerseite `about:neterror` im Browserfenster. Ab Firefox 3.5 gibt es eine neue Fehlerseite, `about:certerror`, die stattdessen angezeigt wird. Die Fehler-URL ist wie folgt formatiert:

`about:certerror?e=error&u=url&d=desc`

Einbettungen, die benutzerdefinierte Zertifikat-Fehlerseiten bereitstellen müssen, können dies jetzt tun, indem sie ihre eigene `about:`-Seitenimplementierung liefern und die Einstellung `security.alternate_certificate_error_page` auf den entsprechenden Seitennamen setzen (z.B. `"certerror"`).

## Siehe auch

- [Firefox 3.5 für Entwickler](/en-US/Firefox%203.5%20for%20developers)
