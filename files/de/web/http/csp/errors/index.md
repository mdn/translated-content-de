---
title: CSP-Fehler und Warnungen (Content Security Policy)
slug: Web/HTTP/CSP/Errors
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

Wenn Sie eine der folgenden Meldungen in der Konsole der Entwicklerwerkzeuge des Browsers sehen, weist dies darauf hin, dass ein Problem im Zusammenhang mit der [CSP](/de/docs/Web/HTTP/CSP) aufgetreten ist.

- [Die Einstellungen der Seite haben das Laden einer Ressource blockiert: %1$S](/de/docs/Web/HTTP/CSP/Errors/CSPViolation)
- Die Einstellungen der Seite haben das Laden einer Ressource bei %2$S ("%1$S") blockiert.
- Ein Verstoß gegen eine CSP-Bericht-nur-Richtlinie ("%1$S") ist aufgetreten. Das Verhalten wurde zugelassen, und ein CSP-Bericht wurde gesendet.
- Die Einstellungen der Seite haben das Laden einer Ressource bei %2$S ("%1$S") beobachtet. Ein CSP-Bericht wird gesendet.
- Versuch, Bericht an ungültige URI zu senden: "%1$S"
- Bericht-URI konnte nicht geparst werden: %1$S
- Unbekannte Direktive '%1$S' konnte nicht verarbeitet werden
- Unbekannte Option %1$S wird ignoriert
- Doppelte Quelle %1$S wird ignoriert
- Quelle '%1$S' wird ignoriert (Nicht unterstützt, wenn über Meta-Element geliefert).
- Ignorieren von "%1$S" innerhalb von script-src oder style-src: nonce-source oder hash-source angegeben
- Ignorieren von "%1$S" innerhalb von script-src: 'strict-dynamic' angegeben
- Quelle "%1$S" wird ignoriert (Nur innerhalb von script-src unterstützt).
- Schlüsselwort 'strict-dynamic' innerhalb von "%1$S" ohne gültige Nonce oder Hash könnte das Laden aller Skripte blockieren
- Die Bericht-URI (%1$S) sollte eine HTTP- oder HTTPS-URI sein.
- Diese Seite (%1$S) hat eine Bericht-nur-Richtlinie ohne Bericht-URI. CSP blockiert nicht und kann Verstöße gegen diese Richtlinie nicht melden.
- Unbekannte Quelle %1$S konnte nicht geparst werden
- Ein Versuch, Inline-Skripte auszuführen, wurde blockiert
- Ein Versuch, Inline-Stylesheets anzuwenden, wurde blockiert
- Ein Versuch, JavaScript aus einem String aufzurufen (durch Aufrufen einer Funktion wie eval), wurde blockiert
- Unsichere Anfrage '%1$S' wird auf '%2$S' aktualisiert
- Ignoriere Quellen für Direktive '%1$S'
- Deuten Sie %1$S als Hostnamen und nicht als Schlüsselwort. Wenn Sie dies als Schlüsselwort wollten, verwenden Sie '%2$S' (in einfache Anführungszeichen eingeschlossen).
- Unterstützung für Direktive '%1$S' entfällt. Direktive und Werte werden ignoriert.
- Blockiert unsichere Anfrage '%1$S'.(/de/docs/Web/HTTP/CSP/Errors/blockAllMixedContent)
- Ignorieren von '%1$S', da es keine Parameter enthält.
- Ignorieren der Sandbox-Direktive, wenn sie in einer Bericht-nur-Richtlinie '%1$S' geliefert wird
- Referrer-Direktive '%1$S' wurde veraltet. Bitte verwenden Sie stattdessen den Referrer-Policy-Header.
- Ignorieren von '%1$S' aufgrund der '%2$S'-Direktive.
- Ungültige Quelle %1$S konnte nicht geparst werden
- Ungültiger Host %1$S konnte nicht geparst werden
- Schema in %1$S konnte nicht geparst werden
- Port in %1$S konnte nicht geparst werden
- Doppelte %1$S-Direktiven erkannt. Alle bis auf die erste Instanz werden ignoriert.
- Direktive '%1$S' wurde veraltet. Bitte verwenden Sie die Direktive 'worker-src', um Worker zu kontrollieren, oder die Direktive 'frame-src', um Frames zu kontrollieren.
- Ungültige Sandbox-Flagge '%1$S' konnte nicht geparst werden
