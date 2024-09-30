---
title: Schriftarten für MathML
slug: Web/MathML/Fonts
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{MathMLRef}}

Schriftarten mit angemessener Unicode-Abdeckung und Open Font Format-Features sind erforderlich für eine gute Mathe-Darstellung. Diese Seite beschreibt, wie Nutzer solche Mathematikschriftarten installieren können, um MathML in Browsern richtig anzuzeigen.

## Installationsanweisungen

Als allgemeine Faustregel wird empfohlen, sowohl _Latin Modern Math_ (welches den für mathematische Formeln beliebten [Computer Modern](https://en.wikipedia.org/wiki/Computer_Modern) Stil verwendet) als auch _STIX Two Math_ (welches eine große Unicode-Abdeckung für wissenschaftliche Zeichen hat) zu installieren. In den folgenden Abschnitten finden Sie detaillierte Anweisungen zur Installation dieser Schriftarten auf verschiedenen Betriebssystemen.

### Windows

Installieren Sie die Schriftarten _Latin Modern Math_ und _STIX Two Math_ wie folgt:

1. Laden Sie [latinmodern-math-1959.zip](https://www.gust.org.pl/projects/e-foundry/lm-math/download/latinmodern-math-1959.zip) herunter.
2. Öffnen Sie das ZIP-Archiv, navigieren Sie in das Verzeichnis `latinmodern-math-1959` und dann in das Verzeichnis `otf`. Dort finden Sie die Schriftdatei `latinmodern-math`.
3. Öffnen Sie die Schriftdatei `latinmodern-math` und klicken Sie auf die Schaltfläche **Installieren**.
4. Laden Sie [static_otf.zip](https://raw.githubusercontent.com/stipub/stixfonts/master/zipfiles/static_otf.zip) herunter.
5. Öffnen Sie das `static_otf.zip` ZIP-Archiv und navigieren Sie in das Verzeichnis `static_otf`. Dort finden Sie eine Datei `STIXTwoMath-Regular`.
6. Öffnen Sie die Datei `STIXTwoMath-Regular` und klicken Sie auf die Schaltfläche **Installieren**. Falls gewünscht, können Sie dasselbe für die anderen Schriftdateien im Verzeichnis tun.

> **Hinweis:** _Cambria Math_ ist standardmäßig auf Windows installiert und sollte eine relativ gute MathML-Darstellung gewährleisten.

### macOS

Installieren Sie die Schriftart _Latin Modern Math_ wie folgt:

1. Laden Sie [latinmodern-math-1959.zip](https://www.gust.org.pl/projects/e-foundry/lm-math/download/latinmodern-math-1959.zip) herunter.
2. Entpacken Sie das ZIP-Archiv, navigieren Sie in das Verzeichnis `latinmodern-math-1959` und dann in das Verzeichnis `otf`. Dort finden Sie die Schriftdatei `latinmodern-math`.
3. Doppelklicken Sie auf die Schriftdatei `latinmodern-math` und klicken Sie auf die Schaltfläche **Schriftart installieren** im Fenster, das sich öffnet.

> [!NOTE]
> Wenn Sie macOS Ventura (Version 13) oder höher verwenden, dann ist _STIX Two Math_ bereits vorinstalliert und Sie können die folgenden Schritte überspringen.

Installieren Sie die Schriftart _STIX Two Math_ wie folgt:

1. Laden Sie [static_otf.zip](https://raw.githubusercontent.com/stipub/stixfonts/master/zipfiles/static_otf.zip) herunter.
2. Öffnen Sie das `static_otf.zip` ZIP-Archiv und navigieren Sie in das Verzeichnis `static_otf`. Dort finden Sie die Datei `STIXTwoMath-Regular.otf`.
3. Öffnen Sie die Datei `STIXTwoMath-Regular.otf` und klicken Sie auf die Schaltfläche **Schriftart installieren** im Fenster, das sich öffnet. Falls gewünscht, können Sie dasselbe für die anderen Schriftdateien im Verzeichnis tun.

> [!NOTE]
> Eine veraltete Version von _STIX_ ist ab OS X Lion (Version 10.7) vorinstalliert. Obwohl einige Browser in der Lage sind, es zu nutzen, wird dringend empfohlen, den obigen Anweisungen für eine optimale Mathedarstellung zu folgen.

### Linux

Im Folgenden finden Sie Befehle zur Ausführung auf beliebten Linux-Distributionen, um die Schriftarten _Latin Modern Math_ und _STIX Two Math_ mithilfe Ihres Paketmanagers zu installieren. Alternative Ansätze werden ebenfalls bereitgestellt, falls Ihre Linux-Distribution keine dedizierten Pakete für diese Schriftarten anbietet.

#### Debian-basierte Distributionen (inklusive Ubuntu und Mint)

```bash
sudo apt-get install fonts-lmodern fonts-stix
```

#### Fedora-basierte Distributionen

```bash
sudo dnf install texlive-lm-math stix-math-fonts
```

#### openSUSE-basierte Distributionen

```bash
sudo zypper install texlive-lm-math stix-fonts
```

#### Arch Linux

```bash
sudo pacman -S otf-latinmodern-math otf-stix
```

#### TeXLive-Pakete

Falls Ihre Linux-Distribution keine Pakete für die Schriftarten _Latin Modern Math_ und _STIX_ bereitstellt, ziehen Sie in Betracht, stattdessen die `texlive`-Pakete zu installieren, die die Schriftarten _Latin Modern Math_ und _XITS_ enthalten. Zum Beispiel auf Mageia:

```bash
sudo urpmi texlive-dist texlive-fontsextra
```

Allerdings müssen Sie wahrscheinlich sicherstellen, dass diese Schriftarten Ihrem System bekannt sind. Fügen Sie eine `fontconfig`-Konfiguration `/etc/fonts/conf.avail/09-texlive-fonts.conf` hinzu, die auf das `opentype`-Verzeichnis von TeXLive verweist, wie zum Beispiel:

```xml
<?xml version="1.0"?>
<!DOCTYPE fontconfig SYSTEM "fonts.dtd">
<fontconfig>
  <dir>/your/path/to/texmf-dist/fonts/opentype</dir>
</fontconfig>
```

Fügen Sie schließlich diese Konfigurationsdatei zur System-Schriftortliste hinzu und regenerieren Sie den `fontconfig`-Cache:

```bash
ln -sf /etc/fonts/conf.avail/09-texlive-fonts.conf /etc/fonts/conf.d/
fc-cache -sf
```

#### Upstream-Pakete

Falls auf Ihrer Linux-Distribution keine Pakete verfügbar sind oder Sie einfach Upstream-Pakete installieren möchten, versuchen Sie Folgendes:

1. Laden Sie [latinmodern-math-1959.zip](https://www.gust.org.pl/projects/e-foundry/lm-math/download/latinmodern-math-1959.zip) und [static_otf.zip](https://raw.githubusercontent.com/stipub/stixfonts/master/zipfiles/static_otf.zip) herunter.
2. Erstellen Sie ein `~/.fonts`, falls es noch nicht existiert, und platzieren Sie `latinmodern-math.otf` und `STIXTwoMath-Regular.otf` in diesem Verzeichnis.
3. Führen Sie `fc-cache -f` aus, um den `fontconfig`-Cache zu regenerieren.

### Android

Sie müssen das [MathML-fonts Add-on](https://addons.mozilla.org/en-US/firefox/addon/mathml-fonts/) verwenden.

> [!NOTE]
> Noto Sans Math bietet eine gute Unicode-Abdeckung für mathematische Symbole und [Google plant, Unterstützung für Mathematiklayout-Funktionen hinzuzufügen](https://github.com/notofonts/math/issues/14#issuecomment-1161414446).

### Andere Systeme

Auf anderen Systemen sollten Sie in Betracht ziehen, eine [Schriftart mit einem MATH-Tabellenstruktur](#schriftarten_mit_einer_math-tabelle) mithilfe Ihres Paketmanagers zu installieren. Beachten Sie, dass diese Schriftarten im Allgemeinen mit TeX-Distributionen wie [TeX Live](https://www.tug.org/texlive/) geliefert werden, Sie jedoch möglicherweise spezifische Anweisungen befolgen müssen, damit Ihr System von den Schriftarten weiß. Als letzte Maßnahme installieren Sie das [MathML fonts add-on](https://addons.mozilla.org/en-US/firefox/addon/mathml-fonts/).

## Erweiterte Einrichtung

In den folgenden Abschnitten finden Sie weitere nützliche Tipps zur Installation und Konfiguration von Schriftarten für MathML.

### Arabische mathematische alphabetische Symbole

Derzeit haben sehr wenige Schriftarten passende Glyphen für die arabischen mathematischen alphabetischen Symbole. Wenn Sie diese Zeichen voraussichtlich benötigen, wird empfohlen, die Schriftarten _XITS_ oder [Amiri](https://www.amirifont.org/) zu installieren.

### Installation ohne Administratorrechte

Wenn Sie Schriftarten auf einem System ohne Administratorrechte installieren müssen, ist die einfachste Option, die Schriftart über das [MathML-fonts Add-on](https://addons.mozilla.org/en-US/firefox/addon/mathml-fonts/) zu verwenden. Beachten Sie, dass die Verwendung des Add-ons nicht optimal ist, da es Ihren Gecko-Browser zwingt, auf jeder besuchten Seite ein CSS-Stylesheet zu laden sowie Web-Mathe-Schriftarten auf allen Seiten mit MathML-Inhalten zu laden.

Eine bessere Alternative auf UNIX-Systemen ist, die OTF-Dateien für [Latin Modern Math](https://www.gust.org.pl/projects/e-foundry/lm-math/download/latinmodern-math-1959.zip) und [STIX](https://github.com/stipub/stixfonts) in einen lokalen Schriftartenordner zu installieren und (falls notwendig) `fc-cache` darauf auszuführen. Auf macOS und Linux sind die Standardpfade jeweils `~/Library/Fonts/` und `~/.fonts`.

### Schriftarten mit einer MATH-Tabelle

Sie können tatsächlich jede [mathematische OpenType-Schriftart](https://fred-wang.github.io/MathFonts/) installieren und zur MathML-Darstellung verwenden. Einige Browser bieten eine Möglichkeit, die Standardschrift für MathML in ihrem Schriftartenpräferenzen-Menü zu konfigurieren. Alternativ können Sie das [MathML-fontsettings Add-on](https://addons.mozilla.org/en-US/firefox/addon/mathml-font-settings/) ausprobieren.

- [Asana Math](https://www.ctan.org/tex-archive/fonts/Asana-Math/)
- [Cambria Math](https://learn.microsoft.com/en-us/typography/font-list/?FID=360)
- [DejaVu Math TeX Gyre](https://sourceforge.net/projects/dejavu/files/dejavu/)
- [Garamond Math](https://github.com/YuanshengZhao/Garamond-Math)
- [Latin Modern Math](https://www.gust.org.pl/projects/e-foundry/lm-math)
- [Libertinus Math](https://github.com/alerque/libertinus)
- [STIX Math](https://github.com/stipub/stixfonts)
- [TeX Gyre Bonum Math](https://www.gust.org.pl/projects/e-foundry/tg-math/download/index_html#Bonum_Math)
- [TeX Gyre Pagella Math](https://www.gust.org.pl/projects/e-foundry/tg-math/download/index_html#Pagella_Math)
- [TeX Gyre Schola Math](https://www.gust.org.pl/projects/e-foundry/tg-math/download/index_html#Schola_Math)
- [TeX Gyre Termes Math](https://www.gust.org.pl/projects/e-foundry/tg-math/download/index_html#Termes_Math)
- [XITS Math](https://github.com/aliftype/xits/releases)
- [Fira Math](https://github.com/firamath/firamath)
- [GFS Neohellenic Math](https://greekfontsociety-gfs.gr/typefaces/Math)
