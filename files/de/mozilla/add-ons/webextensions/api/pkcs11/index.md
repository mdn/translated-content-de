---
title: pkcs11
slug: Mozilla/Add-ons/WebExtensions/API/pkcs11
l10n:
  sourceCommit: 3116241f515352d336d2edb460cebfe99d43aea7
---

Die `pkcs11`-API ermöglicht es einer Erweiterung, [PKCS #11](https://en.wikipedia.org/wiki/PKCS_11)-Sicherheitsmodule aufzulisten und sie dem Browser als Quellen für Schlüssel und Zertifikate zugänglich zu machen.

Um diese API zu verwenden, benötigen Sie die [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) „pkcs11“.

## PKCS #11-Module über die Firefox-Einstellungen installieren

Gehen Sie wie folgt vor:

1. Speichern Sie das PKCS #11-Modul an einem dauerhaften Speicherort auf Ihrem Computer.
2. Öffnen Sie die Firefox-Einstellungen.
3. Wählen Sie auf der Einstellungsseite **Datenschutz & Sicherheit** und klicken Sie unter „Verbindungs- und Softwaresicherheit“ auf **Erweiterte Einstellungen**.
4. Suchen Sie den Abschnitt „Zertifikate“ und klicken Sie auf **Sicherheitsgeräte verwalten**.
   ![Das Dialogfeld zur Geräteverwaltung mit einer Liste der Sicherheitsmodule und Geräte](device_manager.png)

5. Klicken Sie auf **Laden**.
   ![Das Dialogfeld zum Laden eines PKCS#11-Gerätetreibers](load_device_driver.png)

6. Geben Sie einen Namen für das Sicherheitsmodul ein, beispielsweise „_Meine Client-Datenbank_“.

7. Klicken Sie auf **Durchsuchen…**, um das PKCS #11-Modul auf Ihrem Computer zu finden, und bestätigen Sie anschließend mit **OK**.

## PKCS #11-Module bereitstellen

> [!NOTE]
> Ab Firefox 58 können Erweiterungen diese API verwenden, um PKCS #11-Module aufzulisten und sie dem Browser als Quellen für Schlüssel und Zertifikate zugänglich zu machen.

Für die Verwendung dieser **API** müssen zwei Voraussetzungen in der Umgebung erfüllt sein:

- Auf dem Computer des Benutzers muss mindestens ein `PKCS #11`-Modul installiert sein.
- Für jedes installierte `PKCS #11`-Modul muss eine [Native-Manifest-Datei](/de/docs/Mozilla/Add-ons/WebExtensions/Native_manifests) vorhanden sein, über die der Browser das Modul finden kann.

In der Regel installiert der Benutzer oder der Geräteadministrator das `PKCS #11`-Modul. Das Installationsprogramm installiert dabei gleichzeitig die Native-Manifest-Datei.

Das Modul und die Manifest-Datei können jedoch nicht im Rahmen der Installation der Erweiterung selbst installiert werden.

Einzelheiten zum Inhalt und Speicherort der Manifest-Datei finden Sie unter [Native Manifests](/de/docs/Mozilla/Add-ons/WebExtensions/Native_manifests).

## Funktionen

- {{WebExtAPIRef("pkcs11.getModuleSlots()")}}
  - : Ruft für jeden Slot eines Moduls dessen Namen ab und gibt an, ob er ein Token enthält.
- {{WebExtAPIRef("pkcs11.installModule()")}}
  - : Installiert das angegebene PKCS #11-Modul.
- {{WebExtAPIRef("pkcs11.isModuleInstalled()")}}
  - : Prüft, ob das angegebene PKCS #11-Modul installiert ist.
- {{WebExtAPIRef("pkcs11.uninstallModule()")}}
  - : Deinstalliert das angegebene PKCS #11-Modul.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
