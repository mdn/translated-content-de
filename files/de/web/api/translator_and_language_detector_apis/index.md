---
title: Translator and Language Detector APIs
slug: Web/API/Translator_and_Language_Detector_APIs
l10n:
  sourceCommit: aed56607fa2bc1f0678ea0846a1b62bd9571ff7b
---

{{DefaultAPISidebar("Translator and Language Detector APIs")}}{{SeeCompatTable}}{{securecontext_header}}

Die **Translator- und Spracherkennungs-APIs** bieten Funktionen zur Erkennung der Sprache, in der ein Text verfasst ist, und zur Übersetzung von Texten in verschiedene Sprachen mithilfe des internen KI-Modells eines Browsers (das sich zwischen den Browsern unterscheiden kann).

## Konzepte und Verwendung

Die Übersetzung eines Textkörpers ist eine häufige Aufgabe im heutigen Web. Typische Anwendungsfälle sind:

- Die spontane Übersetzung eines Artikels, der in Ihrer Sprache nicht verfügbar ist.
- Die Übersetzung der Support-Anfragen eines Benutzers in eine Sprache, die der Support-Mitarbeiter versteht.
- Die Ermöglichung von Chats zwischen Benutzern, die nicht die Sprache des jeweils anderen sprechen.

Die Erkennung der Sprache eines Textes ist eine wichtige Voraussetzung für eine erfolgreiche automatisierte Übersetzung, hat aber auch andere Anwendungsmöglichkeiten jenseits der direkten Übersetzung. Beispielsweise ermöglicht es die automatische Konfiguration der Benutzeroberfläche basierend auf der Texteingabe des Benutzers, angefangen von der Aktualisierung von Benutzeroberflächen- und Fehlermeldungen bis hin zur automatischen Lade von geeigneten Wörterbüchern für die Rechtschreibprüfung oder Fluchworderkennung.

KI eignet sich gut zur Unterstützung der Spracherkennung und -übersetzung. Die Translator- und Spracherkennungs-APIs bieten asynchrone (auf {{jsxref("Promise")}} basierende) Mechanismen für eine Website, um Sprachen zu erkennen und Texte über das interne KI-Modell des Browsers zu übersetzen. Dies ist nützlich und effizient, da der Browser den Dienst übernimmt, anstatt dass der Entwickler darauf angewiesen ist, dass der Benutzer KI-Modelle herunterlädt oder einen cloudbasierten Übersetzungsdienst hostet oder dafür bezahlt.

- Die Spracherkennung erfolgt über die [`LanguageDetector`](/de/docs/Web/API/LanguageDetector)-Schnittstelle. Ein `LanguageDetector`-Objekt wird mit der statischen Methode [`LanguageDetector.create()`](/de/docs/Web/API/LanguageDetector/create_static) erstellt, dann wird die Instanzmethode [`detect()`](/de/docs/Web/API/LanguageDetector/detect) mit dem Textstring aufgerufen, um die Sprache zu erkennen.
- Die Übersetzung erfolgt über die [`Translator`](/de/docs/Web/API/Translator)-Schnittstelle. Ein `Translator`-Objekt wird mit der statischen Methode [`Translator.create()`](/de/docs/Web/API/Translator/create_static) erstellt, dann wird die Instanzmethode [`translate()`](/de/docs/Web/API/Translator/translate) mit dem Textstring aufgerufen, um die Übersetzung vorzunehmen.

Sie können auch ausstehende Operationen mit einem [`AbortController`](/de/docs/Web/API/AbortController) abbrechen.

Die `Translator`- und `LanguageDetector`-Instanzen verbrauchen viele Ressourcen, daher wird empfohlen, diese mit einer `destroy()`-Instanzmethode zu entfernen, sobald Sie fertig sind (zum Beispiel [`Translator.destroy()`](/de/docs/Web/API/Translator/destroy)).

Unter [Verwendung der Translator- und Spracherkennungs-APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs/Using) finden Sie eine ausführliche Anleitung zur Nutzung der APIs.

## Schnittstellen

- [`LanguageDetector`](/de/docs/Web/API/LanguageDetector) {{Experimental_Inline}}
  - : Beinhaltet alle Funktionen zur Spracherkennung, einschließlich der Überprüfung der Verfügbarkeit des KI-Modells, der Erstellung einer neuen `LanguageDetector`-Instanz, der Nutzung zur Sprachenerkennung und mehr.
- [`Translator`](/de/docs/Web/API/Translator) {{Experimental_Inline}}
  - : Beinhaltet alle Übersetzungsfunktionen, einschließlich der Überprüfung der Verfügbarkeit des KI-Modells, der Erstellung einer neuen `Translator`-Instanz, der Nutzung zur Übersetzung und mehr.

## HTTP-Header

- {{httpheader("Permissions-Policy")}}; die {{httpheader("Permissions-Policy/language-detector", "language-detector")}}-Direktive
  - : Kontrolliert den Zugriff auf die Spracherkennungsfunktion. Wo eine Richtlinie ihre Nutzung ausdrücklich untersagt, werden alle Versuche, die `LanguageDetector`-Methoden aufzurufen, mit einem `NotAllowedError`-[`DOMException`](/de/docs/Web/API/DOMException) fehlschlagen.
- {{httpheader("Permissions-Policy")}}; die {{httpheader("Permissions-Policy/translator", "translator")}}-Direktive
  - : Kontrolliert den Zugriff auf die Übersetzungsfunktion. Wo eine Richtlinie ihre Nutzung ausdrücklich untersagt, werden alle Versuche, die `Translator`-Methoden aufzurufen, mit einem `NotAllowedError`-[`DOMException`](/de/docs/Web/API/DOMException) fehlschlagen.

## Sicherheitsüberlegungen

Die Erstellung von `LanguageDetector`- und `Translator`-Objekten erfordert, dass der Benutzer kürzlich mit der Seite interagiert hat ([transiente Benutzeraktivierung](/de/docs/Web/Security/User_activation) ist erforderlich).

Der Zugriff auf die API wird ebenfalls durch die {{httpheader("Permissions-Policy/language-detector", "language-detector")}} und {{httpheader("Permissions-Policy/translator", "translator")}} {{httpheader("Permissions-Policy")}}-Direktiven gesteuert.

## Beispiele

Ein vollständiges Beispiel finden Sie unter [Verwendung der Translator- und Spracherkennungs-APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs/Using).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Spracherkennung mit integrierter KI](https://developer.chrome.com/docs/ai/language-detection) auf developer.chrome.com (2025)
- [Übersetzung mit integrierter KI](https://developer.chrome.com/docs/ai/translator-api) auf developer.chrome.com (2025)
