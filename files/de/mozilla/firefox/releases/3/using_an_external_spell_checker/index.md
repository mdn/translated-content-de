---
title: Verwenden eines externen Rechtschreibprüfers
slug: Mozilla/Firefox/Releases/3/Using_an_external_spell_checker
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Ab Firefox 3 (sowie Thunderbird 3 und SeaMonkey 2) können Sie nun einen externen Rechtschreibprüfer über eine Erweiterung installieren.

Dies ist _nicht_ für Erweiterungen gedacht, die ein Wörterbuch zum eingebauten Hunspell-Rechtschreibprüfer hinzufügen möchten.

Ein [Beispiel](https://sourceforge.net/projects/voikko/) für eine Rechtschreibprüfer-Erweiterung finden Sie im Rahmen des [Voikko](https://voikko.puimula.org/) Projekts.

## Implementierung der Unterstützung für Rechtschreibprüfer

Für die Implementierung eines Rechtschreibprüfers sind folgende Schritte erforderlich:

1. Implementieren Sie eine Klasse, die von `mozISpellCheckingEngine` abgeleitet ist und die erforderliche Funktionalität bereitstellt oder auf einen externen Rechtschreibprüfer zugreift.
2. Die Methode `mozISpellCheckingEngine.getDictionaryList()` von `mozISpellCheckingEngine` sollte implementiert werden, um eine Liste der vom Rechtschreibprüfer unterstützten Wörterbücher zurückzugeben.
3. Die Erweiterung muss einen Registrierungs-Callback bereitstellen. Der Registrierungs-Callback muss `nsICategoryManager` verwenden, um in die Kategorie "spell-check-engine" einen Eintrag mit einem Namen, der der Vertrags-ID der Klasse entspricht, die die Rechtschreibprüfung implementiert, zu installieren.
4. Die Erweiterung muss auch einen Unregistrierungs-Callback bereitstellen, der den Kategorieeintrag entfernen muss.

Der Wert des Kategorieeintrags kann nach Belieben gewählt werden. Sie können ihn beispielsweise verwenden, um den Pfad zur von der Erweiterung zur Rechtschreibprüfung verwendeten Shared Library aufzuzeichnen, um sie für andere Komponenten der Erweiterung leicht auffindbar zu machen.

## Priorisierung von Rechtschreibprüfer-Wörterbüchern

Von Rechtschreibprüfer-Erweiterungen bereitgestellte Wörterbücher überschreiben eingebaute Wörterbücher. Wenn mehrere Erweiterungen Wörterbücher für dieselbe Sprache bereitstellen, wird das zuerst gefundene verwendet.
