---
title: Verwenden eines externen Rechtschreibprüfers
slug: Mozilla/Firefox/Releases/3/Using_an_external_spell_checker
l10n:
  sourceCommit: 7f74644d98484c67817c1dd556a6e394f5a26a6f
---

{{FirefoxSidebar}}

Ab Firefox 3 (sowie Thunderbird 3 und SeaMonkey 2) können Sie jetzt einen externen Rechtschreibprüfer mithilfe einer Erweiterung installieren.

Dies ist _nicht_ für Erweiterungen gedacht, die dem integrierten Hunspell-Rechtschreibprüfer ein Wörterbuch hinzufügen möchten.

Ein [Beispiel](https://sourceforge.net/projects/voikko/) für eine Erweiterung eines Rechtschreibprüfers finden Sie als Teil des [Voikko](https://voikko.puimula.org/) Projekts.

## Implementierung der Rechtschreibprüfungsunterstützung

Zur Implementierung eines Rechtschreibprüfers sind folgende Schritte erforderlich:

1. Implementieren Sie eine Klasse, die von `mozISpellCheckingEngine` abgeleitet ist und die erforderliche Funktionalität implementiert oder auf einen externen Rechtschreibprüfer zugreift.
2. Die Methode `mozISpellCheckingEngine.getDictionaryList()` von `mozISpellCheckingEngine` sollte implementiert werden, um eine Liste von Wörterbüchern zurückzugeben, die vom Rechtschreibprüfer unterstützt werden.
3. Die Erweiterung muss einen Registrierungs-Callback bereitstellen. Der Registrierungs-Callback muss `nsICategoryManager` verwenden, um in die Kategorie "spell-check-engine" einen Eintrag mit einem Namen, der der Vertrag-ID der Klasse entspricht, zu installieren, die die Rechtschreibfunktionalität implementiert.
4. Die Erweiterung muss auch einen Unregistrierungs-Callback bereitstellen, der den Kategorieeintrag entfernen muss.

Der Wert des Kategorieeintrags kann nach Belieben gewählt werden. Sie können ihn beispielsweise verwenden, um den Pfad zur gemeinsam genutzten Bibliothek, die von der Erweiterung zur Bearbeitung der Rechtschreibprüfung verwendet wird, zu speichern, um ihn von anderen Komponenten der Erweiterung leicht zu finden.

## Priorisierung von Rechtschreibprüfungs-Wörterbüchern

Von Rechtschreibprüfungserweiterungen bereitgestellte Wörterbücher überschreiben integrierte Wörterbücher. Wenn mehrere Erweiterungen Wörterbücher für die gleiche Sprache bereitstellen, wird das zuerst gefundene verwendet.
