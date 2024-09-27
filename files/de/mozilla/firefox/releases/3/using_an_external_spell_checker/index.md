---
title: Verwenden eines externen Spellcheckers
slug: Mozilla/Firefox/Releases/3/Using_an_external_spell_checker
l10n:
  sourceCommit: 7f74644d98484c67817c1dd556a6e394f5a26a6f
---

{{FirefoxSidebar}}

Ab Firefox 3 (sowie Thunderbird 3 und SeaMonkey 2) können Sie jetzt einen externen Spellchecker über eine Erweiterung installieren.

Dies ist _nicht_ für Erweiterungen gedacht, die ein Wörterbuch zum eingebauten Hunspell-Spellchecker hinzufügen möchten.

Ein [Beispiel](https://sourceforge.net/projects/voikko/) für eine Spellchecker-Erweiterung finden Sie im Rahmen des [Voikko](https://voikko.puimula.org/) Projekts.

## Implementierung der Spellchecker-Unterstützung

Die Implementierung eines Spellcheckers erfordert die folgenden Schritte:

1. Implementieren Sie eine Klasse, die von `mozISpellCheckingEngine` abgeleitet ist und die erforderliche Funktionalität bereitstellt oder auf einen externen Spellchecker zugreift.
2. Die Methode `mozISpellCheckingEngine.getDictionaryList()` von `mozISpellCheckingEngine` sollte implementiert werden, um eine Liste der vom Spellchecker unterstützten Wörterbücher zurückzugeben.
3. Die Erweiterung muss einen Registrierungs-Callback bereitstellen. Der Registrierungs-Callback muss `nsICategoryManager` verwenden, um einen Eintrag in der Kategorie "spell-check-engine" zu installieren, dessen Name der Vertrags-ID der Klasse entspricht, die die Spellcheck-Funktionalität implementiert.
4. Die Erweiterung muss auch einen Abmelde-Callback bereitstellen, der den Kategorieeintrag entfernen muss.

Der Wert des Kategorieeintrags kann nach Belieben gewählt werden. Sie können ihn beispielsweise verwenden, um den Pfad zur gemeinsam genutzten Bibliothek zu speichern, die von der Erweiterung zur Bearbeitung der Rechtschreibprüfung verwendet wird, damit sie von anderen Komponenten der Erweiterung leicht gefunden werden kann.

## Priorisierung von Spellcheck-Wörterbüchern

Wörterbücher, die von Spellcheck-Erweiterungen bereitgestellt werden, überschreiben integrierte Wörterbücher. Wenn mehrere Erweiterungen Wörterbücher für dieselbe Sprache bereitstellen, wird das zuerst gefundene verwendet.
