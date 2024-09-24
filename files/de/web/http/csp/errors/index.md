---
title: CSP-Fehler und Warnungen (Content Security Policy)
slug: Web/HTTP/CSP/Errors
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

Wenn Sie eine der folgenden Meldungen in der Konsole der Entwicklerwerkzeuge des Browsers sehen, weist dies auf ein Problem im Zusammenhang mit [CSP](/de/docs/Web/HTTP/CSP) hin.

- [Die Seiteneinstellungen blockierten das Laden einer Ressource: %1$S](/de/docs/Web/HTTP/CSP/Errors/CSPViolation)
- Die Seiteneinstellungen blockierten das Laden einer Ressource bei %2$S ("%1$S").
- Es trat ein Verstoß gegen eine reine Bericht-CSP-Richtlinie auf ("%1$S"). Das Verhalten wurde erlaubt und ein CSP-Bericht wurde gesendet.
- Die Seiteneinstellungen beobachteten das Laden einer Ressource bei %2$S ("%1$S"). Ein CSP-Bericht wird gesendet.
- Versuch, Bericht an ungültige URI zu senden: "%1$S"
- Bericht-URI konnte nicht geparst werden: %1$S
- Unbekannte Direktive '%1$S' konnte nicht verarbeitet werden
- Unbekannte Option %1$S wird ignoriert
- Doppelte Quelle %1$S wird ignoriert
- Quelle '%1$S' wird ignoriert (nicht unterstützt, wenn über Meta-Element bereitgestellt).
- "%1$S" innerhalb von script-src oder style-src wird ignoriert: nonce-source oder hash-source angegeben
- "%1$S" innerhalb von script-src wird ignoriert: 'strict-dynamic' angegeben
- Quelle "%1$S" wird ignoriert (nur innerhalb von script-src unterstützt).
- Schlüsselwort 'strict-dynamic' innerhalb von "%1$S" ohne gültigen Nonce oder Hash könnte das Laden aller Skripte blockieren
- Der Bericht-URI (%1$S) sollte eine HTTP- oder HTTPS-URI sein.
- Diese Seite (%1$S) hat eine Report-Only-Richtlinie ohne eine Bericht-URI. CSP wird nicht blockieren und kann Verstöße gegen diese Richtlinie nicht melden.
- Konnte nicht erkannte Quelle %1$S nicht parsen
- Ein Versuch, Inline-Skripte auszuführen, wurde blockiert
- Ein Versuch, Inline-Stylesheets anzuwenden, wurde blockiert
- Ein Versuch, JavaScript aus einem String aufzurufen (durch Aufrufen einer Funktion wie eval), wurde blockiert
- Unsichere Anfrage '%1$S' wird auf '%2$S' umgestellt
- Quellen für Direktive '%1$S' werden ignoriert
- %1$S wird als Hostname und nicht als Schlüsselwort interpretiert. Wenn Sie dies als Schlüsselwort verwenden wollten, benutzen Sie '%2$S' (in einfachen Anführungszeichen eingeschlossen).
- Direktive '%1$S' wird nicht unterstützt. Direktive und Werte werden ignoriert.
- Blockierung unsicherer Anfrage '%1$S'.(/de/docs/Web/HTTP/CSP/Errors/blockAllMixedContent)
- '%1$S' wird ignoriert, da sie keine Parameter enthält.
- Sandbox-Direktive wird ignoriert, wenn in einer reinen Bericht-Richtlinie '%1$S' geliefert
- Referrer-Direktive '%1$S' wurde veraltet. Bitte verwenden Sie stattdessen den Referrer-Policy-Header.
- '%1$S' wird aufgrund der '%2$S'-Direktive ignoriert.
- Konnte ungültige Quelle %1$S nicht parsen
- Konnte ungültigen Host %1$S nicht parsen
- Konnte Schema in %1$S nicht parsen
- Konnte Port in %1$S nicht parsen
- Doppelte %1$S-Direktiven entdeckt. Alle außer der ersten Instanz werden ignoriert.
- Direktive '%1$S' wurde veraltet. Bitte verwenden Sie die Direktive 'worker-src', um Worker zu steuern, oder die Direktive 'frame-src', um Frames zu steuern.
- Konnte ungültiges Sandbox-Flag '%1$S' nicht parsen
