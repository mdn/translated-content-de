---
title: Schriften für MathML
short-title: Fonts
slug: Web/MathML/Guides/Fonts
l10n:
  sourceCommit: c263f06fa14ed56153e345006bb459c9df014b98
---

Schriften mit angemessener Unicode-Unterstützung und Open Font Format-Funktionen sind erforderlich für eine gute mathematische Darstellung. Diese Seite beschreibt, wie Benutzer solche Mathe-Schriften installieren können, um MathML in Browsern korrekt anzuzeigen.

## Installationsanweisungen

Als allgemeine Faustregel wird empfohlen, sowohl _Latin Modern Math_ (die den für mathematische Formeln beliebten [Computer Modern](https://en.wikipedia.org/wiki/Computer_Modern)-Stil verwendet) als auch _STIX Two Math_ (die eine große Unicode-Unterstützung für wissenschaftliche Zeichen bietet) zu installieren. In den folgenden Abschnitten finden Sie detaillierte Anweisungen zur Installation dieser Schriften auf verschiedenen Betriebssystemen.

### Windows

Installieren Sie die _Latin Modern Math_- und _STIX Two Math_-Schriften wie folgt:

1. Laden Sie [latinmodern-math-1959.zip](https://www.gust.org.pl/projects/e-foundry/lm-math/download/latinmodern-math-1959.zip) herunter.
2. Öffnen Sie das ZIP-Archiv, gehen Sie in den Ordner `latinmodern-math-1959` und dann in den `otf`-Ordner. Dort finden Sie die Schriftdatei `latinmodern-math`.
3. Öffnen Sie die Datei `latinmodern-math` und klicken Sie auf den **Installieren**-Button.
4. Laden Sie [static_otf.zip](https://raw.githubusercontent.com/stipub/stixfonts/master/zipfiles/static_otf.zip) herunter.
5. Öffnen Sie das ZIP-Archiv `static_otf.zip` und gehen Sie dann in den Ordner `static_otf`. Unter den Dateien finden Sie eine Datei `STIXTwoMath-Regular`.
6. Öffnen Sie die Datei `STIXTwoMath-Regular` und klicken Sie auf den **Installieren**-Button. Wenn gewünscht, können Sie dasselbe auch für die anderen Schriftdateien im Ordner tun.

> **Hinweis:** _Cambria Math_ ist standardmäßig auf Windows installiert und sollte eine relativ gute MathML-Darstellung gewährleisten.

### macOS

Installieren Sie die _Latin Modern Math_-Schrift wie folgt:

1. Laden Sie [latinmodern-math-1959.zip](https://www.gust.org.pl/projects/e-foundry/lm-math/download/latinmodern-math-1959.zip) herunter.
2. Entpacken Sie das ZIP-Archiv, gehen Sie in den Ordner `latinmodern-math-1959` und dann in den `otf`-Ordner. Dort finden Sie die Schriftdatei `latinmodern-math`.
3. Doppelklicken Sie auf die Datei `latinmodern-math` und klicken Sie im geöffneten Fenster auf den Button **Schriftart installieren**.

> [!NOTE]
> Wenn Sie macOS Ventura (Version 13) oder höher verwenden, ist _STIX Two Math_ bereits vorinstalliert und Sie können die folgenden Schritte überspringen.

Installieren Sie die _STIX Two Math_-Schrift wie folgt:

1. Laden Sie [static_otf.zip](https://raw.githubusercontent.com/stipub/stixfonts/master/zipfiles/static_otf.zip) herunter.
2. Öffnen Sie das ZIP-Archiv `static_otf.zip` und gehen Sie dann in den Ordner `static_otf`. Unter den Dateien finden Sie die Datei `STIXTwoMath-Regular.otf`.
3. Öffnen Sie die Datei `STIXTwoMath-Regular.otf` und klicken Sie im geöffneten Fenster auf den Button **Schriftart installieren**. Wenn gewünscht, können Sie dasselbe auch für die anderen Schriftdateien im Ordner tun.

> [!NOTE]
> Eine veraltete Version von _STIX_ ist ab OS X Lion (Version 10.7) vorinstalliert. Obwohl einige Browser diese nutzen können, wird dringend empfohlen, die obigen Anweisungen für eine optimale Mathematikdarstellung zu befolgen.

### Linux

Im Folgenden finden Sie Befehle, die auf beliebten Linux-Distributionen ausgeführt werden können, um die _Latin Modern Math_- und _STIX Two Math_-Schriften über Ihren Paketmanager zu installieren. Alternative Ansätze werden ebenfalls bereitgestellt, falls Ihre Linux-Distribution keine speziellen Pakete für diese Schriften bietet.

#### Debian-basierte Distributionen (einschließlich Ubuntu und Mint)

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

Wenn Ihre Linux-Distribution keine Pakete für die _Latin Modern Math_- und _STIX_-Schriften bereitstellt, ziehen Sie stattdessen die Installation der `texlive`-Pakete in Betracht, die die _Latin Modern Math_- und _XITS_-Schriften enthalten. Zum Beispiel auf Mageia:

```bash
sudo urpmi texlive-dist texlive-fontsextra
```

Sie müssen jedoch wahrscheinlich sicherstellen, dass diese Schriften Ihrem System bekannt sind. Fügen Sie eine fontconfig-Konfiguration `/etc/fonts/conf.avail/09-texlive-fonts.conf` hinzu, die auf das `opentype`-Verzeichnis von TeXLive verweist, wie zum Beispiel:

```xml
<?xml version="1.0"?>
<!DOCTYPE fontconfig SYSTEM "fonts.dtd">
<fontconfig>
  <dir>/your/path/to/texmf-dist/fonts/opentype</dir>
</fontconfig>
```

Fügen Sie schließlich diese Konfigurationsdatei zur Systemschriftartenliste hinzu und erneuern Sie den fontconfig-Cache:

```bash
ln -sf /etc/fonts/conf.avail/09-texlive-fonts.conf /etc/fonts/conf.d/
fc-cache -sf
```

#### Upstream-Pakete

Falls keine Pakete auf Ihren Linux-Distributionen verfügbar sind, oder wenn Sie einfach Upstream-Pakete installieren möchten, versuchen Sie Folgendes:

1. Laden Sie [latinmodern-math-1959.zip](https://www.gust.org.pl/projects/e-foundry/lm-math/download/latinmodern-math-1959.zip) und [static_otf.zip](https://raw.githubusercontent.com/stipub/stixfonts/master/zipfiles/static_otf.zip) herunter.
2. Erstellen Sie ein `~/.fonts`, falls es noch nicht existiert, und platzieren Sie `latinmodern-math.otf` und `STIXTwoMath-Regular.otf` in diesem Verzeichnis.
3. Führen Sie `fc-cache -f` aus, um den fontconfig-Cache neu zu generieren.

### Android

Sie müssen das [MathML-fonts Add-on](https://addons.mozilla.org/en-US/firefox/addon/mathml-fonts/) verwenden.

> [!NOTE]
> Noto Sans Math bietet eine gute Unicode-Unterstützung für mathematische Symbole und [Google plant, Unterstützung für mathematische Layout-Funktionen hinzuzufügen](https://github.com/notofonts/math/issues/14#issuecomment-1161414446).

### Andere Systeme

Bei anderen Systemen sollten Sie erwägen, eine [Schrift mit einer MATH-Tabelle](#schriften_mit_einer_math-tabelle) über Ihren Paketmanager zu installieren. Beachten Sie, dass diese Schriften in der Regel mit TeX-Distributionen wie [TeX Live](https://www.tug.org/texlive/) geliefert werden, Sie jedoch möglicherweise bestimmten Anweisungen folgen müssen, damit Ihr System die Schriften erkennt. Als letzte Option installieren Sie das [MathML fonts Add-on](https://addons.mozilla.org/en-US/firefox/addon/mathml-fonts/).

## Erweiterte Einrichtung

In den folgenden Abschnitten finden Sie weitere nützliche Tipps für die Installation und Konfiguration von Schriften für MathML.

### Arabische mathematische alphabetische Symbole

Derzeit haben nur sehr wenige Schriften geeignete Glyphen für die arabischen mathematischen alphabetischen Symbole. Wenn Sie diese Zeichen benötigen, empfehlen wir die Installation der _XITS_- oder [Amiri](https://aliftype.com/amiri/)-Schriften.

### Installation ohne Administratorrechte

Wenn Sie Schriften auf einem System ohne Administratorrechte installieren müssen, ist die einfachste Option die Verwendung des [MathML-fonts Add-on](https://addons.mozilla.org/en-US/firefox/addon/mathml-fonts/). Beachten Sie, dass die Verwendung des Add-ons nicht optimal ist, da es Ihren Gecko-Browser zwingt, ein CSS-Stylesheet auf jeder Seite, die Sie besuchen, sowie Web-Math-Schriften auf allen Seiten mit MathML-Inhalt zu laden.

Eine bessere Alternative auf UNIX-Systemen ist die Installation der OTF-Dateien für [Latin Modern Math](https://www.gust.org.pl/projects/e-foundry/lm-math/download/latinmodern-math-1959.zip) und [STIX](https://github.com/stipub/stixfonts) in einem lokalen Schriftartenordner und (falls notwendig) `fc-cache` darauf auszuführen. Auf macOS und Linux sind die Standardpfade `~/Library/Fonts/` bzw. `~/.fonts`.

### Schriften mit einer MATH-Tabelle

Sie können tatsächlich jede [mathematische OpenType-Schrift](https://fred-wang.github.io/MathFonts/) installieren und sie für MathML-Rendering verwenden. Einige Browser bieten eine Möglichkeit, die Standardschrift für MathML in ihrem Schriftpräferenzmenü zu konfigurieren. Alternativ können Sie das [MathML Font Settings Add-on](https://addons.mozilla.org/en-US/firefox/addon/mathml-font-settings/) ausprobieren.

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
