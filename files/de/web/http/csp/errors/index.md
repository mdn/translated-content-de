---
title: CSP-Fehler und Warnungen (Content Security Policy)
slug: Web/HTTP/CSP/Errors
l10n:
  sourceCommit: ab1bf2c5955c1bfa4d96d779f701ab22f3870d43
---

{{HTTPSidebar}}

Wenn im Browser-Entwicklungstool-Konsolenprotokoll eines der folgenden Meldungen angezeigt wird, deutet dies darauf hin, dass ein Problem im Zusammenhang mit der [CSP](/de/docs/Web/HTTP/CSP) aufgetreten ist.

- [Die Seiteneinstellungen haben das Laden einer Ressource blockiert: %1$S](/de/docs/Web/HTTP/CSP/Errors/CSPViolation)
- Die Seiteneinstellungen haben das Laden einer Ressource bei %2$S ("%1$S") blockiert.
- Es trat ein Verstoß gegen eine CSP-Richtlinie im "Nur-Bericht"-Modus ("%1$S") auf. Das Verhalten wurde erlaubt, und ein CSP-Bericht wurde gesendet.
- Die Seiteneinstellungen beobachteten das Laden einer Ressource bei %2$S ("%1$S"). Ein CSP-Bericht wird gesendet.
- Versuch, Bericht an ungültige URI zu senden: "%1$S"
- Bericht-URI konnte nicht geparst werden: %1$S
- Unbekannte Direktive '%1$S' konnte nicht verarbeitet werden
- Unbekannte Option %1$S wird ignoriert
- Doppelte Quelle %1$S wird ignoriert
- Quelle '%1$S' wird ignoriert (Nicht unterstützt, wenn über Meta-Element bereitgestellt).
- "%1$S" innerhalb von script-src oder style-src ignoriert: nonce-source oder hash-source angegeben
- "%1$S" innerhalb von script-src ignoriert: 'strict-dynamic' angegeben
- Quelle "%1$S" wird ignoriert (Nur innerhalb von script-src unterstützt).
- Schlüsselwort 'strict-dynamic' innerhalb von "%1$S" ohne gültigen Nonce oder Hash könnte blockieren, dass alle Skripte geladen werden
- Die Bericht-URI (%1$S) sollte eine HTTP- oder HTTPS-URI sein.
- Diese Seite (%1$S) hat eine "Nur-Bericht"-Richtlinie ohne Bericht-URI. CSP wird nicht blockieren und kann Verletzungen dieser Richtlinie nicht melden.
- Unbekannte Quelle %1$S konnte nicht geparst werden
- Ein Versuch, Inline-Skripte auszuführen, wurde blockiert
- Ein Versuch, Inline-Stylesheets anzuwenden, wurde blockiert
- Ein Versuch, JavaScript aus einem String zu rufen (durch Aufruf einer Funktion wie eval), wurde blockiert
- Unsichere Anforderung '%1$S' wird auf Verwendung von '%2$S' aufgerüstet
- Quellen für die Direktive '%1$S' werden ignoriert
- %1$S wird als Hostname interpretiert, nicht als Schlüsselwort. Wenn dies als Schlüsselwort gedacht war, verwenden Sie '%2$S' (in einfache Anführungszeichen gesetzt).
- Unterstützung der Direktive '%1$S' nicht gegeben. Direktive und Werte werden ignoriert.
- Unsichere Anforderung '%1$S' wird blockiert.(/de/docs/Web/HTTP/CSP/Errors/blockAllMixedContent)
- '%1$S' wird ignoriert, da keine Parameter enthalten sind.
- Sandkasten-Direktive wird ignoriert, wenn sie in einer "Nur-Bericht"-Richtlinie '%1$S' geliefert wird
- Referrer-Direktive '%1$S' ist veraltet. Bitte verwenden Sie stattdessen den Referrer-Policy-Header.
- '%1$S' wird wegen '%2$S'-Direktive ignoriert.
- Ungültige Quelle %1$S konnte nicht geparst werden
- Ungültiger Host %1$S konnte nicht geparst werden
- Schema in %1$S konnte nicht geparst werden
- Port in %1$S konnte nicht geparst werden
- Doppelte %1$S-Direktiven erkannt. Alle bis auf die erste Instanz werden ignoriert.
- Direktive '%1$S' ist veraltet. Bitte verwenden Sie die Direktive 'worker-src', um Worker zu kontrollieren, oder die Direktive 'frame-src', um Frames zu kontrollieren.
- Ungültige Sandkasten-Flagge '%1$S' konnte nicht geparst werden

## Siehe auch

- {{HTTPHeader("Content-Security-Policy")}} HTTP-Header
