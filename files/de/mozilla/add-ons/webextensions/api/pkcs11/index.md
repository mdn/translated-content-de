---
title: pkcs11
slug: Mozilla/Add-ons/WebExtensions/API/pkcs11
l10n:
  sourceCommit: 824e5d88f3590fd39892d8975a2255c203feae9b
---

{{AddonSidebar}}

Die `pkcs11` API ermöglicht es einer Erweiterung, [PKCS #11](https://en.wikipedia.org/wiki/PKCS_11)-Sicherheitsmodule aufzulisten und sie dem Browser als Quellen für Schlüssel und Zertifikate zugänglich zu machen.

Um diese API zu nutzen, benötigen Sie die "pkcs11" [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).

## Nutzung des Firefox-Einstellungsdialogs zur Installation von PKCS #11-Modulen

Führen Sie die folgenden Schritte aus:

1. Speichern Sie das PKCS #11-Modul an einem dauerhaften Speicherort auf Ihrem lokalen Computer.
2. Wählen Sie **Extras > Einstellungen** oder wählen Sie das **Firefox-Menü** und dann **Einstellungen**.
3. Sobald die Einstellungsseite geöffnet ist, wählen Sie **Datenschutz & Sicherheit**.
4. Scrollen Sie zum unteren Ende der Seite und klicken oder tippen Sie unter **Zertifikate** auf **Sicherheitsgeräte…**.
   ![Sicherheitsmodule und Geräte](device_manager.png)
5. Klicken oder tippen Sie auf die Schaltfläche **Laden**.
   ![PKCS#11 Gerätetreiber laden](load_device_driver.png)
6. Geben Sie einen Namen für das Sicherheitsmodul ein, z. B. "_Meine Client-Datenbank_".

   > [!WARNING]
   > Seien Sie vorsichtig bei der Verwendung internationaler Zeichen, da es derzeit in Firefox einen Bug gibt, bei dem internationale Zeichen Probleme verursachen können.

7. Wählen Sie **Durchsuchen…**, um den Speicherort des PKCS #11-Moduls auf Ihrem lokalen Computer zu finden, und klicken oder tippen Sie auf **OK**, um zu bestätigen.

## Bereitstellung von PKCS #11-Modulen

> [!NOTE]
> Ab Firefox 58 können Erweiterungen diese API verwenden, um PKCS #11-Module aufzulisten und sie dem Browser als Quellen für Schlüssel und Zertifikate zugänglich zu machen.

Es gibt zwei Umgebungsanforderungen für die Nutzung dieser **API**:

- Eines oder mehrere `PKCS #11`-Module müssen auf dem Computer des Benutzers installiert sein.
- Für jedes installierte `PKCS #11`-Modul muss eine [native Manifest](/de/docs/Mozilla/Add-ons/WebExtensions/Native_manifests)-Datei vorhanden sein, die es dem Browser ermöglicht, das Modul zu finden.

Höchstwahrscheinlich würde der Benutzer oder der Geräteadministrator das `PKCS #11`-Modul installieren, und dessen Installer würde gleichzeitig die native Manifestdatei installieren.

Das Modul und das Manifest können jedoch nicht als Teil des Installationsprozesses der Erweiterung selbst installiert werden.

Für Details über den Inhalt und die Position der Manifestdatei, siehe [Native manifest](/de/docs/Mozilla/Add-ons/WebExtensions/Native_manifests).

## Funktionen

- {{WebExtAPIRef("pkcs11.getModuleSlots()")}}
  - : Für jeden Steckplatz in einem Modul den Namen erhalten und ob es ein Token enthält.
- {{WebExtAPIRef("pkcs11.installModule()")}}
  - : Installiert das benannte PKCS #11-Modul.
- {{WebExtAPIRef("pkcs11.isModuleInstalled()")}}
  - : Überprüft, ob das benannte PKCS #11-Modul installiert ist.
- {{WebExtAPIRef("pkcs11.uninstallModule()")}}
  - : Deinstalliert das benannte PKCS #11-Modul.

## Browser-Kompatibilität

{{WebExtExamples("h2")}}

{{Compat}}
