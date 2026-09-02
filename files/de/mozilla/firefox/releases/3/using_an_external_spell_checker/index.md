---
title: Verwendung eines externen Rechtschreibprüfers
slug: Mozilla/Firefox/Releases/3/Using_an_external_spell_checker
l10n:
  sourceCommit: ce12c10364f35c64184dec44be85537b7e10d91f
---

Ab Firefox 3 (sowie Thunderbird 3 und SeaMonkey 2) können Sie nun einen externen Rechtschreibprüfer mithilfe einer Erweiterung installieren.

Dies ist _nicht_ für Erweiterungen gedacht, die ein Wörterbuch zum integrierten Hunspell-Rechtschreibprüfer hinzufügen möchten.

Ein [Beispiel](https://sourceforge.net/projects/voikko/) für eine Rechtschreibprüfer-Erweiterung finden Sie im Rahmen des [Voikko](https://voikko.puimula.org/) Projekts.

## Implementierung der Rechtschreibprüfer-Unterstützung

Für die Implementierung eines Rechtschreibprüfers sind folgende Schritte notwendig:

1. Implementieren Sie eine Klasse, die von `mozISpellCheckingEngine` abgeleitet ist und die erforderliche Funktionalität implementiert oder auf einen externen Rechtschreibprüfer zugreift.
2. Die Methode `mozISpellCheckingEngine.getDictionaryList()` von `mozISpellCheckingEngine` sollte implementiert werden, um eine Liste von Wörterbüchern zurückzugeben, die vom Rechtschreibprüfer unterstützt werden.
3. Die Erweiterung muss einen Registrierungsrückruf bereitstellen. Der Registrierungsrückruf muss `nsICategoryManager` verwenden, um im Abschnitt "spell-check-engine" einen Eintrag mit einem Namen zu installieren, der mit der Contract-ID der Klasse übereinstimmt, die die Rechtschreibprüffunktionalität implementiert.
4. Die Erweiterung muss auch einen Deregistrierungsrückruf bereitstellen, der den Kategorieneintrag entfernen muss.

Der Wert des Kategorieneintrags kann nach Belieben gewählt werden. Sie können ihn zum Beispiel verwenden, um den Pfad zur gemeinsam genutzten Bibliothek aufzuzeichnen, die von der Erweiterung zur Handhabung der Rechtschreibprüfung verwendet wird, um es anderen Komponenten der Erweiterung leicht zu machen, diese zu finden.

## Priorisierung von Rechtschreibprüfungswörterbüchern

Von Rechtschreibprüfer-Erweiterungen bereitgestellte Wörterbücher überschreiben integrierte Wörterbücher. Wenn mehrere Erweiterungen Wörterbücher für dieselbe Sprache bereitstellen, wird das zuerst gefundene verwendet.
