---
title: CSP-Fehler und Warnungen (Content Security Policy)
slug: Web/HTTP/Guides/CSP/Errors
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Wenn eines der folgenden Meldungen in der Entwicklerkonsole des Browsers protokolliert wird, weist dies darauf hin, dass ein Problem im Zusammenhang mit [CSP](/de/docs/Web/HTTP/Guides/CSP) aufgetreten ist.

- [Die Einstellungen der Seite blockierten das Laden einer Ressource: %1$S](/de/docs/Web/HTTP/Guides/CSP/Errors/CSPViolation)
- Die Einstellungen der Seite blockierten das Laden einer Ressource bei %2$S ("%1$S").
- Ein Verstoß gegen eine nur-berichtende CSP-Richtlinie trat auf ("%1$S"). Das Verhalten wurde erlaubt und ein CSP-Bericht wurde gesendet.
- Die Einstellungen der Seite beobachteten das Laden einer Ressource bei %2$S ("%1$S"). Ein CSP-Bericht wird gesendet.
- Versuch, Bericht an ungültige URI zu senden: "%1$S"
- Konnte Berichts-URI nicht analysieren: %1$S
- Konnte unbekannte Direktive '%1$S' nicht verarbeiten
- Unbekannte Option %1$S ignoriert
- Doppelte Quelle %1$S ignoriert
- Quelle '%1$S' ignoriert (nicht unterstützt, wenn über Meta-Element bereitgestellt).
- "%1$S" innerhalb von script-src oder style-src ignoriert: nonce-Quelle oder hash-Quelle angegeben
- "%1$S" innerhalb von script-src ignoriert: 'strict-dynamic' angegeben
- Quelle "%1$S" ignoriert (nur innerhalb von script-src unterstützt).
- Schlüsselwort 'strict-dynamic' innerhalb "%1$S" ohne gültige Nonce oder Hash könnte das Laden aller Skripte blockieren
- Die Bericht-URI (%1$S) sollte eine HTTP- oder HTTPS-URI sein.
- Diese Seite (%1$S) hat eine nur-berichtende Richtlinie ohne Bericht-URI. CSP wird nicht blockieren und kann Verstöße gegen diese Richtlinie nicht melden.
- Konnte nicht erkannte Quelle %1$S nicht analysieren
- Ein Versuch, Inline-Skripte auszuführen, wurde blockiert
- Ein Versuch, Inline-Stylesheets anzuwenden, wurde blockiert
- Ein Versuch, JavaScript aus einem String aufzurufen (durch Aufrufen einer Funktion wie eval), wurde blockiert
- Unsichere Anfrage '%1$S' wird auf '%2$S' aufgerüstet
- Quellen für Direktive '%1$S' ignoriert
- Interpretiere %1$S als Hostname, nicht als Schlüsselwort. Wenn dies als Schlüsselwort gemeint war, verwenden Sie '%2$S' (in einfache Anführungszeichen eingeschlossen).
- Direktive '%1$S' wird nicht unterstützt. Direktive und Werte werden ignoriert.
- Blockierung unsicherer Anfrage '%1$S'.(/de/docs/Web/HTTP/CSP/Errors/blockAllMixedContent)
- Ignoriere '%1$S', da es keine Parameter enthält.
- Ignoriere Sandbox-Direktive, wenn sie in einer nur-berichtenden Richtlinie '%1$S' geliefert wird
- Verweiser-Direktive '%1$S' wurde veraltet. Bitte verwenden Sie stattdessen den Referrer-Policy-Header.
- Ignoriere '%1$S' wegen der '%2$S'-Direktive.
- Konnte ungültige Quelle %1$S nicht analysieren
- Konnte ungültigen Host %1$S nicht analysieren
- Konnte Schema in %1$S nicht analysieren
- Konnte Port in %1$S nicht analysieren
- Doppelte %1$S-Direktiven erkannt. Alle außer der ersten Instanz werden ignoriert.
- Direktive '%1$S' wurde veraltet. Bitte verwenden Sie die Direktive 'worker-src', um Arbeiter zu steuern, oder die Direktive 'frame-src', um Frames zu steuern.
- Konnte ungültige Sandbox-Flagge '%1$S' nicht analysieren

## Siehe auch

- {{HTTPHeader("Content-Security-Policy")}} HTTP-Header
